import { Link } from "expo-router";
import { Image, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from "@rneui/themed";
import CustomButton from "@/components/CustomButton";
import images from "@/constants/Images";
import { Colors } from "@/constants/Colors";
export default function Login() {
  return (
    <SafeAreaView>
      <View>
        <Text>Login</Text>
        <Image source={images["asset-one"]} />
        <Input placeholder="Email" />
        <Input placeholder="Password" secureTextEntry={true} />
        <CustomButton
          fontColor={Colors.Dark}
          color={Colors.primaryBlue}
          title="Login"
        ></CustomButton>
      </View>

      <Link href="/login/forget-password" asChild></Link>

      <Link href="/login/reset-password" asChild></Link>
    </SafeAreaView>
  );
}
