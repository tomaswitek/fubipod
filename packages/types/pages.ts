import {Block} from "./blocks";
import {Status} from "./common";
import {Seo} from "./seo";
export * from "./blocks";
export * from "./common";

export interface Page {
  id: string;
  slug: string;
  status: Status;
  sort: number;
  title: string;
  seo: Seo;
  blocks: Block[];
}
