import { AuthContext } from "@/app/data/contexts/authContext";
import { useContext } from "react";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("use AuthProvider around project");
  }
  return context;
};
