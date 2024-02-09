import {PageBlock} from "./blocks";

export * from "./blocks";

export interface Schema {
  categories: Category[];
  pages: Page[];
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

export interface Page {
  id: string;
  slug: string;
  status: Status;
  sort: number;
  title: string;
  seo: Seo;
  blocks: PageBlock[];
}

export interface Seo {
  id: string;
  title: string;
  description: string;
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
