"use client"
// use to be server side
import { useTranslations } from "next-intl";
import Link from "next/link";

const BreadcrumbNavbar = ({
  params,
}: {
  params?: { mode?: string; options?: string };
}) => {
  const t = useTranslations("Component.BreadcrumbNavbar");
  const options = params?.options?.split("-to-");
  return (
    <>
      <span>
        {" "}
        <Link
          href="/conversion"
          target="_top"
          rel="noreferrer"
          className="capitalize text-sky-500 transition ease-in-out hover:text-sky-700"
        >
          {t("level1")}
        </Link>
      </span>
      <span> / </span>
      {params ? (
        <>
          <span>
            {" "}
            <Link
              href={`/conversion/${params.mode}`}
              target="_top"
              rel="noreferrer"
              className="capitalize text-sky-500 transition ease-in-out hover:text-sky-700"
            >
              {t("level2", { mode: params.mode })}
            </Link>
          </span>
          {options ? (
            <>
              <span> / </span>
              <span>
                {" "}
                <Link
                  href={`/conversion/${params.mode}/${params.options}`}
                  target="_top"
                  rel="noreferrer"
                  className="capitalize text-sky-500 transition ease-in-out hover:text-sky-700"
                >
                  {t("level3", { from: options[0], to: options[1] })}
                </Link>
              </span>
            </>
          ) : null}
        </>
      ) : null}
    </>
  );
};

export default BreadcrumbNavbar;
