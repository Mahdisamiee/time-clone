import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="align-center z-10 flex w-full justify-center p-3 text-center sm:p-5">
      {children}
    </div>
  );
};

export default layout;
