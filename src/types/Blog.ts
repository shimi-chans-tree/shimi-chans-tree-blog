/*types */
import { CategoryType } from './Category';
import { ImageType } from './Image';

export interface BlogItemType {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  description: string;
  content: string;
  eyecatch: ImageType;
  categories: CategoryType[];
}

export interface BlogDataType {
  blogList: BlogItemType[];
  totalCount: number;
}
