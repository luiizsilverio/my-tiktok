import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabRoutes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" barStyle="light-content" translucent />
      <TabRoutes />
    </NavigationContainer>
  );
}
