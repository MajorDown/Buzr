import {Text, View} from "react-native";
import { AppPanelProps } from "../types";
import styles from "../styles/styles";

const AppPanel = () => {
  return (
  <View style={styles.appPanel}>
    <Text style={styles.text}>AppPanel</Text>
  </View>
  )
}

export default AppPanel;