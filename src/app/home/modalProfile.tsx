import { StyleSheet, Text, View } from "react-native";

export default function modalProfile() {
  return (
    <View style={styles.container}>
      <Text>Perfil</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
