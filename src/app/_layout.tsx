import { Stack } from "expo-router";
import { QueryClientProvider } from "@tanstack/react-query";
import queryCliente from "./data/services/queryClient";
import { AuthProvider } from "@/app/data/contexts/authContext";
import { useAuth } from "@/app/data/hooks/useAuth";

export default function TabRoutesLayout() {
  const { user } = useAuth();

  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ title: "Register", headerShown: false }}
        />
      </Stack>
    </AuthProvider>
  );
}
