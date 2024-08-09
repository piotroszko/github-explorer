import { Icon, TextInput, useTheme } from "react-native-paper";
import { useUiConfig } from "../ui-config/UiConfig";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

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
}

export const SearchInput = ({ onChange }: SearchInputProps) => {
  const theme = useTheme();
  const { placholders, timings } = useUiConfig();
  const [search, setSearch] = useState("");
  const styles = useStyles();

  const isClearButtonVisible = search.length > 0;

  useEffect(() => {
    onChange?.(search);
  }, [search]);

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        value={search}
        placeholder={placholders?.search}
        onChangeText={(text) => {
          setSearch(text);
        }}
      />

      {isClearButtonVisible && (
        <Pressable
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
};
