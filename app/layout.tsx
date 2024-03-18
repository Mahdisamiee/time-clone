import { ReactNode } from "react";
import "./globals.css";

type Props = {
  children: ReactNode;
};

const GTM_ID = "GTM-TN59LRQS";

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
  return children;
}
