import { AuthProvider } from "@/app/data/contexts/authContext";
import { useAuth } from "@/app/data/hooks/useAuth";
import { Stack } from "expo-router";

export default function LoginLayout() {
  const { user } = useAuth();
  return (
    <AuthProvider>
      {user ? (
        <Stack>
          <Stack.Screen
            name="Home"
            options={{ title: "Home", headerShown: false }}
          />
        </Stack>
      ) : (
        <>
          <Stack>
            <Stack.Screen
              name="Login"
              options={{ title: "Login", headerShown: false }}
            />
          </Stack>
          <Stack>
            <Stack.Screen
              name="Register"
              options={{ title: "Register", headerShown: false }}
            />
          </Stack>
        </>
      )}
    </AuthProvider>
  );
}
