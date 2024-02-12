import {SocialLink, Status} from "./common";

export interface TeamMember {
  id: string;
  status: Status;
  name: string;
  job_title: string;
  image: string;
  bio: string;
  social_media: SocialLink[];
}
