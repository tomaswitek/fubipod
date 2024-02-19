import {Status} from "./common";

export enum FormOnScuccess {
  redirect = "redirect",
  message = "message",
}

export enum FormFieldType {
  text = "text",
  textarea = "textarea",
  checkbox = "checkbox",
  radio = "radio",
  file = "file",
  select = "select",
  hidden = "hidden",
  email = "email",
  phone = "phone",
}

export interface FormField {
  name: string;
  label: string;
  type: FormFieldType;
  validation?: string;
  width?: number;
  required: boolean;
}

export interface Form {
  id: string;
  key: string;
  title: string;
  status: Status;
  on_success: FormOnScuccess;
  redirect_url: string;
  success_message: string;
  submit_label: string;
  schema: {[key: string]: any};
}
