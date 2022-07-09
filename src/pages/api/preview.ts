import { NextApiResponse, NextApiRequest } from 'next';
/* config */
import baseAxios from '../../config/baseAxios';

/**
 * constant
 */
const BASE_URL = `${
  process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000/'
}blogs/`;

const preview = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.query.slug) {
    return res.status(404).end();
  }

  const content = await baseAxios.get(
    `${BASE_URL}${req.query.slug}?fields=id&draftKey=${req.query.draftKey}`
  );

  if (!content) {
    return res.status(401).json({ message: 'Invalid slug' });
  }

  res.setPreviewData({
    blogId: content.data.id,
    draftKey: req.query.draftKey,
  });
  res.writeHead(307, { Location: `/${content.data.id}` });
  res.end('Preview mode enabled');
};

export default preview;
