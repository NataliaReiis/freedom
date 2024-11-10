import React from "react";
import { Button } from "@rneui/themed";

interface CustomButtonProps {
  title: string;
  onPress?: () => void;
  color: string;
  fontColor: string
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, color, fontColor }) => {
  return (
    <Button
      title={title}
      buttonStyle={{
        backgroundColor: color,
        borderRadius: 5,
        height: 50
      }}
      titleStyle={{color: fontColor, fontWeight: 700, fontSize: 14 }}
      containerStyle={{
        marginHorizontal: 50,
        height: 55,
        width: 259,
        borderRadius: 5,
        marginVertical: 10,

      }}
      onPress={onPress} 
    />
  );
};

export default CustomButton;
