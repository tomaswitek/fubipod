import {Navigation} from "./navigation";
import {GlobalData} from "./globals";
import {Page} from "./pages";
import {Language} from "./languages";

export interface Schema {
  pages: Page[];
  navigation: Navigation[];
  languages: Language[];
  globals: GlobalData;
}
