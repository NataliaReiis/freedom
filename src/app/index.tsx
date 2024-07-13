
import { StyleSheet, Text, View } from "react-native";
import { ButtonBase } from "../components/ButtonBase";

export default function Page() {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Ola mundo</Text>
      <ButtonBase color="secondaryBlue" title="Entrar"></ButtonBase>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
