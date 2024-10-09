import { Stack } from "expo-router";

export default function TabRoutesLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Index", headerShown: false }}
      />
      <Stack.Screen
        name="login"
        options={{ title: "Inicio", headerShown: false   }}
      />
    </Stack>
  );
}
