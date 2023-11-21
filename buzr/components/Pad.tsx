import { useState, useEffect } from "react";
import { Pressable, ImageBackground, Image, Text } from "react-native";
import { PadProps } from "../types";
import styles from "../styles/styles";
import padFinder from "../tools/padFinder";
import iconFinder from "../tools/iconFinder";

const Pad = (props: PadProps) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const notActivePad = padFinder(props.color, false);
    const activePad = padFinder(props.color, true);
    const icon = iconFinder(props.icon);

    const handlePress = () => {
      if (isActive === false) {
        setIsActive(true);
        setTimeout(() => setIsActive(false), 500);
      } else if (isActive === true) {
        setIsActive(false);
      }
    }

    return (
      <Pressable style={styles.pad} onPress={() => handlePress()}>
        <ImageBackground 
          source={isActive ? activePad : notActivePad} 
          resizeMode="cover" 
          style= {styles.padBackground}
        >
          {props.icon != "none" && <Image 
            source={icon} 
            alt="options" 
            style={styles.padIcon}
          />}
          <Text style={styles.padText}>{props.name}</Text>
        </ImageBackground>        
      </Pressable>
    )
};

export default Pad;