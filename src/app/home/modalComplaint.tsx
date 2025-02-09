import { StyleSheet, Text, View } from "react-native";

export default function modalComplaint() {
  return (
    <View style={styles.container}>
      <Text>Denuncia</Text>
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
