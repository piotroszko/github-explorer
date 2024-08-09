import { ActivityIndicator, Icon } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { ResultsFor } from "../results-for/ResultsFor";
import { UsersList } from "../users-list/UsersList";
import { useGetUsersQuery } from "../../api/useUsersQuery";

const useStyles = () => {
  return StyleSheet.create({
    loadingWrapper: {
      paddingTop: "50%",
    },
  });
};

interface SearchOutputProps {
  username: string;
}
export const SearchOutput = ({ username }: SearchOutputProps) => {
  const styles = useStyles();

  const { data, isLoading, isError } = useGetUsersQuery(username || "", 0);

  if (isLoading) {
    return (
      <ActivityIndicator
        animating={true}
        size={50}
        style={styles.loadingWrapper}
      />
    );
  }

  return isError ? (
    <Icon source="alert-circle" size={50} />
  ) : (
    <View
      style={{
        flex: 1,
      }}>
      <ResultsFor username={username} />
      <UsersList users={data?.data || []} />
    </View>
  );
};
