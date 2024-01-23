import {
  createDirectus,
  rest,
  readItems,
  createItem,
  authentication,
  RestCommand,
} from "@directus/sdk";
import {Schema, Product, Status} from "types";

const directusClient = createDirectus<Schema>(process.env.NEXT_PUBLIC_API_URL!)
  .with(rest())
  .with(authentication());

export const client = {
  ...directusClient,

  getProducts: async () => {
    return await directusClient.request(
      readItems("products", {filter: {status: {_eq: Status.Published}}})
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
