export interface CategoryType {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
}

export interface rootCategoryType {
  categories: CategoryType;
}
