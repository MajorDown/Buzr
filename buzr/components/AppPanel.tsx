import {Text} from "react-native";
import { AppPanelProps } from "../types";
import styles from "../styles/styles";

const AppPanel = (props:AppPanelProps) => {
    switch (props.mode) {
        case "play":
          return <Text style={styles.text}>play</Text>;
        case "option":
          return <Text style={styles.text}>option</Text>;
        case "config":
          return <Text style={styles.text}>config</Text>
        default:
          return <Text style={styles.text}>err</Text>;
      }
}

export default AppPanel;