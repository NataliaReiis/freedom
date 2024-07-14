import React from "react";
import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";

const LoginHome = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Seja livre, seja Freedom</Text>
        <Link href="login/login-initial" asChild>
          <Button title="Continuar"></Button>
        </Link>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: Colors.secondaryPink,
  },
});

export default LoginHome;
