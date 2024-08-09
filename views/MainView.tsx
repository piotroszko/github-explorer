import { MainLayout } from "../components/main-layout/MainLayout";
import { SearchInput } from "../components/search-input/SearchInput";
import { SearchButton } from "../components/search-button/SearchButton";
import { SearchOutput } from "../components/search-output/SearchOutput";
import { useState } from "react";
import { isNil } from "lodash";

export const MainView = () => {
  const [search, setSearch] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);

  const isSearchEmpty = search?.length === 0 || isNil(search);
  return (
    <MainLayout>
      <SearchInput onChange={(text) => setUsername(text)} />
      <SearchButton
        onPress={() => {
          if (username) {
            setSearch(username);
          }
        }}
      />
      {isSearchEmpty ? null : <SearchOutput username={search || ""} />}
    </MainLayout>
  );
};
