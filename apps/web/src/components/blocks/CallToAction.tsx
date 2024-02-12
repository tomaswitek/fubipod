import React from "react";
import {Link} from "@/components/Link";
import {Image} from "@/components/Image";
import {BlockWrapper, BlockTitle, BlockContent} from "@/components/Block";
import {CallToActionBlock} from "types/blocks";

export enum ButtonVariant {
  default = "default",
  primary = "primary",
  outline = "outline",
}

export interface CallToActionProps extends CallToActionBlock {}

export function CallToAction(props: CallToActionProps) {
  const {headline, content, image, button_label, page} = props;
  return (
    <BlockWrapper>
      <div className="grid grid-cols-1 gap-x-9 gap-y-6 lg:grid-cols-2">
        <div>
          <BlockTitle title={headline} />
          <BlockContent content={content} />
        </div>
        <div className="flex lg:justify-end overflow-x-clip">
          <Link
            href={page.slug}
            className="group border-2 border-transparent w-full"
          >
            <div className="relative w-full h-64">
              <div
                className="border border-bg-light group-hover:border-gray-400 h-full absolute top-10"
                style={{width: `calc(100% - 2.5rem)`}}
              />
              <Image
                alt={button_label}
                src={image}
                fill
                className="object-cover ml-10"
              />
              <div className="bg-bg-light border-2 border-transparent text-gray-300 inline-block py-3 px-5 absolute right-4 -bottom-4 group-hover:border-gray-400">
                {button_label}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </BlockWrapper>
  );
}

export default CallToAction;
