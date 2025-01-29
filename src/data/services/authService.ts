import axios from "axios";

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

export const authService = { signIn };
