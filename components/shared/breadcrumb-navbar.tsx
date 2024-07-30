import Link from "next/link";
import { memo } from "react";

interface BreadcrumbNavbarProps {
  params?: { mode?: string; options?: string };
  t?: {
    level1: string;
    level2: (args: { mode?: string }) => string;
    level3: (args: { from?: string; to?: string }) => string;
  };
}

const BreadcrumbNavbar = ({ params, t }: BreadcrumbNavbarProps) => {
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
          {t?.level1}
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
              {t?.level2({ mode: params.mode })}
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
                  {t?.level3({ from: options[0], to: options[1] })}
                </Link>
              </span>
            </>
          ) : null}
        </>
      ) : null}
    </>
  );
};

export default memo(BreadcrumbNavbar);
