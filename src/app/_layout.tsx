import { Stack } from "expo-router";
import { QueryClientProvider } from "@tanstack/react-query";
import queryCliente from "./(services)/queryClient";
export default function TabRoutesLayout() {
  return (
    <QueryClientProvider client={queryCliente}>
      <Stack>
        <Stack.Screen
          name="Login"
          options={{ title: "Index", headerShown: false }}
        />
      </Stack>
    </QueryClientProvider>
  );
}
