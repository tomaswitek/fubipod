import React from "react";
import {client} from "api";
import {Block} from "@/components/Block";

interface Props {
  slug: string;
}

export async function Page(props: Props) {
  const {slug = "home"} = props;
  const page = await client.getPage(slug);

  console.log("Page", page);

  if (page?.blocks) {
    return page.blocks.map(Block);
  }

  return null;
}

export default Page;
