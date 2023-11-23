import { useState, useEffect} from "react";
import { Pressable, Image, Text } from "react-native";
import { PadProps } from "../types";
import styles from "../styles/styles";
import iconFinder from "../tools/iconFinder";
import PadGradient from "./PadGradient";
import Icon from "./Icon";

const Pad = (props: PadProps) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [borderColor, setBorderColor] = useState<string>("#8D8D8D");
    const icon = iconFinder(props.icon);

    useEffect(() => {
      switch (props.color) {
        case "pink" :
          setBorderColor("#874569");
          break;
        case "red" :
          setBorderColor("#874545");
          break;
        case "orange" :
          setBorderColor("#875D45");
          break;
        case "yellow" :
          setBorderColor("#868745");
          break;
        case "green" :
          setBorderColor("#45874C");
          break;
        case "turkish" :
          setBorderColor("#458783");
          break;
        case "blue" :
          setBorderColor("#455F87");
          break;
        case "purple" :
          setBorderColor("#7E4587");
          break;
        case "none" :
          setBorderColor("#8D8D8D");
          break;
      }
    }, [props.color])

    const handlePress = () => {
      if (isActive === false) {
        setIsActive(true);
        setTimeout(() => setIsActive(false), 500);
      } else if (isActive === true) {
        setIsActive(false);
      }
    }

    return (
      <Pressable style={[styles.pad, {borderColor: isActive ? "#FFFFFF" : borderColor}]} onPress={() => handlePress()}>
        <PadGradient color={props.color}>
          {props.icon != "none" && <Icon icon={props.icon} size={32}/>}
          <Text style={styles.padText}>{props.name}</Text>
        </PadGradient>        
      </Pressable>
    )
};

export default Pad;