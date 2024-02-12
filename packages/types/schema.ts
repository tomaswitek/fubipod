import {Block} from "./blocks";
import {Status} from "./common";
import {Navigation} from "./navigation";
import {GlobalData} from "./globals";
import {Page} from "./pages";

export interface Schema {
  pages: Page[];
  navigation: Navigation[];
  globals: GlobalData;
}
