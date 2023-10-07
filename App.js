import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import Ip from "./screens/Ip";
import { useEffect } from "react";
import IpData from "./screens/IpData";
import Map from "./screens/Map";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="IpGeolocation"
          component={Ip}
          options={{ title: "Ip Geolocation" }}
        />
        <Stack.Screen
          name="IpData"
          component={IpData}
          options={{ title: "Ip Data" }}
        />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
