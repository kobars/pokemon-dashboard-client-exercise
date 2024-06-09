import { FC, PropsWithChildren } from "react";

const Container: FC<PropsWithChildren> = ({ children }) => {
  return <div className="min-h-screen p-8">{children}</div>;
};

export default Container;
