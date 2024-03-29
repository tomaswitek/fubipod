export enum Status {
  Published = "published",
  Draft = "draft",
  Archiver = "archived",
}

export enum LanguageCode {
  cs = "cs-CZ",
  en = "en-US",
  de = "de-DE",
}

export interface Translation {
  id: string;
  languages_code: string;
}

enum SocialLinkService {
  facebook = "facebook",
  instagram = "instagram",
  linkedin = "linkedin",
}

export interface SocialLink {
  service: SocialLinkService;
  url: string;
}
