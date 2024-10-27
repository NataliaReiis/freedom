import { GestureResponderEvent, StyleSheet } from "react-native";
import { Link, useRouter } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from "@rneui/themed";
import images from "@/constants/Images";
import { Colors } from "@/constants/Colors";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("O Nome é obrigatório").label("Nome"),
  email: Yup.string().required("O Email é obrigatório").email().label("Email"),
  confirmEmail: Yup.string()
    .oneOf([Yup.ref("email"), undefined], "Os e-mails precisam ser iguais")
    .required("A confirmação de e-mail é obrigatória"),
  password: Yup.string()
    .required("A senha é obrigatória")
    .min(6)
    .label("Senha"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "as senhas precisam ser iguais")
    .required("Requerid"),
  phoneNumber: Yup.string(),
});

const Register = () => {
  const router = useRouter();
  return (
    <SafeAreaView>
      <View>
        <Text>Criar Conta</Text>
        <Formik
          initialValues={{
            name: "",
            email: "",
            confirmEmail: "",
            password: "",
            confirmPassword: "",
            phoneNumber: "",
          }}
          onSubmit={(values) => console.log(values)}
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
                placeholder="Nome completo"
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
                keyboardType="name-phone-pad"
              />
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
                placeholder="Confirmar email"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.confirmEmail}
                keyboardType="email-address"
              />
              {errors.confirmEmail && touched.confirmEmail && (
                <Text>{errors.confirmEmail}</Text>
              )}

              <TextInput
                style={styles.input}
                placeholder="Número de celular"
                onChangeText={handleChange("phoneNumber")}
                onBlur={handleBlur("phoneNumber")}
                value={values.phoneNumber}
                secureTextEntry
              />
              {errors.phoneNumber && touched.phoneNumber && (
                <Text>{errors.phoneNumber}</Text>
              )}

              <TextInput
                style={styles.input}
                placeholder="Criar senha"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry
              />
              {errors.password && touched.password && (
                <Text>{errors.password}</Text>
              )}

              <TextInput
                style={styles.input}
                placeholder="Confirmar senha"
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                value={values.confirmPassword}
                secureTextEntry
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <Text>{errors.confirmPassword}</Text>
              )}

              <TouchableOpacity>
                <View style={styles.button}>
                  <Text>Enviar</Text>
                </View>
              </TouchableOpacity>

              <Text>
                Ao criar uma conta, você aceita os termos de privacidade e uso
                de dados.
              </Text>
              <TouchableOpacity onPress={() => handleSubmit()}>
                <Text>Entrar</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>

      <TouchableOpacity onPress={() => router.push("/auth/Login")}>
        <Text>Ja tem conta? Faça o Login</Text>
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
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 20,
    marginTop: 10,
  },
});

export default Register;
