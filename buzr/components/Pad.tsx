import { useState } from "react";
import { Pressable, ImageBackground, Image, Text } from "react-native";
import { PadProps } from "../types";
import styles from "../styles/styles";
import PadSearcher from "./PadSearcher";

const Pad = (props: PadProps) => {
    const {name, assignTo, color, icon, mode} = props;
    const [isActive, setIsactive] = useState<boolean>(false);

    return (
      <Pressable style={styles.pad}>
        <ImageBackground 
          source={PadSearcher({color, isActive})} 
          resizeMode="cover" 
          style= {styles.padBackground}
        >
          {icon != "none" && <Image source={require(`../assets/images/padIcons/instrument.png`)} 
            alt="options" 
            style={styles.padIcon}
          />}
          <Text style={styles.padText}>{name}</Text>
        </ImageBackground>        
      </Pressable>
    )
};

export default Pad;