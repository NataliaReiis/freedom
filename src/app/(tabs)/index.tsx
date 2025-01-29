import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "@/data/contexts/auth";

const Home = () => {
  const router = useRouter();
  const { signOut } = useContext(AuthContext);

  const handleLogout = async () => {
    signOut();
    router.navigate("/login");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text>home</Text>
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
});
