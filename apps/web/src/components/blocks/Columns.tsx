import React from "react";
import {BlockWrapper, BlockTitle, BlockContent} from "@/components/Block";
import {Image} from "@/components/Image";
import {Number} from "@/components/Number";
import {ColumnTitle} from "@/components/ColumnTitle";
import {ColumnsBlock, ColumnsBlockRow} from "types/blocks";

interface ColumnRowProps extends ColumnsBlockRow {}

function ColumnRow(props: ColumnRowProps, index: number) {
  const {id, title, image, content} = props;
  return (
    <div key={id}>
      {image && (
        <Image
          // TODO: remove after icons bg margins are fixed
          className="-ml-5"
          src={image}
          height={120}
          width={120}
          alt={title}
        />
      )}
      {content ? (
        <>
          <ColumnTitle title={title} />
          <BlockContent className="mt-10" content={content} />
          <Number value={index + 1} className="flex justify-end mt-8 static" />
        </>
      ) : (
        <div className="flex">
          <Number className="mr-6" value={index + 1} />
          <div>
            <ColumnTitle title={title} />
          </div>
        </div>
      )}
    </div>
  );
}

interface ColumnsProps extends ColumnsBlock {}

export function Columns(props: ColumnsProps) {
  const {headline, rows = []} = props;
  return (
    <BlockWrapper className="mt-24">
      <BlockTitle className="mb-24" title={headline} />
      <div className="grid grid-cols-1 gap-x-24 gap-y-32 sm:grid-cols-2 lg:grid-cols-3">
        {rows.map(ColumnRow)}
      </div>
    </BlockWrapper>
  );
}

export default Columns;
