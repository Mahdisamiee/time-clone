import Link from "next/link";
import React from "react";

const BreadcrumbNavbar = ({
  params,
}: {
  params?: { mode?: string; options?: string };
}) => {
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
          تبدیل ها
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
              تبدیل {params.mode}
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
                  محاسبه {options[0]} به {options[1]}
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
