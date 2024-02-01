import React from "react";
import {BlockWrapper, BlockTitle, BlockContent} from "@/components/Block";
import {Number} from "@/components/Number";
import Image from "next/image";

interface StepProps {
  title: string;
  content: string;
  image: string;
}

interface Props {
  headline: string;
  steps: StepProps[];
}

function Step(props: StepProps, key: number) {
  const {title, content, image} = props;
  return (
    <div className="flex flex-col">
      {image && (
        <div className="flex justify-center pb-6">
          <Image
            // TODO: remove after icons bg margins are fixed
            src={image}
            height={100}
            width={100}
            alt={title}
            className="rounded-full border-2 p-4 border-bg-light"
          />
        </div>
      )}
      <div
        key={key}
        className="bg-bg-light rounded-xl p-6 pb-16 relative flex-1"
      >
        <div className="text-gray-300 text-xl tracking-widest">{title}</div>
        <div className="inline-block w-20 h-px bg-gray-300" />
        <BlockContent className="text-sm my-6" content={content} />
        <Number className="absolute right-6 bottom-6" value={key + 1} />
      </div>
    </div>
  );
}

export function Steps(props: Props) {
  const {headline, steps = []} = props;

  return (
    <BlockWrapper>
      <BlockTitle title={headline} />
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-12 pt-12">
        {steps.map(Step)}
      </div>
    </BlockWrapper>
  );
}

export default Steps;
