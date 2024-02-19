import {
  createDirectus,
  rest,
  readSingleton,
  createItem,
  readItems,
  authentication,
} from "@directus/sdk";
import {Schema, Status} from "types";
import {Form} from "types/forms";
import {mapBlock, BLOCK_FIELDS} from "./mapBlock";

const directusClient = createDirectus<Schema>(process.env.NEXT_PUBLIC_API_URL!)
  .with(rest())
  .with(authentication());

export const client = {
  ...directusClient,
  locale: "cs-CZ",

  getTranslation: (translations: any[] = []) => {
    return translations.find((t) => t.languages_code === client.locale);
  },

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
      const nav = navigations[0];
      return {
        ...nav,
        items: nav.items?.map((item) => ({
          ...item,
          ...item.translations.find((t) => t.languages_code === client.locale),
        })),
      };
    }
  },

  getPages: async () => {
    return await directusClient.request(
      readItems("pages", {
        fields: ["*"],
      })
    );
  },

  getPage: async (slug: string) => {
    const pages = await directusClient.request(
      readItems("pages", {
        filter: {slug: {_eq: slug}, status: {_eq: Status.Published}},
        limit: 1,
        fields: [
          "*",
          "seo.*",
          "seo.translations.*",
          {
            blocks: BLOCK_FIELDS,
          },
        ],
      })
    );
    if (pages.length > 0) {
      const page = pages[0];
      page.blocks = page.blocks.map((block) => mapBlock(block, client.locale));

      if (page.seo) {
        page.seo = {
          ...page.seo,
          ...client.getTranslation(page.seo.translations),
        };
      }
      return page;
    }
  },

  getLanguages: async () => {
    return await directusClient.request(readItems("languages"));
  },

  getTeamMembers: async () => {
    return await directusClient.request(
      readItems("team", {
        filter: {status: {_eq: Status.Published}},
      })
    );
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
