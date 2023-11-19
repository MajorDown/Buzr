import {Text, View} from "react-native";
import styles from "../styles/styles";
import Logo from "./Logo";
import MenuTitle from "./MenuTitle";

const AppMenu = () => {
    return (
      <View style={styles.appMenu}>
        <Logo />
        <MenuTitle />
      </View>
    )
}

export default AppMenu;