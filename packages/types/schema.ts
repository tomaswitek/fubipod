import {Block} from "./blocks";
import {Status} from "./common";
import {Navigation} from "./navigation";

export interface Schema {
  pages: Page[];
  navigation: Navigation[];
}

export interface Page {
  id: string;
  slug: string;
  status: Status;
  sort: number;
  title: string;
  seo: Seo;
  blocks: Block[];
}

export interface Seo {
  id: string;
  title: string;
  description: string;
}
