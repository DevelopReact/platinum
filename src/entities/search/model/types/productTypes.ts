export interface IProduct {
  id: number;
  sku: string;
  slug: string;
  name: string;
  description: string;
  type: string;
  created: string;
  modified: string;
  language_code: string;
  stock_quantity: number;
  average_rating: number;
  min_price: number;
  max_price: number;
  thumbnail: {
    id: number;
    name: string;
    src: string;
  };
  images: [
    {
      id: number;
      name: string;
      src: string;
    }
  ];
  categories: [
    {
      id: number;
      parent_id: number;
      name: string;
      slug: string;
      description: string;
      count: number;
      language_code: string;
    }
  ];
  attributes: [
    {
      id: number;
      slug: string;
      name: string;
      options: [
        {
          id: number;
          slug: string;
          name: string;
          products_count: number;
          color_hex: string;
        }
      ];
    }
  ];
  default_attributes: [
    {
      id: number;
      slug: string;
      option: string;
    }
  ];
  variations: [
    {
      id: number;
      parent_id: number;
      sku: string;
      slug: string;
      name: string;
      description: string;
      created: string;
      modified: string;
      stock_quantity: number;
      price: number;
      image: {
        id: number;
        name: string;
        src: string;
      };
      attributes: [
        {
          id: number;
          slug: string;
          option: string;
        }
      ];
    }
  ];
}

export interface ICategories {
  item: {
    id: number;
    parent_id: number;
    name: string;
    slug: string;
    description: string;
    count: number;
    language_code: string;
  };
}

export interface IProductsResponse {
  statistic: {
    products_count: number;
    min_price: number;
    max_price: number;
    attributes: [
      {
        id: number;
        slug: string;
        name: string;
        options: [
          {
            id: number;
            slug: string;
            name: string;
            products_count: number;
            color_hex: string;
          }
        ];
      }
    ];
  };
  items: IProduct[];
}

export interface ICategoriesResponse {
  items: ICategories[];
}
