import axios from "axios";
import { CreateLoginProps } from "../types/user";

async function signIn(email: string, password: string) {
  try {
    const url = "http://192.168.15.91:3000/auth";

    if (!url) {
      throw new Error("Url nao definida");
    }

    const { data, status } = await axios.post(url, {
      email,
      password,
    });

    if (status === 200) {
      const { token, email } = data;

      console.log("token:", token, "email: ", email);

      return data;
    } else {
      console.log("Resposta inesperada");
    }
  } catch (err) {
    console.error(err);
  }
}

async function createUser(dto: CreateLoginProps) {
  try {
    const url = "http://192.168.15.91:3000/auth/register";

    if (!url) {
      throw new Error("Url nao definida");
    }

    const { data, status } = await axios.post(url, dto);

    console.log("response axios", data);

    if (status === 201) {
      const response = data;

      console.log(response);

      console.log("token:", response.token, "email: ", response.email);

      return response;
    } else {
      console.log("Resposta inesperada");
    }
  } catch (error) {
    console.error("erro interno no servidor");
  }
}

export const authService = { signIn, createUser };
