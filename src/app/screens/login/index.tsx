import React from "react";
import { Button, Text, View } from "react-native";
import { Link } from "expo-router";

const LoginHome = () => {
  return (
    <View>
      <Text>Seja livre, seja Freedom</Text>
      <Link href="login/login-initial" asChild>
        <Button title="Continuar"></Button>
      </Link>
    </View>
  );
};

export default LoginHome;
