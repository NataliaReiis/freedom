import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState, useEffect, PropsWithChildren } from "react";
import { UserProps } from "../types/user";
import { AuthContextProps, UserData } from "../types/auth";
import { authService } from "../services/authService";

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserData>();

  // const saveUser = async (user: UserProps) => {
  //   await AsyncStorage.setItem("@ListApp:userToken", JSON.stringify(user));
  //   setUser(user);
  // };

  const signIn = async (email: string, password: string): Promise<UserData> => {
    const user = await authService.signIn(email, password);

    setUser(user);

    return user;
  };
  const signOut = async (): Promise<void> => {
    // await AsyncStorage.removeItem("@ListApp:userToken");
    // setUser(null);
    setUser(undefined);
    console.log("Logout");
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
