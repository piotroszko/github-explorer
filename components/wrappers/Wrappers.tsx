import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ConfigProvider } from "../config/ConfigProvider";
import { PaperThemeConfig } from "../paper-theme-config/PaperThemeConfig";

const queryClient = new QueryClient();

export const Wrappers = ({ children }: PropsWithChildren<{}>) => {
  return (
    <ConfigProvider>
      <QueryClientProvider client={queryClient}>
        <PaperThemeConfig>
          <SafeAreaView>{children}</SafeAreaView>
        </PaperThemeConfig>
      </QueryClientProvider>
    </ConfigProvider>
  );
};
