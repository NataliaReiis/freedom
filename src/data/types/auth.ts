export interface UserData {
  email: string;
  password: string;
  token: string;
}

export interface AuthContextProps {
  user?: UserData | null;
  signIn: (email: string, password: string) => Promise<UserData>;
  signOut: () => Promise<void>;
}
