import {useState, memo} from "react";
import {View, Pressable, Image} from "react-native";
import styles from "../styles/styles";
import { useScreenContext } from "../contexts/ScreenContext";
import { AppScreenContext } from "../types";
import PadGradient from "./PadGradient";
const playImage = require("../assets/images/play.png");
const optionsImage = require("../assets/images/options.png");


const MenuSelector = () => {
    const {screen, updateScreen}:AppScreenContext = useScreenContext();
    const [isPressed, setIsPressed] = useState<boolean>(false);
    
        const handlePress = () => {
            setIsPressed(true);
            switch (screen) {
                case "play":
                    updateScreen("options");
                    break;
                case "options":
                    updateScreen("play");
                    break;
                case "config":
                    updateScreen("options");
                    break;
            }
            setTimeout(() => setIsPressed(false), 500);
        }

    return (
        <View style={styles.menuSelector}>
            <Pressable style={[styles.pad, {borderColor: isPressed ? "#FFFFFF" : "#8D8D8D"}]} onPress={() => handlePress()}>
                <PadGradient color={"none"}>
                    <Image source={screen != "options" ? optionsImage : playImage} 
                        alt="options" 
                        style={styles.MenuSelectorPadIcon}
                    />
                </PadGradient>
            </Pressable>
        </View>
    )
}

export default memo(MenuSelector);