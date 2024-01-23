export interface Schema {
  categories: Category[];
}

export enum Status {
  Published = "published",
  Draft = "draft",
  Archiver = "archived",
}

export interface Category {
  id: string;
  slug: string;
  status: Status;
}
