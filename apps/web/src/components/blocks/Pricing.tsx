import React from "react";
import {BlockWrapper, BlockTitle, BlockContent} from "@/components/Block";
import {clsx} from "clsx";
import {Button} from "@/components/Button";

interface RowProps {
  id: string;
  title: string;
  price: number;
  price_currency: string;
  price_description: string;
  content: string;
  href: string;
}

interface Props {
  id: string;
  headline: string;
  content: string;
  rows: RowProps[];
}

function Row(props: RowProps) {
  const {id, title, price, price_currency, price_description, content, href} =
    props;

  return (
    <div key={id} className="border-2 p-10 text-gray-300">
      <h4 className="text-4xl text-center mb-10">{title}</h4>
      <div className="text-xl mb-2">
        {price} {price_currency}
      </div>
      <div className="pb-4 border-b-2 border-primary mb-10">
        {price_description}
      </div>
      <BlockContent content={content} />
      <div className="text-center mt-10">
        <Button href={href} className="px-12">
          Vice informaci
        </Button>
      </div>
    </div>
  );
}

export function Pricing(props: Props) {
  const {headline, content, rows = []} = props;

  const gridClassName = clsx("grid gap-32 mt-16", `grid-cols-${rows.length}`);

  return (
    <BlockWrapper>
      <BlockTitle title={headline} />
      <div className="mx-auto max-w-5xl">
        <BlockContent content={content} />
        <div className={gridClassName}>{rows.map(Row)}</div>
      </div>
    </BlockWrapper>
  );
}

export default Pricing;
