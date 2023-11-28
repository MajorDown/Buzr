import { useState, useEffect} from "react";
import {Image, View, Pressable} from "react-native";
import { PadIcon } from "../types";
import styles from "../styles/styles";

type IconSelectorProps = {
    initialIcon: PadIcon;
    onIconChange: (icon: PadIcon) => void
}

const IconSelector = (props: IconSelectorProps) => {
    const [selectedIcon, setSelectedIcon] = useState<PadIcon>(props.initialIcon);

    useEffect(() => {
        props.onIconChange(selectedIcon);
    }, [selectedIcon])

    return (
        <View style={styles.configIconSelector}>
            <Pressable 
              style={[styles.configIconSelectorPressable, {borderColor: selectedIcon === "none" ? "black" : "#cccccc"}]}
              onPress={() => setSelectedIcon("none")}
            >
                <Image 
                  style={styles.configIconSelectorImage} 
                  source={require("../assets/images/padIcons/none.png")}/>
            </Pressable>
            <Pressable
              style={[styles.configIconSelectorPressable, {borderColor: selectedIcon === "music" ? "black" : "#cccccc"}]}
              onPress={() => setSelectedIcon("music")}
            >
                <Image 
                  style={styles.configIconSelectorImage}
                  source={require("../assets/images/padIcons/music.png")}/>
            </Pressable>
            <Pressable
              style={[styles.configIconSelectorPressable, {borderColor: selectedIcon === "perc" ? "black" : "#cccccc"}]}
              onPress={() => setSelectedIcon("perc")}
            >
                <Image 
                  style={styles.configIconSelectorImage}
                  source={require("../assets/images/padIcons/perc.png")}/>
            </Pressable>
            <Pressable
              style={[styles.configIconSelectorPressable, {borderColor: selectedIcon === "synth" ? "black" : "#cccccc"}]}
              onPress={() => setSelectedIcon("synth")}
            >
                <Image 
                  style={styles.configIconSelectorImage}
                  source={require("../assets/images/padIcons/synth.png")}/>
            </Pressable>
            <Pressable
              style={[styles.configIconSelectorPressable, {borderColor: selectedIcon === "instrument" ? "black" : "#cccccc"}]}
              onPress={() => setSelectedIcon("instrument")}
            >
                <Image 
                  style={styles.configIconSelectorImage}
                  source={require("../assets/images/padIcons/instrument.png")}/>
            </Pressable>
            <Pressable
              style={[styles.configIconSelectorPressable, {borderColor: selectedIcon === "vocal" ? "black" : "#cccccc"}]}
              onPress={() => setSelectedIcon("vocal")}
            >
                <Image 
                  style={styles.configIconSelectorImage}
                  source={require("../assets/images/padIcons/vocal.png")}/>
            </Pressable>
        </View>
    )
}

export default IconSelector;