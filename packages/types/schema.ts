import {Navigation} from "./navigation";
import {GlobalData} from "./globals";
import {Page} from "./pages";
import {Language} from "./languages";
import {Inbox} from "./inbox";
import {Form} from "./forms";
import {TeamMember} from "./team";

export interface Schema {
  pages: Page[];
  navigation: Navigation[];
  languages: Language[];
  globals: GlobalData;
  inbox: Inbox[];
  forms: Form[];
  team: TeamMember[];
}
