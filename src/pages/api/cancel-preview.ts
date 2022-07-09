import { NextApiResponse, NextApiRequest } from 'next';

const cancelPreview = async (req: NextApiRequest, res: NextApiResponse) => {
  res.clearPreviewData();
  res.writeHead(307, { Location: '/' });
  res.end();
};

export default cancelPreview;
