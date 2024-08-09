import { PropsWithChildren } from "react";
import { useColorScheme } from "react-native";
import { getTheme } from "../../theme/theme-config";
import { PaperProvider } from "react-native-paper";

export const PaperThemeConfig = ({ children }: PropsWithChildren<{}>) => {
  const colorScheme = useColorScheme();
  return (
    <PaperProvider theme={getTheme(colorScheme === "dark")}>
      {children}
    </PaperProvider>
  );
};
