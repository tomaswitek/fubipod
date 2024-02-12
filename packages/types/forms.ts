import {Status} from "./common";

export enum FormOnScuccess {
  redirect = "redirect",
  message = "message",
}

export interface Form {
  id: string;
  key: string;
  on_success: FormOnScuccess;
  redirect_url: string;
  schema: NewsletterFormSchema;
  sort: number;
  status: Status;
  submit_label: string;
  success_message: string;
  title: string;
}

export interface NewsletterFormSchema {
  email: string;
}

export interface ContactFormSchema {
  first_name: string;
  last_name: string;
  // TODO
}
