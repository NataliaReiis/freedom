import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Login() {
  return (
    <View>
      <Text>Login</Text>
      <Link href="/login/forget-password" asChild>
        <Button title="Esqueceu a senha?" />
      </Link>

      <Link href="/login/reset -password" asChild>
        <Button title="Criar conta" />
      </Link>
    </View>
  );
}
