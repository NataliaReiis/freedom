import axios from "axios";
import { UserData } from "../types/auth";

async function signIn(email: string, password: string) {
  try {
    const url = "http://localhost:3000/auth";

    if (!url) {
      throw new Error("Url nao definida");
    }

    const { data, status } = await axios.post(url, {
      email,
      password,
    });

    if (status === 200) {
      const { token, email: userEmail } = data;
      console.log("Login realizado", userEmail);
      console.log("token: ", token);
    } else {
      throw new Error("Falha na autenticação");
    }
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Erro no Axios: ", {
        message: err.message,
        code: err.code,
        response: err.response?.data,
        status: err.response?.status,
        url: err.config?.url,
      });
    } else if (err instanceof Error) {
      console.error("Error generico: ", {
        message: err.message,
        stack: err.stack,
      });
    } else {
      console.error("Error desconhecido", err);
    }
  }
}

export const authService = { signIn };
