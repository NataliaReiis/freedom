import { Stack } from "expo-router";
import { AuthProvider } from "../data/contexts/authContext";
import { useAuth } from "../data/hooks/useAuth";

export default function RootLayout() {
  // const { user } = useAuth();

  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ title: "index", headerShown: false }}
        />
        <Stack.Screen
          name="login"
          options={{ title: "Login", headerShown: false }}
        />
        <Stack.Screen
          name="register"
          options={{ title: "Register", headerShown: false }}
        />
      </Stack>
    </AuthProvider>
  );
}
