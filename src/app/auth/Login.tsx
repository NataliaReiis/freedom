import { StyleSheet } from "react-native";
import { Link, useRouter } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from "@rneui/themed";
import images from "@/constants/Images";
import { Colors } from "@/constants/Colors";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("O Email é obrigatório").email().label("Email"),
  password: Yup.string()
    .required("A senha é obrigatória")
    .min(4)
    .label("Senha"),
});
const Login = () => {
  const router = useRouter();

  return (
    <SafeAreaView>
      <View>
        <Image source={images["asset-one"]} />
        <Formik
          initialValues={{ email: "natalia@email", password: "1234" }}
          onSubmit={(values) => {
            console.log(values);
            router.push("/(tabs)");
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

              <TouchableOpacity onPress={() => handleSubmit()}>
                <View style={styles.button}>
                  <Text>Login</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>

      <TouchableOpacity>
        <Text>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/auth/Register")}>
        <Text>Criar conta</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderColor: "1px solid gray",
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: "solid",
  },
  button: {
    backgroundColor: "#929292",
    width: "100%",
    height: 40,
    justifyContent: "center",
  },
});

export default Login;
