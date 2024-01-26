export interface Schema {
  categories: Category[];
}

export enum Status {
  Published = "published",
  Draft = "draft",
  Archiver = "archived",
}

export enum LanguageCode {
  cs = "cs",
  en = "en",
}

export interface Translation {
  id: string;
  language_code: string;
}

export interface CategoryTranslation extends Translation {
  subtitle: string;
  description: string;
}

export interface Category {
  id: string;
  title: string;
  slug: string;
  status: Status;
  translations: CategoryTranslation[];
}
