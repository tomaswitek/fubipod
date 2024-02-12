import {
  createDirectus,
  rest,
  readSingleton,
  createItem,
  readItems,
  authentication,
  RestCommand,
  readItem,
  DirectusClient,
} from "@directus/sdk";
import {Schema, Status} from "types";
import {Form} from "types/forms";
import {mapBlock} from "./mapBlock";

const directusClient = createDirectus<Schema>(process.env.NEXT_PUBLIC_API_URL!)
  .with(rest())
  .with(authentication());

export const client = {
  ...directusClient,
  locale: "cs-CZ",

  getNavigation: async (id: string) => {
    const navigations = await directusClient.request(
      readItems("navigation", {
        filter: {id: {_eq: id}, status: {_eq: Status.Published}},
        limit: 1,
        fields: [
          "*",
          {
            items: ["*", "translations.*", "page.*"],
          },
        ],
      })
    );
    if (navigations.length > 0) {
      return navigations[0];
    }
  },
  getPage: async (slug: string) => {
    const pages = await directusClient.request(
      readItems("pages", {
        filter: {slug: {_eq: slug}, status: {_eq: Status.Published}},
        limit: 1,
        fields: [
          "*",
          {
            blocks: [
              // common
              "*",
              "item.*",
              "item.translations.*",
              "seo.*",
              // testimonials
              "item.testimonials.*",
              "item.testimonials.testimonial.*",
              "item.testimonials.testimonial.translations.*",
              // cta
              "item.page.*",
            ],
          },
        ],
      })
    );
    if (pages.length > 0) {
      const page = pages[0];
      page.blocks = page.blocks.map((block) => mapBlock(block, client.locale));
      return page;
    }
  },
  getLanguages: async () => {
    return await directusClient.request(readItems("languages"));
  },

  getGlobalData: async () => {
    return await directusClient.request(readSingleton("globals"));
  },

  sendNewsletterData: async () => {
    return await directusClient.request(readSingleton("globals"));
  },
  getForm: async (key: string) => {
    const forms = await directusClient.request(
      readItems("forms", {
        filter: {key: {_eq: key}, status: {_eq: Status.Published}},
        limit: 1,
      })
    );
    if (forms.length > 0) {
      return forms[0];
    }
  },
  sendForm: async (data: Form["schema"], form?: string) => {
    return await directusClient.request(
      createItem("inbox", {
        data,
        form,
      })
    );
  },
};

export function getClient(locale: string) {
  // TODO: fix locale
  // client.locale = locale;
  return client;
}
