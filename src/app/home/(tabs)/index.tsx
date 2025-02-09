import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { Link, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "@/data/contexts/auth";
import { Avatar } from "@ui-kitten/components";

const Home = () => {
  const router = useRouter();
  const { signOut } = useContext(AuthContext);

  const handleLogout = async () => {
    signOut();
    router.navigate("/login");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Link href="/home/modalProfile">
        <Avatar source={require("../../../ui/assets/example-profile.png")} />
      </Link>
      <Link href="/home/modalComplaint">Denunciar</Link>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => handleLogout()}>
          <Text>Sair</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
