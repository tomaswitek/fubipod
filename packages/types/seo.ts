import {Translation} from "./common";

interface SeoTranslation extends Translation {
  title?: string;
  description?: string;
}

export interface Seo extends SeoTranslation {
  id: string;
  title: string;
  description: string;
  og_image: string;
  twitter_image: string;
  no_follow: boolean;
  no_index: boolean;
  canonical_url: string;
  sitemap_change_frequency: string;
  sitemap_priority: string;
  translations: SeoTranslation[];
}
