"use client";
import React from "react";
import {usePathname, useParams} from "next/navigation";
import {Language} from "types/languages";
import {Link} from "./Link";
import {clsx} from "clsx";

interface Props {
  languages: Language[];
}

export function LanguageNavigation(props: Props) {
  const {languages = []} = props;
  const pathname = usePathname();
  /// TODO: fix
  //const {locale = "cs-CZ"} = useParams();
  const locale = "cs-CZ";

  return (
    <>
      {languages.map((l, i) => (
        <span key={i}>
          {i > 0 && " / "}
          <Link
            href={pathname!}
            locale={l.code}
            key={i}
            className={clsx(
              "hover:underline",
              locale === l.code && "underline"
            )}
          >
            {l.name}
          </Link>
        </span>
      ))}
    </>
  );
}

export default LanguageNavigation;
