/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ["cs-CZ", "de-DE", "en-US"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "cs-CZ",
    localeDetection: false,
  },
  images: {
    dangerouslyAllowSVG: true,
    domains: [process.env.NEXT_API_URL],
  },
};

export default nextConfig;
