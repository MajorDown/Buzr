import {View, Pressable, ImageBackground, Text, Image} from "react-native";
import styles from "../styles/styles";

const MenuSelector = () => {
    const handlePress = () => {
        console.log("click !");
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