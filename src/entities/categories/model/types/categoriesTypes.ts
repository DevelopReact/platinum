export interface ICategories {
  id: number;
  parent_id: number;
  name: string;
  slug: string;
  description: string;
  count: number;
  language_code: string;
}

export interface ICategoriesResponse {
  items: ICategories[];
}
