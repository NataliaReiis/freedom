import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState, useEffect, PropsWithChildren } from "react";
import { UserProps } from "../types/user";
import { AuthContextProps } from "../types/auth";

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserProps | null>(null);

  // const saveUser = async (user: UserProps) => {
  //   await AsyncStorage.setItem("@ListApp:userToken", JSON.stringify(user));
  //   setUser(user);
  // };

  const login = () => (user: UserProps) => {
    console.log("login");
  };
  const logout = async () => {
    // await AsyncStorage.removeItem("@ListApp:userToken");
    // setUser(null);
    console.log("Logout");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
