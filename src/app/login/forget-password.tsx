import React from "react";
import { View, Text, Button } from "react-native";
import { Link } from "expo-router";

const ForgetPassword = () => {
  return (
    <View>
      <Text>Esqueceu a senha?</Text>
      <Link href="login/reset-password" asChild>
        <Button title="Enviar" />
      </Link>
    </View>
  );
};

export default ForgetPassword;
