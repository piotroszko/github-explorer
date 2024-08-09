import { ActivityIndicator, List, Text, useTheme } from "react-native-paper";
import { useRepositoriesQuery } from "../../api/useRepositoriesQuery";
import { StyleSheet, View } from "react-native";
import { useUiConfig } from "../ui-config/UiConfig";
import { Respository } from "../../api/models";

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
  const { data, isLoading, isError } = useRepositoriesQuery(username);

  if (isLoading) {
    return (
      <ActivityIndicator animating={true} size={25} testID="loading-icon" />
    );
  }

  return data?.length === 0 || isError ? (
    <List.Item title={<NoData isError={isError} />} />
  ) : (
    data?.map((repo) => <Repository key={repo?.id} repo={repo} />)
  );
};

const NoData = ({ isError }: { isError: boolean }) => {
  const styles = useStyles();
  const { transitions } = useUiConfig();
  return (
    <List.Item
      title={
        <Text
          style={styles.notFound}
          testID={isError ? "error-message" : "repositories-not-found"}>
          {isError
            ? transitions?.errorWhileFetching
            : transitions?.repositoriesNotFound}
        </Text>
      }
    />
  );
};

const Repository = ({ repo }: { repo: Respository }) => {
  const theme = useTheme();
  const styles = useStyles();
  return (
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
  );
};
