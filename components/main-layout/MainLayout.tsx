import { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";
import { MD3Theme, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const useStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      backgroundColor: theme.colors.background,
      height: "100%",
    },
    safeArea: {
      backgroundColor: theme.colors.background,
    },
  });

export const MainLayout = ({ children }: PropsWithChildren<{}>) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};
