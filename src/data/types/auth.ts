import { CreateLoginProps } from "./user";

export interface UserData {
  email: string;
  password: string;
  token?: string;
}

export interface AuthContextProps {
  user: UserData | null | undefined;

  signIn: (email: string, password: string) => Promise<UserData>;

  createLogin: (data: CreateLoginProps) => Promise<CreateLoginProps>;

  signOut: () => Promise<void>;
}
