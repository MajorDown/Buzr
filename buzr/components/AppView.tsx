import {View} from "react-native";
import styles from "../styles/styles";
import AppPanel from "./AppPanel";
import AppMenu from "./AppMenu";

const AppView = () => {
  return (
    <View style={styles.app}>
      <AppPanel />
      <AppMenu />
    </View>
  )
}

export default AppView;