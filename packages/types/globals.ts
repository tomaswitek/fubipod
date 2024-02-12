interface SocialLink {
  service: string;
  url: string;
}

export interface GlobalData {
  social_links: SocialLink[];
  company: string;
  company_id: string;
  company_vat: string;
  email: string;
  phone: string;
  bank_account: string;
  address_country: string;
}
