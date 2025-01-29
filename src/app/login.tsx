import {
  ActivityIndicator,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import images from "../ui/constants/Images";

import { Formik } from "formik";
import * as Yup from "yup";
import { useContext, useState } from "react";
import { AuthContext, AuthProvider } from "@/data/contexts/auth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("O Email é obrigatório").email().label("Email"),
  password: Yup.string()
    .required("A senha é obrigatória")
    .min(4)
    .label("Senha"),
});

const Login = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { signIn } = useContext(AuthContext);

  const handleLogin = async (values: { email: string; password: string }) => {
    setLoading(true);
    try {
      signIn(values.email, values.password);
      router.navigate("/(tabs)");
      return;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthProvider>
      <SafeAreaView>
        <View>
          <Image source={images["asset-one"]} />
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={async (values) => {
              handleLogin({ email: values.email, password: values.password });
            }}
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

        <TouchableOpacity onPress={() => router.push("/register")}>
          <Text>Criar conta</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </AuthProvider>
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
