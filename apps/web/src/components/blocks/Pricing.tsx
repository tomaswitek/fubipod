import React from "react";
import {BlockWrapper, BlockTitle, BlockContent} from "@/components/Block";
import {clsx} from "clsx";
import {LinkButton} from "@/components/LinkButton";
import {PricingBlock, PricingBlockRow} from "types/blocks";
import {Image} from "@/components/Image";

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
    button_label,
    image,
  } = props;

  const href = page?.slug || url || "#";

  return (
    <div key={id} className="border-2 p-10 text-gray-300 relative">
      <h4 className="text-4xl text-center mb-10">{title}</h4>
      {image && (
        <div className="relative h-60 border-2 border-primary mb-10">
          <Image
            fill
            src={image}
            alt={title}
            className="w-full h-64 object-cover mb-10"
          />
        </div>
      )}
      <div className="text-xl mb-2">
        {price} {price_currency}
      </div>
      <div className="pb-4 border-b-2 border-primary mb-10">
        {price_description}
      </div>
      <BlockContent content={content} />
      <div className="text-center mt-10">
        <LinkButton href={href} className="px-12">
          {button_label}
        </LinkButton>
      </div>
    </div>
  );
}

interface PricingBlockProps extends PricingBlock {}

export function Pricing(props: PricingBlockProps) {
  const {headline, content, rows = []} = props;
  const cols = rows.length > 3 ? 2 : rows.length;

  const gridClassName = clsx(
    "grid grid-cols-1 gap-12 mt-16",
    `lg:grid-cols-${cols}`
  );

  return (
    <BlockWrapper>
      <BlockTitle title={headline} />
      <div className="mx-auto max-w-7xl">
        <BlockContent content={content} />
        <div className={gridClassName}>{rows.map(Row)}</div>
      </div>
    </BlockWrapper>
  );
}

export default Pricing;
