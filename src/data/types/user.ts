import { CreateProfile } from "./profile";

export type UserProps = {
  id: string;
  email: string;
  password: string;
};

export type CreateUserWithProfile = Omit<UserProps, "id"> & CreateProfile;

export type CreateLoginProps = {
  email: string;
  password: string;
  name: string;
  tel: string;
  cpf: string;
  age?: number;
  sex?: string;
  marital_status?: string;
};
