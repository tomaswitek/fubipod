import React, {PropsWithChildren} from "react";
import {clsx} from "clsx";

interface BlockTitleProps {
  title: string;
  className?: string;
}

export function BlockTitle(props: BlockTitleProps) {
  const {title} = props;

  const className = clsx(
    "text-primary text-5xl mb-6 tracking-widest",
    props.className
  );

  return <h3 className={className} dangerouslySetInnerHTML={{__html: title}} />;
}

interface BlockContentProps {
  content?: string;
  className?: string;
}

export function BlockContent(props: BlockContentProps) {
  const {content} = props;
  if (!content) return null;
  const className = clsx("text-gray-300 text-lg", props.className);
  return (
    <div className={className} dangerouslySetInnerHTML={{__html: content}} />
  );
}

interface BlockWrapperProps extends PropsWithChildren {
  className?: string;
}

export function BlockWrapper(props: BlockWrapperProps) {
  const {children} = props;

  const className = clsx("bg-bg", props.className);

  return (
    <div className={className}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 p-10">{children}</div>
    </div>
  );
}

export default BlockTitle;