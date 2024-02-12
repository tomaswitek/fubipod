import {Status} from "./common";

interface TestimonialTranslation {
  subtitle: string;
  content: string;
}

export interface Testimonial extends TestimonialTranslation {
  id: string;
  status: Status;
  sort: number;
  company: string;
  company_logo: string;
  link: string;
  translations: TestimonialTranslation[];
}
