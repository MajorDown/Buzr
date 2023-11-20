import {useState, useEffect} from "react";
import {View, Pressable, ImageBackground, Image} from "react-native";
import styles from "../styles/styles";
import { useScreenContext } from "../contexts/ScreenContext";
import { AppScreenContext, AppScreen } from "../types";
const playImage = require("../assets/images/play.png");
const optionsImage = require("../assets/images/options.png");


const MenuSelector = () => {
    const {screen, updateScreen}:AppScreenContext = useScreenContext();
    const [buttonIcon, setButtonIcon] = useState<HTMLImageElement>(optionsImage);

    useEffect(() => {
        switch (screen) {
            case "play":
              setButtonIcon(optionsImage);
              break;
            case "options":
                setButtonIcon(playImage);
              break;
            case "config":
                setButtonIcon(optionsImage);
              break;
            default:
                setButtonIcon(optionsImage);
          }
    }, [screen])

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
                    style= {styles.padBackground}
                >
                    <Image source={buttonIcon} 
                        alt="options" 
                        style={styles.MenuSelectorPadIcon}
                    />
                </ImageBackground>
            </Pressable>
        </View>
    )
}

export default MenuSelector;