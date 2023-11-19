import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { useFonts } from "expo-font";
import chart from "./styles/chart";
import BackGradient from "./components/BackGradient";
import AppScreen from "./components/AppScreen";

export default function App() {

  const [loadedFont, FontError] = useFonts({
    "Orbitron-Bold": require("./assets/fonts/Orbitron-Bold.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
  });
  if (FontError) return <Text>loading...</Text>;
  if (loadedFont)
    return (
      <BackGradient colors={chart.appBackGradientColors}>
        <StatusBar style="light" hidden />
        <AppScreen />
      </BackGradient>
    );
}
