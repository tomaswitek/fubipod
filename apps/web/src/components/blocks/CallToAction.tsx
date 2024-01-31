import React from "react";
import {Link} from "@/components/Link";
import {Image} from "@/components/Image";

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

interface Props {
  id: string;
  title?: string;
  headline: string;
  content: string;
  buttons?: Button[];
}

export function CallToAction(props: Props) {
  const {headline, content, buttons = []} = props;
  return (
    <div className="bg-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 p-10">
        <div className="grid grid-cols-1 gap-x-16 gap-y-6 lg:grid-cols-2">
          <div>
            <h3
              className="text-primary text-5xl mb-6"
              dangerouslySetInnerHTML={{__html: headline}}
            />
            <div
              className="text-gray-300 text-lg"
              dangerouslySetInnerHTML={{__html: content}}
            />
          </div>
          <div className="flex lg:justify-end">
            {buttons.map((button, index) => (
              <Link
                key={index}
                href="/"
                className="group border-2 border-transparent hover:border-gray-400 w-full"
              >
                <div className="relative w-full h-64">
                  <Image
                    alt={button.label}
                    src={button.image}
                    fill
                    className="object-cover"
                  />
                  <div className="bg-bg-light border-2 border-transparent text-gray-300 inline-block py-3 px-5 absolute right-4 -bottom-4 group-hover:border-gray-400">
                    {button.label}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
