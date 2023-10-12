import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';

import Home from "../pages/home";
import Search from "../pages/search";
import Inbox from "../pages/inbox";
import New from "../pages/new";
import Profile from "../pages/profile";
import NewButton from "../components/NewButton";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: "#101010",
        borderTopWidth: 0,
      },
      tabBarActiveTintColor: '#FFF'
    }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <Ionicons name="home" color={color} size={size} />
            }
            return <Ionicons name="home-outline" color={color} size={size} />
          }
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <Ionicons name="search" color={color} size={size} />
            }
            return <Ionicons name="search-outline" color={color} size={size} />
          }
        }}
      />

      <Tab.Screen
        name="New"
        component={New}
        options={{
          tabBarIcon: ({ size }) => {
            return <NewButton size={size} />
          }
        }}
      />

      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <Ionicons name="ios-chatbubble-ellipses" color={color} size={size} />
            }
            return <Ionicons name="ios-chatbubble-ellipses-outline" color={color} size={size} />
          }
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <Ionicons name="person" color={color} size={size} />
            }
            return <Ionicons name="person-outline" color={color} size={size} />
          }
        }}
      />
    </Tab.Navigator>
  )
}
