import Link from "next/link";
import React from "react";

const LinearNavLink = ({
  params,
}: {
  params: { mode?: string; options?: string };
}) => {
  const options = params.options?.split("-to-");
  return (
    <>
      <span>
        {" "}
        <Link
          href="/calc"
          target="_top"
          rel="noreferrer"
          className="text-sky-500 hover:text-sky-700 transition ease-in-out capitalize"
        >
          تبدیل ها
        </Link>
      </span>
      <span> / </span>
      <span>
        {" "}
        <Link
          href={`/calc/${params.mode}`}
          target="_top"
          rel="noreferrer"
          className="text-sky-500 hover:text-sky-700 transition ease-in-out capitalize"
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
              href={`/calc/${params.mode}/${params.options}`}
              target="_top"
              rel="noreferrer"
              className="text-sky-500 hover:text-sky-700 transition ease-in-out capitalize"
            >
              محاسبه {options[0]} به {options[1]}
            </Link>
          </span>
        </>
      ) : null}
    </>
  );
};

export default LinearNavLink;
