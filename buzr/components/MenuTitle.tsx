import {View, Text} from "react-native";
import styles from "../styles/styles";
import { useScreenContext } from "../contexts/ScreenContext";
import { useEffect, useState } from "react";
import { ScreenContextType } from "../types";

const MenuTitle = () => {
    const {screen, updateScreen}:ScreenContextType = useScreenContext();
    const [title, setTitle] = useState<string>("Let's play!");

    useEffect(() => {
        switch (screen) {
          case "play":
            setTitle("Let's play!");
            break;
          case "options":
            setTitle(screen);
            break;
          case "config":
            setTitle(screen);
            break;
          default:
            setTitle("Let's play!");
        }
      }, [screen]);

    return (
        <View style={styles.MenuTitle}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

export default MenuTitle;