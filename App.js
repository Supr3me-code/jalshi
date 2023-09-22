import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Events from "./screens/Events";
import { Ionicons } from "@expo/vector-icons";
import Header from "./modules/Header";
import { useFonts } from "expo-font";
import EventDetails from "./screens/EventDetails";
import { QueryClient, QueryClientProvider } from "react-query";
import MessageWall from "./screens/MessageWall";
import Info from "./screens/Info";
import InfoDetails from "./screens/InfoDetails";
import AddMessage from "./screens/AddMessage";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const queryClient = new QueryClient();

const AppOverview = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#090945" },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: "#db5dce", borderTopWidth: 0 },
        tabBarActiveTintColor: "#090945",
        tabBarInactiveTintColor: "white",
        headerShadowVisible: false,
      }}
    >
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => <Header isHome={true} />,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Events"
        component={Events}
        options={{
          headerTitle: () => <Header title={"Events"} />,
          tabBarLabel: "Events",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="MessageWall"
        component={MessageWall}
        options={{
          headerTitle: () => <Header title={"Message Wall"} />,
          tabBarLabel: "Messages",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubbles" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Info"
        component={Info}
        options={{
          headerTitle: () => <Header title={"Information"} />,
          tabBarLabel: "Info",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="information-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default function App() {
  const [fontsLoaded] = useFonts({
    "kalam-regular": require("./assets/fonts/Kalam-Regular.ttf"),
    "kalam-bold": require("./assets/fonts/Kalam-Bold.ttf"),
    "kalam-light": require("./assets/fonts/Kalam-Light.ttf"),
    samarn: require("./assets/fonts/samarn.ttf"),
    samaro: require("./assets/fonts/samaro.ttf"),
  });

  return (
    <>
      <StatusBar style="light" />
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Jalshi"
              component={AppOverview}
              options={{
                headerShown: false,
              }}
            ></Stack.Screen>
            <Stack.Screen
              name="EventDetails"
              component={EventDetails}
              options={{
                presentation: "modal",
              }}
            />
            <Stack.Screen
              name="InfoDetails"
              component={InfoDetails}
              options={{
                presentation: "modal",
              }}
            />
            <Stack.Screen
              name="AddMessage"
              component={AddMessage}
              options={{
                headerShown: false,
                presentation: 'modal',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </>
  );
}
