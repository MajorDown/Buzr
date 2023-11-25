import {useEffect} from "react";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { useFonts } from "expo-font";
import chart from "./styles/chart";
import BackGradient from "./components/BackGradient";
import AppView from "./components/AppView";
import { ScreenProvider } from "./contexts/ScreenContext";

export default function App() {
  useEffect(() => console.log("création de App"), [])

  const [loadedFont, FontError] = useFonts({
    "Orbitron-Bold": require("./assets/fonts/Orbitron-Bold.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
  });
  if (FontError) return <Text>loading...</Text>;
  if (loadedFont)
    return (
      <BackGradient colors={chart.appBackGradientColors}>
        <StatusBar style="light" hidden />
            <AppView />
      </BackGradient>
    );
}
