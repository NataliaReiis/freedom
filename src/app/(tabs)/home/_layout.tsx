import { Tabs } from "expo-router/";
import { FontAwesome } from "@expo/vector-icons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="complaint"
        options={{
          headerShown: false,
          title: "Denucias",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="exclamation" size={24} color="#F0B9C3" />
          ),
        }}
      />
      <Tabs.Screen
        name="blog"
        options={{
          headerShown: false,
          title: "Blog",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="microblog" size={24} color="#F0B9C3" />
          ),
        }}
      />
    </Tabs>
  );
}
