import { Icon, TextInput, useTheme } from "react-native-paper";
import { useUiConfig } from "../ui-config/UiConfig";
import {
  forwardRef,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { TextInput as RNTextInput } from "react-native";

const useStyles = () => {
  return StyleSheet.create({
    clearButton: {
      height: "100%",
      position: "absolute",
      flexDirection: "column",
      justifyContent: "center",
      right: "5%",
    },
    wrapper: {
      position: "relative",
    },
    input: {
      paddingRight: "10%",
    },
  });
};

interface SearchInputProps {
  onChange?: (text: string | null) => void;
  onConfirm?: () => void;
}

export const SearchInput = forwardRef<RNTextInput, SearchInputProps>(
  ({ onChange, onConfirm }, ref) => {
    const theme = useTheme();
    const { placholders } = useUiConfig();
    const [search, setSearch] = useState("");
    const styles = useStyles();

    const isClearButtonVisible = search.length > 0;

    useEffect(() => {
      onChange?.(search);
    }, [search]);

    return (
      <View style={styles.wrapper}>
        <TextInput
          ref={ref}
          testID="search-input"
          style={styles.input}
          value={search}
          placeholder={placholders?.search}
          onChangeText={(text) => {
            setSearch(text);
          }}
          onSubmitEditing={() => {
            onConfirm?.();
          }}
        />

        {isClearButtonVisible && (
          <Pressable
            tabIndex={-1}
            testID="clear-button"
            style={styles.clearButton}
            onPress={() => {
              setSearch("");
            }}>
            <Icon
              source={"close-circle-outline"}
              size={30}
              color={theme?.colors?.primary}
            />
          </Pressable>
        )}
      </View>
    );
  }
);
