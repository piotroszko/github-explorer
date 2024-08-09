import { PropsWithChildren } from "react";
import { Wrappers } from "../components/wrappers/Wrappers";

export const TestWrappers = ({ children }: PropsWithChildren<{}>) => {
  return <Wrappers>{children}</Wrappers>;
};
