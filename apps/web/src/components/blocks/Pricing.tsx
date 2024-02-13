import React from "react";
import {BlockWrapper, BlockTitle, BlockContent} from "@/components/Block";
import {clsx} from "clsx";
import {LinkButton} from "@/components/LinkButton";
import {PricingBlock, PricingBlockRow} from "types/blocks";

interface PricingRowProps extends PricingBlockRow {}

function Row(props: PricingRowProps) {
  const {
    id,
    title,
    price,
    price_currency,
    price_description,
    content,
    page,
    url,
  } = props;

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
        <LinkButton href={page?.slug || url || "#"} className="px-12">
          Vice informaci
        </LinkButton>
      </div>
    </div>
  );
}

interface PricingBlockProps extends PricingBlock {}

export function Pricing(props: PricingBlockProps) {
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
