import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useMemo, useState } from "react";
import { AuthContextProps, UserData } from "../types/auth";
import { authService } from "../services/authService";
import { TOKEN_KEY } from "../constants";

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserData | undefined>(undefined);

  const signIn = async (email: string, password: string): Promise<UserData> => {
    try {
      const user = await authService.signIn(email, password);

      if (!user?.token) {
        throw new Error("token invalido");
      }

      await AsyncStorage.setItem(TOKEN_KEY, user.token);
      setUser(user);

      console.log("login realizado");

      return user;
    } catch (error) {
      console.error("Error no login");
      throw error;
    }
  };

  const signOut = async (): Promise<void> => {
    try {
      setUser(undefined);
      await AsyncStorage.removeItem(TOKEN_KEY);
      console.log("Logout realizado");
      console.log(TOKEN_KEY);
    } catch (error) {
      console.error(error);
    }
  };

  const AuthContextValue = useMemo(
    () => ({
      user,
      signIn,
      signOut,
    }),
    [user]
  );

  return (
    <AuthContext.Provider value={AuthContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
