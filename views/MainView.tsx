import { MainLayout } from "../components/main-layout/MainLayout";
import { SearchInput } from "../components/search-input/SearchInput";
import { SearchButton } from "../components/search-button/SearchButton";
import { SearchOutput } from "../components/search-output/SearchOutput";
import { useRef, useState } from "react";
import { isNil } from "lodash";
import { TextInput } from "react-native";

export const MainView = () => {
  const ref = useRef<TextInput>(null);
  const [search, setSearch] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);

  const isSearchEmpty = search?.length === 0 || isNil(search);

  const onSearch = () => {
    if (username) {
      ref?.current?.blur();
      setSearch(username);
    }
  };
  return (
    <MainLayout>
      <SearchInput
        ref={ref}
        onChange={(text) => setUsername(text)}
        onConfirm={onSearch}
      />
      <SearchButton onPress={onSearch} />
      {isSearchEmpty ? null : <SearchOutput username={search || ""} />}
    </MainLayout>
  );
};
