import {View} from "react-native";
import styles from "../styles/styles";
import AppPanel from "./AppPanel";
import AppMenu from "./AppMenu";
import { ScreenProvider } from "../contexts/ScreenContext";

const AppView = () => {
  return (
    <View style={styles.app}>
      <ScreenProvider>
        <AppPanel />
        <AppMenu />
      </ScreenProvider>
    </View>
  )
}

export default AppView;