import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./Screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HotelDetailScreen from "./Screens/HotelDetailScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Feather } from "@expo/vector-icons";
import TabIcons from "./components/TapIcons";
import icons from "./assets/icons/Icons";

function Root() {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      style={{
        shadowColor: "red",
      }}
      barStyle={{
        backgroundColor: "white",
        height: 65,
        elevation: 30,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcons focused={focused} icon={icons.Home} />
          ),
          tabBarBadge: "1",
          tabBarColor: "orange",
          tabBarStyle: {
            // height: 20,
            // marginTop: 2,
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
          },
        }}
      />
      <Tab.Screen
        name="HotelDetailScreen"
        component={HotelDetailScreen}
        options={{
          title: "Details",
          tabBarIcon: ({ focused }) => (
            <TabIcons focused={focused} icon={icons.Cooking} />
          ),
          tabBarStyle: {
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar style="auto" />

      <Stack.Navigator initialRouteName="Root">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="HotelDetailScreen"
          component={HotelDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
