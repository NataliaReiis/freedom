import {
  ActivityIndicator,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Link, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from "@rneui/themed";
import images from "@/app/ui/constants/Images";
import { Colors } from "@/app/ui/constants/Colors";
import { Formik } from "formik";
import * as Yup from "yup";
import { LoginProps, LoginUser, RegisterUser } from "../data/services/api/api";
import { PropsWithChildren, useState } from "react";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("O Email é obrigatório").email().label("Email"),
  password: Yup.string()
    .required("A senha é obrigatória")
    .min(4)
    .label("Senha"),
});

type UserProps = {
  email: string;
  password: string | null;
};
const Login = (props: PropsWithChildren) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (values: LoginProps) => {
    if (username.length === 0) return;
    setLoading(true);

    try {
      const response = await LoginUser(values);
      const user = response.data;
      console.log(user);
    } catch (err) {
      console.log("Error: ", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView>
      <View>
        <Image source={images["asset-one"]} />
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handleLogin}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            handleBlur,
            values,
            errors,
            touched,
          }) => (
            <View>
              <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
              />
              {errors.email && touched.email && <Text>{errors.email}</Text>}

              <TextInput
                style={styles.input}
                placeholder="Senha"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry
              />
              {errors.password && touched.password && (
                <Text>{errors.password}</Text>
              )}

              <TouchableOpacity
                onPress={() => handleSubmit()}
                style={styles.button}
                disabled={loading}
              >
                {loading ? (
                  <ActivityIndicator color="#fff" size={24} />
                ) : (
                  <Text>Login</Text>
                )}
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>

      <TouchableOpacity>
        <Text>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/screens/Register")}>
        <Text>Criar conta</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: "solid",
  },
  button: {
    backgroundColor: "#929292",
    width: "100%",
    height: 40,
    justifyContent: "center",
    textAlign: "center",
  },
});

export default Login;
