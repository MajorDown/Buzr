import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { useFonts } from "expo-font";
import styles from "./styles/styles";
import chart from "./styles/chart";
import BackGradient from "./components/BackGradient";
import AppPanel from "./components/AppPanel";

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
        <Text style={styles.text}>buzr</Text>
        <AppPanel mode={"play"} />
      </BackGradient>
    );
}
