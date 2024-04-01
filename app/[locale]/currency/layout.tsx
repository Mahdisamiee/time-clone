import { unstable_setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";

type Props = {
  params: { locale: string };
  children: ReactNode;
};

const Layout = ({ children, params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);

  return (
    <div className="align-center z-10 flex w-full justify-center p-5 text-center sm:p-5">
      {children}
    </div>
  );
};

export default Layout;
