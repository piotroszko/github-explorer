import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { useUiConfig } from "../ui-config/UiConfig";

const useStyles = () => {
  return StyleSheet.create({
    button: {
      marginHorizontal: "5%",
    },
  });
};

interface SearchButtonProps {
  onPress: () => void;
}

export const SearchButton = ({ onPress }: SearchButtonProps) => {
  const { transitions } = useUiConfig();
  const styles = useStyles();

  return (
    <Button
      icon={"magnify"}
      mode="contained"
      style={styles.button}
      onPress={onPress}>
      {transitions?.searchButton}
    </Button>
  );
};
