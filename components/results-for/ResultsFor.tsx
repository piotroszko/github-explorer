import { isNil } from "lodash";
import { StyleSheet, View } from "react-native";
import { Caption, Text, useTheme } from "react-native-paper";
import { useUiConfig } from "../ui-config/UiConfig";

const useStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    textWrapper: {
      width: "100%",
      alignItems: "center",
    },
    divider: {
      paddingBottom: 10,
      borderBottomColor: theme.colors.tertiary,
      borderBottomWidth: 1,
      opacity: 0.3,
      width: "100%",
    },
  });
};

export const ResultsFor = ({ username }: { username?: string }) => {
  const { transitions } = useUiConfig();
  const styles = useStyles();

  return isNil(username) ? null : (
    <View style={styles.textWrapper}>
      <Text variant="labelLarge">
        <Caption>{transitions?.resultsForUser}</Caption> "{username}"
      </Text>
      <View style={styles.divider} />
    </View>
  );
};
