import React from "react";
import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import images from "@/constants/Images";
import CustomButton from "@/components/CustomButton";

const Initial = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ImageBackground
          source={images["image-welcome"]}
          style={styles.imageBackground}
        >
          <View style={styles.overlay}>
            <View style={styles.contentInitial}>
              <Text style={styles.titleInitial}>Seja livre, seja Freedom</Text>
              <Link href="login/login-initial" asChild>
                <CustomButton
                  fontColor={Colors.Dark}
                  color={Colors.secondaryPink}
                  title="Continuar"
                ></CustomButton>
              </Link>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
  },
  imageBackground: {
    backgroundColor: Colors.secondaryPink,
    flex: 1,
    resizeMode: "contain",
  

  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.1)", // Alterar a cor e opacidade conforme necessário
  },
  contentInitial: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 50,
  },
  titleInitial: {
    width: "auto",
    fontSize: 40,
    fontWeight: "700",
    textAlign: "center",
    color: Colors.Dark,
    backgroundColor: "transparent",
  },
});

export default Initial;
