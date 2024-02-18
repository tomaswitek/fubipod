import {Translation} from "./common";
import {Page} from "./pages";
import {Testimonial} from "./testimonials";

export enum BlockCollection {
  Hero = "block_hero",
  Testimonials = "block_testimonials",
  CallToAction = "block_cta",
  Columns = "block_columns",
  Steps = "block_steps",
  Team = "block_team",
  Pricing = "block_pricing",
  Richtext = "block_richtext",
  Product = "block_product",
  Gallery = "block_gallery",
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
  button_label: string;
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
  page?: Page;
  url?: string;
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

export interface StepsBlock extends BlockTranslation {
  id: string;
  title: string;
  translations: BlockTranslation[];
  steps: StepsBlockItem[];
}

export interface StepsBlockItem extends StepsBlock {
  sort: number;
  image: string;
}

export interface TeamBlock extends BlockTranslation {
  id: string;
  title: string;
  translations: BlockTranslation[];
}

export interface PricingBlock extends BlockTranslation {
  id: string;
  title: string;
  translations: BlockTranslation[];
  rows: PricingBlockRow[];
}

export interface PricingBlockRow extends PricingBlockRowTranslation {
  id: string;
  title: string;
  url: string;
  page: Page;
  translations: PricingBlockRowTranslation[];
  image: string;
}

interface PricingBlockRowTranslation extends BlockTranslation {
  price: number;
  price_currency: string;
  price_description: string;
  button_label: string;
}

export interface RichtextBlock extends BlockTranslation {
  id: string;
  title: string;
  translations: BlockTranslation[];
}

export interface GalleryBlock extends BlockTranslation {
  id: string;
  title: string;
  translations: BlockTranslation[];
  gallery_items: GalleryBlockFile[];
}

interface GalleryBlockFile {
  id: string;
  sort: number;
  directus_files_id: string;
}

export interface ProductBlock extends BlockTranslation {
  id: string;
  title: string;
  translations: BlockTranslation[];
  rows: ProductBlockRow[];
}

export interface ProductBlockRow extends BlockTranslation {
  id: string;
  title: string;
  translations: BlockTranslation[];
  image?: string;
  page?: Page;
  column: number;
}

export type PageBlock =
  | HeroBlock
  | TestimonialsBlock
  | CallToActionBlock
  | StepsBlock
  | PricingBlock
  | RichtextBlock
  | GalleryBlock
  | ProductBlock;
