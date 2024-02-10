import React from "react";
import {Block} from "@/components/Block";
import {GetStaticProps} from "next";
import {getClient} from "api";

interface Props {
  slug: string;
  locale: string;
}

// export const getStaticProps: GetStaticProps = async (context) => {
//   console.log("getStaticPropssssssssss", context);
//   const {locale} = context;
//   return {props: {locale}};
// };

export async function Page(props: Props) {
  const {slug = "home"} = props;
  const page = await getClient(props.locale).getPage(slug);

  console.log("Page", page);

  if (page?.blocks) {
    return page.blocks.map((block, index) => (
      <Block {...props} key={index} {...block} />
    ));
  }

  return null;
}

export default Page;
