import {View, Pressable, ImageBackground, Image} from "react-native";
import styles from "../styles/styles";
import { useScreenContext } from "../contexts/ScreenContext";
import { AppScreen, ScreenContextType } from "../types";

const MenuSelector = () => {
    const {screen, updateScreen}:ScreenContextType = useScreenContext();

    const handlePress = () => {
        if (screen === "play") updateScreen("options");
        if (screen === "options") updateScreen("play");
    }

    return (
        <View style={styles.menuSelector}>
            <Pressable style={styles.pad} onPress={() => handlePress()}>
                <ImageBackground 
                    source={(require("../assets/images/pads/pad_white.png"))} 
                    resizeMode="cover" 
                    style= {styles.padContainer}
                >
                    <Image source={require("../assets/images/options.png")} 
                        alt="options" 
                        style={styles.MenuSelectorPadIcon}
                    />
                </ImageBackground>
            </Pressable>
        </View>
    )
}

export default MenuSelector;