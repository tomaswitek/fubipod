import {Translation} from "./common";

export enum BlockCollection {
  Hero = "block_hero",
  //CallToAction = "block_cta",
}

export interface Block {
  id: string;
  collection: BlockCollection;
  item: PageBlock;
}

export interface HeroBlock extends HeroBlockTranslation {
  id: string;
  title: string;
  image: string;
  translations: HeroBlockTranslation[];
}

interface HeroBlockTranslation extends Translation {
  headline: string;
  content: string;
}

export type PageBlock = HeroBlock; // | ColumnsBlock | StepsBlock;
