import React from "react";
import {BlockWrapper, BlockTitle, BlockContent} from "@/components/Block";
import {Image} from "@/components/Image";
import {Number} from "@/components/Number";

interface ColumnRowProps {
  id: string;
  title: string;
  image?: string;
  content: string;
}

export interface Props {
  id: string;
  headline: string;
  rows: ColumnRowProps[];
}

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
          <div className="text-gray-300 text-xl tracking-widest">{title}</div>
          <div className="inline-block w-20 h-px bg-gray-300" />
          <BlockContent className="mt-10" content={content} />
          <Number value={index + 1} className="flex justify-end mt-8 static" />
        </>
      ) : (
        <div className="flex">
          <Number className="mr-6" value={index + 1} />
          <div>
            <div className="text-gray-300 text-xl tracking-widest">{title}</div>
            <div className="inline-block w-20 h-px bg-gray-300" />
          </div>
        </div>
      )}
    </div>
  );
}

export function Columns(props: Props) {
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
