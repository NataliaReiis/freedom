import { Button, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";


export default function Page() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Freedom</Text>
      <Link href="/login" asChild >
        <Button title="Pagina Inicial"></Button>
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
});