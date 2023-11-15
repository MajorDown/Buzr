import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import styles from "./styles/styles";
import chart from "./styles/chart";

export default function App() {

  const [loadedFont, FontError] = useFonts({
    "Orbitron-Bold": require("./assets/fonts/Orbitron-Bold.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
  });
  if (FontError) return <Text>loading...</Text>;
  if (loadedFont)
    return (
      <LinearGradient 
        colors={[chart.colorBackGradTop, chart.colorBackGradBottom]} 
        start={{x:0, y:0}} 
        end={{x:1,y:1}}
        style={styles.app}
      >
        <StatusBar style="light" />
        <Text>buzr</Text>
      </LinearGradient>
    );
}
