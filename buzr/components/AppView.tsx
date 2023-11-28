import {View} from "react-native";
import styles from "../styles/styles";
import AppPanel from "./AppPanel";
import AppMenu from "./AppMenu";
import { ScreenProvider } from "../contexts/ScreenContext";
import { ConfigIdProvider } from "../contexts/ConfigIdContext";
import { OpenConfigProvider } from "../contexts/OpenConfigContext";

const AppView = () => {
  return (
    <View style={styles.app}>
      <ScreenProvider>
        <OpenConfigProvider>
          <ConfigIdProvider>
            <AppPanel />
            <AppMenu />
          </ConfigIdProvider>
        </OpenConfigProvider>
      </ScreenProvider>
    </View>
  )
}

export default AppView;