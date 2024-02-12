import {Translation} from "./common";
import {Page} from "./pages";
import {Testimonial} from "./testimonials";

export enum BlockCollection {
  Hero = "block_hero",
  Testimonials = "block_testimonials",
  CallToAction = "block_cta",
}

export interface Block {
  id: string;
  collection: BlockCollection;
  item: PageBlock;
}

export interface BlockTranslation extends Translation {
  title?: string;
  headline?: string;
  content?: string;
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
}

export interface TestimonialsBlock extends BlockTranslation {
  testimonials: Testimonial[];
  translations: BlockTranslation[];
}

export type PageBlock = HeroBlock | TestimonialsBlock | CallToActionBlock;
