import {Translation} from "./common";
import {Page} from "./pages";
import {Testimonial} from "./testimonials";

export enum BlockCollection {
  Hero = "block_hero",
  Testimonials = "block_testimonials",
  CallToAction = "block_cta",
  Columns = "block_columns",
}

export interface Block {
  id: string;
  collection: BlockCollection;
  item: PageBlock;
}

export interface BlockTranslation extends Translation {
  title: string;
  headline: string;
  content: string;
}

export interface HeroBlock extends BlockTranslation {
  id: string;
  title: string;
  image: string;
  translations: BlockTranslation[];
}

export interface CallToActionBlock extends BlockTranslation {
  id: string;
  title: string;
  headline: string;
  content: string;
  page: Page;
  image: string;
  button_label: string;
  translations: BlockTranslation[];
}

export interface ColumnsBlock extends BlockTranslation {
  id: string;
  title: string;
  rows: ColumnsBlockRow[];
  translations: BlockTranslation[];
}

export interface ColumnsBlockRow extends BlockTranslation {
  id: string;
  image: string;
  image_position: string;
  translations: BlockTranslation[];
}

export interface TestimonialsBlock extends BlockTranslation {
  testimonials: Testimonial[];
  translations: BlockTranslation[];
}

export type PageBlock = HeroBlock | TestimonialsBlock | CallToActionBlock;
