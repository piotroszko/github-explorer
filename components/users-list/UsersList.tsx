import { isNil } from "lodash";
import { User } from "../../api/models";
import { List } from "react-native-paper";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { useState } from "react";
import { RepositoriesList } from "../repositories-list/RepositoriesList";

const useStyles = () => {
  return StyleSheet.create({
    avatar: {
      borderRadius: 20,
      borderColor: "lightgray",
      borderWidth: 2,
    },
    avatarWrapper: {
      flexDirection: "row",
      alignItems: "center",
    },
  });
};

interface UsersListProps {
  users?: User[];
}

export const UsersList = ({ users }: UsersListProps) => {
  return isNil(users) || users.length === 0 ? null : (
    <ScrollView>
      <List.Section>
        {users.map((user) => (
          <UserComponent key={user.id} user={user} />
        ))}
      </List.Section>
    </ScrollView>
  );
};

const UserComponent = ({ user }: { user: User }) => {
  const styles = useStyles();
  const [expanded, setExpanded] = useState(false);
  return (
    <List.Accordion
      key={user.id}
      title={user.login}
      expanded={expanded}
      onPress={expanded ? () => setExpanded(false) : () => setExpanded(true)}
      left={() => (
        <View style={styles.avatarWrapper}>
          <Image
            source={{
              uri: user.avatar_url,
              method: "GET",
            }}
            width={35}
            height={35}
            style={styles.avatar}
          />
        </View>
      )}>
      {expanded && <RepositoriesList username={user.login} />}
    </List.Accordion>
  );
};
