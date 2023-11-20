import {View} from "react-native";
import styles from "../styles/styles";
import AppPanel from "./AppPanel";
import AppMenu from "./AppMenu";

const AppScreen = () => {
  return (
    <View style={styles.appScreen}>
      <AppPanel />
      <AppMenu />
    </View>
  )
}

export default AppScreen;