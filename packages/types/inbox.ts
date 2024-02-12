import {Status} from "./common";

export interface Inbox {
  id?: string;
  status?: Status;
  sort?: number;
  data: any;
  form?: string;
}
