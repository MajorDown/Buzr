import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import styles from "./styles/styles";

export default function App() {

  const [loadedFont, FontError] = useFonts({
    "Orbitron-Bold": require("./assets/fonts/Orbitron-Bold.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
  });
  if (FontError) return <Text>loading...</Text>;
  if (loadedFont)
    return (
      <LinearGradient 
        colors={['#000427', '#002f26']} 
        start={{x:0, y:0}} 
        end={{x:1,y:1}}
      >
        <StatusBar style="light" />
      </LinearGradient>
    );
}
