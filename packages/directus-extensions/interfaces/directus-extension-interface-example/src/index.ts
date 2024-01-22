import {defineInterface} from "@directus/extensions-sdk";
import InterfaceComponent from "./interface.vue";

console.log("Test interface loaded");

export default defineInterface({
  id: "custom",
  name: "Custom",
  icon: "box",
  description: "This is my custom interface!",
  component: InterfaceComponent,
  options: null,
  types: ["string"],
});
