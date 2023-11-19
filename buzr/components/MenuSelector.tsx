import {View, Pressable, ImageBackground, Text, Image} from "react-native";
import styles from "../styles/styles";

const MenuSelector = () => {
    return (
        <View style={styles.menuSelector}>
            <Pressable style={styles.pad} onPress={() => console.log("click !")}>
                <ImageBackground source={(require("../assets/images/pads/pad_white.png"))} resizeMode="cover" style= {styles.padContainer}>
                    <View style={styles.padContent}>
                        <Image source={require("../assets/images/options.png")} alt="options"/>
                    </View>
                </ImageBackground>
            </Pressable>
        </View>
    )
}

export default MenuSelector;