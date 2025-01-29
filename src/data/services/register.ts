import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TOKEN_KEY } from "../constants";
import { CreateUserWithProfile } from "../types/user";

async function createUser(createUserDto: CreateUserWithProfile) {
  try {
    const url = "http://192.168.15.91:3000/auth/register";

    const { status, data } = await axios.post(url, { createUserDto });

    if (status === 200) {
      const { token, email } = data;

      console.log(token);
      await AsyncStorage.setItem(TOKEN_KEY, token);
      return { token, email };
    }
  } catch (error) {
    console.error(error);
  }
}

export { createUser };
