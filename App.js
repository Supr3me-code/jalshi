import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Events from "./screens/Events";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const AppOverview = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#090945" },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: "#db5dce" },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
      }}
    >
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{
          title: "Jalshi",
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={"white"} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Events"
        component={Events}
        options={{
          title: "Events",
          tabBarLabel: "Events",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={"white"} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Jalshi"
            component={AppOverview}
            options={{
              headerShown: false,
            }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
