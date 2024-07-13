import { Text, TouchableOpacity, View } from "react-native";
import { Colorss } from "../constants/Colors";

interface ButtonProps {
  title: string;
  color: keyof typeof Colorss;
}

const ButtonBase: React.FC<ButtonProps> = ({ title, color }) => {
  return (
    <TouchableOpacity style={{ backgroundColor: Colorss[color] }}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};
export { ButtonBase };
