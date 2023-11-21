import {useState, useEffect} from "react";
import {View, Pressable, ImageBackground, Image} from "react-native";
import styles from "../styles/styles";
import { useScreenContext } from "../contexts/ScreenContext";
import { AppScreenContext } from "../types";
import padFinder from "../tools/padFinder";
const playImage = require("../assets/images/play.png");
const optionsImage = require("../assets/images/options.png");


const MenuSelector = () => {
    const {screen, updateScreen}:AppScreenContext = useScreenContext();
    const [isPressed, setIsPressed] = useState<boolean>(false);
    const [buttonIcon, setButtonIcon] = useState<HTMLImageElement>(optionsImage);
    const notActivePad = padFinder("none", false);
    const activePad = padFinder("none", true);


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
        setIsPressed(true);
        if (screen === "play") updateScreen("options");
        if (screen === "options") updateScreen("play");
        setTimeout(() => setIsPressed(false), 500)
    }

    return (
        <View style={styles.menuSelector}>
            <Pressable style={styles.pad} onPress={() => handlePress()}>
                <ImageBackground 
                    source={isPressed ? activePad : notActivePad} 
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