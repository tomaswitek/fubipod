import React from "react";
import {RichtextBlock} from "types";
import {BlockWrapper, BlockTitle, BlockContent} from "../Block";

interface Richtext extends RichtextBlock {}

export function Richtext(props: Richtext) {
  const {headline, content} = props;

  return (
    <BlockWrapper>
      {headline && <BlockTitle title={headline} />}
      {content && <BlockContent content={content} />}
    </BlockWrapper>
  );
}

export default Richtext;
