import { Stack } from "expo-router";

export default function LoginLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="Home"
        options={{ title: "index", headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        options={{ title: "Login", headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        options={{ title: "Criar conta", headerShown: false }}
      />
    </Stack>
  );
}
