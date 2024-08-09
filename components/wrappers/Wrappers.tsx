import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { ConfigProvider } from "../config/ConfigProvider";
import { PaperThemeConfig } from "../paper-theme-config/PaperThemeConfig";
import { UiConfig } from "../ui-config/UiConfig";

const queryClient = new QueryClient();

export const Wrappers = ({ children }: PropsWithChildren<{}>) => {
  return (
    <ConfigProvider>
      <UiConfig>
        <QueryClientProvider client={queryClient}>
          <PaperThemeConfig>{children}</PaperThemeConfig>
        </QueryClientProvider>
      </UiConfig>
    </ConfigProvider>
  );
};
