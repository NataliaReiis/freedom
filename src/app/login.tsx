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
import { inputStyle } from "@/ui/styles/input-style";
import CustomButton from "@/ui/components/CustomButton";
import { Colors } from "@/ui/constants/Colors";

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
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Image style={styles.imageMain} source={images["asset-one"]} />
          <View style={styles.form}>
            <Text style={styles.h1}>Login</Text>
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
                    style={inputStyle.input}
                    placeholder="Digite seu email"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    keyboardType="email-address"
                  />
                  {errors.email && touched.email && <Text>{errors.email}</Text>}

                  <TextInput
                    style={inputStyle.input}
                    placeholder="Digite sua senha"
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    secureTextEntry
                  />
                  {errors.password && touched.password && (
                    <Text>{errors.password}</Text>
                  )}

                  <Text style={styles.forgetPassword}>Esqueceu a senha?</Text>

                  <CustomButton
                    title="Entrar"
                    onPress={() => handleSubmit()}
                    color={Colors.secondaryGray}
                    fontColor="#ffffff"
                  >
                    {loading ? (
                      <ActivityIndicator color="#fff" size={24} />
                    ) : (
                      <Text>Login</Text>
                    )}
                  </CustomButton>
                </View>
              )}
            </Formik>
          </View>
          <View style={styles.containerLine}>
            <View style={styles.line}></View>
            <Text style={styles.orText}>OU</Text>
            <View style={styles.line}></View>
          </View>
          <Text>auth com google</Text>

          <View style={styles.containerCreateAccount}>
            <Text>
              Não tem conta?
              <Text
                style={styles.linkCreateAccount}
                onPress={() => router.push("/register")}
              >
                <Text> Criar conta</Text>
              </Text>
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    width: "100%",
    height: "80%",
  },
  imageMain: {
    alignSelf: "center",
  },
  h1: {
    fontSize: 40,
    fontWeight: "500",
  },
  form: {
    width: "100%",
    flex: 1,
    padding: 14,
  },
  containerLine: {
    flexDirection: "row",
    alignItems: "center",
    height: "5%",
    padding: 5,
  },
  line: {
    borderBottomWidth: 1,
    borderColor: Colors.primaryGray,
    flex: 1,
    padding: 2,
  },
  containerCreateAccount: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  linkCreateAccount: {
    fontSize: 16,
    paddingLeft: 2,
    color: Colors.secondaryBlue,
    fontWeight: "500",
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 14,
    color: Colors.primaryGray,
  },
  forgetPassword: {
    textAlign: "right",
    color: Colors.secondaryBlue,
    fontWeight: "500",
  },

  button: {
    backgroundColor: "#929292",
    height: 40,
    justifyContent: "center",
    textAlign: "center",
  },
});

export default Login;
