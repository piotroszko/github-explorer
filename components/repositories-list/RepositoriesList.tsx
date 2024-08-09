import { ActivityIndicator, List, Text, useTheme } from "react-native-paper";
import { useRepositoriesQuery } from "../../api/useRepositoriesQuery";
import { StyleSheet, View } from "react-native";
import { useUiConfig } from "../ui-config/UiConfig";

const useStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    repositiory: {
      paddingHorizontal: 10,
    },
    notFound: {
      fontStyle: "italic",
      color: theme.colors.backdrop,
    },
  });
};

interface RepositoriesListProps {
  username: string;
}
export const RepositoriesList = ({ username }: RepositoriesListProps) => {
  const theme = useTheme();
  const { data, isLoading, isError } = useRepositoriesQuery(username);
  const styles = useStyles();
  const { transitions } = useUiConfig();

  if (isLoading) {
    return (
      <ActivityIndicator animating={true} size={25} testID="loading-icon" />
    );
  }

  return data?.length === 0 || isError ? (
    <List.Item
      title={
        <Text
          style={styles.notFound}
          testID={
            data?.length === 0 ? "repositories-not-found" : "error-message"
          }>
          {data?.length === 0
            ? transitions?.repositoriesNotFound
            : transitions?.errorWhileFetching}
        </Text>
      }
    />
  ) : (
    data?.map((repo) => (
      <List.Item
        testID={`repository-${repo?.id}`}
        left={() => (
          <List.Icon icon="source-repository" color={theme?.colors?.primary} />
        )}
        right={() => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            }}>
            <Text
              variant="titleSmall"
              style={{
                fontWeight: "bold",
              }}>
              {repo?.stargazers_count}
            </Text>
            <List.Icon icon="star" color={theme?.colors?.tertiary} />
          </View>
        )}
        title={repo?.name}
        key={repo?.id}
        description={repo?.description}
        style={styles.repositiory}
      />
    ))
  );
};
