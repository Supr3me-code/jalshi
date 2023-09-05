import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark"/>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Jalshi" component={Home}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
