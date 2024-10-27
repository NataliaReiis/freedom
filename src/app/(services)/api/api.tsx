import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

interface LoginProps {
  data: string;
}

const loginUser = async (data: LoginProps) => {
  try {
    const url = "http://localhost:3000/autentication";

    if (!url) {
      throw new Error("Url nao definida");
    }

    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

interface RegisterProps {
  email: string;
  name: string;
  tel: string;
  password: string;
  cpf: string;
  age: string;
  sex: string;
}

const RegisterUser = async (data: RegisterProps) => {
  try {
    const url = "http://localhost:3000/users";

    if (!url) {
      throw new Error("Url nao definida");
    }

    const response = await axios.post(url, data);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
