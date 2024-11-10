import { UserProps } from "./user";

export type AuthContextProps = {
  user: UserProps | null;
  login: () => (user: UserProps) => void;
  logout: () => void;
};
