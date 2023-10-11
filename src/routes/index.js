import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Feather } from '@expo/vector-icons';

import Home from "../pages/home";
import Search from "../pages/search";
import Inbox from "../pages/inbox";
import New from "../pages/new";
import Profile from "../pages/profile";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: true }}>
      <Tab.Screen
        name="Home"
        component={Home}
        // options={{
        //   tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
        //   tabBarLabel: 'Início'
        // }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
      />
      <Tab.Screen
        name="New"
        component={New}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  )
}
