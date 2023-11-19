import {View} from "react-native";
import styles from "../styles/styles";
import Logo from "./Logo";
import MenuTitle from "./MenuTitle";
import MenuSelector from "./MenuSelector";

const AppMenu = () => {
    return (
      <View style={styles.appMenu}>
        <Logo />
        <MenuTitle />
        <MenuSelector />
      </View>
    )
}

export default AppMenu;