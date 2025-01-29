import { CreateProfile } from "./profile";

export type UserProps = {
  id: string;
  email: string;
  password: string;
};

export type CreateUserWithProfile = Omit<UserProps, "id"> & CreateProfile;
