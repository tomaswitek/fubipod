import React from "react";
import {ProductBlock, ProductBlockRow} from "types";
import BlockTitle, {BlockWrapper} from "../Block";
import {groupBy} from "rambda";
import LinkButton from "../LinkButton";
import {clsx} from "clsx";

interface ProductRowProps extends ProductBlockRow {}

function ProductRow(props: ProductRowProps, index: number) {
  const {title, image, page, content, button_label} = props;

  return (
    <div key={index} className="mb-10">
      <h4 className="text-primary mb-2 text-xl">{title}</h4>
      {content && (
        <div
          className="text-gray-300 text-lg"
          dangerouslySetInnerHTML={{__html: content}}
        ></div>
      )}
      {page && button_label && (
        <div className="text-right">
          <LinkButton className="mt-6 inline-block" href={page.slug}>
            {button_label}
          </LinkButton>
        </div>
      )}
    </div>
  );
}

interface ProductProps extends ProductBlock {}

export function Product(props: ProductProps) {
  const {headline, rows = []} = props;
  const columns = groupBy((row) => row.column.toString(), rows);
  const columnArray = Object.keys(columns);

  return (
    <BlockWrapper>
      {headline && <BlockTitle title={headline} />}
      <div className={`grid grid-cols-1 lg:grid-cols-${columnArray.length}`}>
        {columnArray.map((column) => (
          <div
            className="lg:px-10 first:pl-0 last:pr-0 first:border-0 lg:border-l border-bg-light"
            key={`column-${column}`}
          >
            {columns[column.toString()].map(ProductRow)}
          </div>
        ))}
      </div>
    </BlockWrapper>
  );
}

export default Product;
