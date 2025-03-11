import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Formik } from "formik";
import * as Yup from "yup";

import { useContext, useState } from "react";

import { inputStyle } from "@/ui/styles/input-style";
import { textStyle } from "@/ui/styles/text-style";
import { globalStyle } from "@/ui/styles/global-style";
import { formStyle } from "@/ui/styles/form-style";
import { AuthContext } from "@/data/contexts/authContext";
import { CreateLoginProps } from "@/data/types/user";
import { Button } from "@rneui/base";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("O Nome é obrigatório"),
  email: Yup.string().required("O Email é obrigatório").email(),
  confirmEmail: Yup.string()
    .oneOf([Yup.ref("email")], "Os e-mails precisam ser iguais")
    .required("A confirmação de e-mail é obrigatória"),
  password: Yup.string().required("A senha é obrigatória").min(6),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "as senhas precisam ser iguais")
    .required("A confirmação de senha é obrigatória."),
  age: Yup.number().required("A idade é obrigatória"),
  tel: Yup.number(),
  cpf: Yup.string().required("O  cpf é obrigatório."),
});

const Register = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const { createLogin } = useContext(AuthContext);

  const handlecreateUser = async (data: CreateLoginProps) => {
    try {
      setLoading(true);
      createLogin(data);
      console.log("dados: ", data);
      router.navigate("/home/(tabs)");
      return;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={globalStyle.safeArea}>
      <View style={styles.container}>
        <View style={formStyle.form}>
          <Text style={textStyle.h1}>Criar Conta</Text>
          <Formik
            initialValues={{
              email: "",
              confirmEmail: "",
              password: "",
              confirmPassword: "",
              name: "",
              tel: "",
              cpf: "",
              age: 0,
            }}
            onSubmit={async (values) => {
              handlecreateUser({
                email: values.email,
                password: values.password,
                name: values.name,
                tel: values.tel,
                cpf: values.cpf,
                age: values.age,
              });
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
              <View style={styles.container}>
                <TextInput
                  style={inputStyle.input}
                  placeholder="Nome completo"
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                  keyboardType="name-phone-pad"
                />
                <TextInput
                  style={inputStyle.input}
                  placeholder="Email"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                />
                {errors.email && touched.email && <Text>{errors.email}</Text>}
                <TextInput
                  style={inputStyle.input}
                  placeholder="Confirmar email"
                  onChangeText={handleChange("confirmEmail")}
                  onBlur={handleBlur("confirmEmail")}
                  value={values.confirmEmail}
                  keyboardType="email-address"
                />
                {errors.confirmEmail && touched.confirmEmail && (
                  <Text>{errors.confirmEmail}</Text>
                )}

                <TextInput
                  style={inputStyle.input}
                  placeholder="Digite sua idade"
                  onChangeText={handleChange("age")}
                  onBlur={handleBlur("age")}
                  value={values.age.toString()}
                  keyboardType="numeric"
                />
                {errors.age && touched.age && <Text>{errors.age}</Text>}

                <TextInput
                  style={inputStyle.input}
                  placeholder="Número de celular"
                  onChangeText={handleChange("tel")}
                  onBlur={handleBlur("tel")}
                  value={values.tel}
                />
                {errors.tel && touched.tel && <Text>{errors.tel}</Text>}

                <TextInput
                  style={inputStyle.input}
                  placeholder="Digite seu cpf"
                  onChangeText={handleChange("cpf")}
                  onBlur={handleBlur("cpf")}
                  value={values.cpf}
                />
                {errors.cpf && touched.cpf && <Text>{errors.cpf}</Text>}

                <TextInput
                  style={inputStyle.input}
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
                  style={inputStyle.input}
                  placeholder="Confirmar senha"
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  value={values.confirmPassword}
                  secureTextEntry
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <Text>{errors.confirmPassword}</Text>
                )}

                <Text>
                  Ao criar uma conta, você aceita os termos de privacidade e uso
                  de dados.
                </Text>

                <Button onPress={() => handleSubmit()}>
                  {loading ? (
                    <ActivityIndicator color="#fff" size={24} />
                  ) : (
                    <Text>Login</Text>
                  )}
                </Button>
              </View>
            )}
          </Formik>
        </View>
      </View>
      <View style={styles.goToLogin}>
        <TouchableOpacity onPress={() => router.push("/login")}>
          <Text>Ja tem conta? Faça o Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "80%",
    justifyContent: "center",
  },
  goToLogin: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Register;
