import {Status} from "./common";
import {Page} from "./pages";
import {Translation} from "./common";

export interface Navigation {
  id: string;
  title: string;
  status: Status;
  items: NavigationItem[];
}

export interface NavigationItemTranslation extends Translation {
  title: string;
  label: string;
}

enum NavigationItemType {
  Page = "page",
  URL = "url",
  File = "file",
}

export interface NavigationItem extends NavigationItemTranslation {
  id: string;
  sort: number;
  has_children: boolean;
  title: string;
  page: Page;
  parent: NavigationItem;
  translations: NavigationItemTranslation[];
  image: string;
  icon: string;
  type: NavigationItemType;
  open_in_new_tab: boolean;
  file: string;
  url: string;
}
