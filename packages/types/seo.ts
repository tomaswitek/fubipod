export interface Seo {
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
}
