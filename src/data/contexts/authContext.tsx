import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useMemo, useState } from "react";
import { AuthContextProps, UserData } from "../types/auth";
import { authService } from "../requests/authRequest";
import { TOKEN_KEY } from "../constants";
import { CreateLoginProps } from "../types/user";

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserData | undefined | null>(null);

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

  const createLogin = async (
    data: CreateLoginProps
  ): Promise<CreateLoginProps> => {
    try {
      const response = await authService.createUser(data);

      console.log(response);

      if (!response) {
        throw new Error("token iválido");
      }

      await AsyncStorage.setItem(TOKEN_KEY, response.token);

      const user: CreateLoginProps = {
        email: response.user.email,
        password: response.user.password,
        name: response.profile.name,
        tel: response.profile.tel,
        cpf: response.profile.cpf,
        age: response.profile.age ?? 0,
        sex: response.profile.sex ?? null,
        marital_status: response.profile.marital_status ?? null,
      };

      setUser(user);

      return user;
    } catch (error) {
      console.error("Error interno no servidor");
      throw error;
    }
  };

  const signOut = async (): Promise<void> => {
    try {
      setUser(null);
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
      createLogin,
    }),
    [user]
  );

  return (
    <AuthContext.Provider value={AuthContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
