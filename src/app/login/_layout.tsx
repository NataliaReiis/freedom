import { Stack } from "expo-router";

export default function LoginLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "index", headerShown: false }}
      />
      <Stack.Screen
        name="login-initial"
        options={{ title: "Login", headerShown: false }}
      />
      <Stack.Screen
        name="forget-password"
        options={{ title: "Esqueceu a senha", headerShown: false }}
      />
      <Stack.Screen
        name="reset-password"
        options={{ title: "Resetar senha", headerShown: false }}
      />
    </Stack>
  );
}
