import React from "react";
import { Button } from "@rneui/themed";

interface CustomButtonProps {
  title: string;
  onPress?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress }) => {
  return (
    <Button
      title={title}
      buttonStyle={{
        backgroundColor: "#13445A",
        borderRadius: 5,
      }}
      titleStyle={{ fontWeight: "bold", fontSize: 23 }}
      containerStyle={{
        marginHorizontal: 50,
        height: 50,
        width: 305,
        borderRadius: 5,
        marginVertical: 10,
      }}
      onPress={onPress} // Adicionando onPress como propriedade opcional
    />
  );
};

export default CustomButton;
