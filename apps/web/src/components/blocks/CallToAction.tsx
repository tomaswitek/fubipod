import React from "react";
import {Link} from "@/components/Link";
import {Image} from "@/components/Image";
import {BlockWrapper, BlockTitle, BlockContent} from "@/components/Block";

export enum ButtonVariant {
  default = "default",
  primary = "primary",
  outline = "outline",
}

interface Button {
  label: string;
  href: string;
  variant: ButtonVariant;
  image: string;
}

export interface Props {
  id: string;
  title?: string;
  headline: string;
  content: string;
  buttons?: Button[];
}

export function CallToAction(props: Props) {
  const {headline, content, buttons = []} = props;
  return (
    <BlockWrapper>
      <div className="grid grid-cols-1 gap-x-9 gap-y-6 lg:grid-cols-2">
        <div>
          <BlockTitle title={headline} />
          <BlockContent content={content} />
        </div>
        <div className="flex lg:justify-end overflow-x-clip">
          {buttons.map((button, index) => (
            <Link
              key={index}
              href="/"
              className="group border-2 border-transparent w-full"
            >
              <div className="relative w-full h-64">
                <div
                  className="border border-bg-light group-hover:border-gray-400 h-full absolute top-10"
                  style={{width: `calc(100% - 2.5rem)`}}
                />
                <Image
                  alt={button.label}
                  src={button.image}
                  fill
                  className="object-cover ml-10"
                />
                <div className="bg-bg-light border-2 border-transparent text-gray-300 inline-block py-3 px-5 absolute right-4 -bottom-4 group-hover:border-gray-400">
                  {button.label}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </BlockWrapper>
  );
}

export default CallToAction;
