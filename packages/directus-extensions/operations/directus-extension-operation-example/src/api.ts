import {defineOperationApi} from "@directus/extensions-sdk";
import {log} from "libs";

type Options = {
  text: string;
};

export default defineOperationApi<Options>({
  id: "custom",
  handler: ({text}) => {
    log(text);
  },
});
