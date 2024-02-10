import {
  createDirectus,
  rest,
  readItems,
  createItem,
  authentication,
  RestCommand,
} from "@directus/sdk";
import {Schema, Status, Block} from "types";

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
    const mapBlocks = (block: Block) => {
      const item = {
        ...block.item,
        ...block.item.translations.find(
          (t) => t.languages_code === client.locale
        ),
      };
      return {...block, item};
    };

    const pages = await directusClient.request(
      readItems("pages", {
        filter: {slug: {_eq: slug}, status: {_eq: Status.Published}},
        limit: 1,
        fields: [
          "*",
          {
            blocks: ["*", "item.*", "item.translations.*"],
          },
        ],
      })
    );
    if (pages.length > 0) {
      const page = pages[0];
      page.blocks = page.blocks.map(mapBlocks);
      return page;
    }
  },

  getCategories: async () => {
    return await directusClient.request(
      readItems("categories", {
        filter: {status: {_eq: Status.Published}},
        // fields: ["*", {translations: ["*"]}],
        fields: ["*", "translations.*"],
      })
    );
  },

  // getPods: async () => {
  //   return await directusClient.request(
  //     readItems("pods", {filter: {status: {_eq: Status.Published}}})
  //   );
  // },

  // signUp: async (email: string, password: string) => {
  //   const command: RestCommand<any, Schema> = () => ({
  //     path: "/customers/sign-up",
  //     method: "POST",
  //     body: JSON.stringify({email, password}),
  //   });
  //   return await directusClient.request(command);
  // },

  // download: async () => {
  //   const command: RestCommand<any, Schema> = () => ({
  //     path: "/ninjatrader/install",
  //     method: "GET",
  //   });
  //   return await directusClient.request(command);
  // },

  // createOrder: async (product: Product) => {
  //   debugger;
  //   const price = product.prices[0];
  //   return await directusClient.request(
  //     createItem("orders", {product: product.id, price})
  //   );
  // },
};

export function getClient(locale: string) {
  // TODO: fix locale
  // client.locale = locale;
  return client;
}
