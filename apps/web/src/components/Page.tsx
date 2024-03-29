import React from "react";
import {Block} from "@/components/Block";
import {getClient} from "api";

interface PageProps {
  slug: string;
  locale?: string;
}

export async function Page(props: PageProps) {
  const {slug = "home"} = props;
  const client = getClient(props.locale || "cs-CZ");
  const page = await client.getPage(slug);

  if (page?.blocks) {
    return page.blocks.map((block, index) => (
      <Block {...props} key={index} {...block} />
    ));
  }

  return null;
}

export default Page;
