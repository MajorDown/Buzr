import { useState, useEffect, memo} from "react";
import { Pressable, Text } from "react-native";
import { PadProps } from "../types";
import styles from "../styles/styles";
import PadGradient from "./PadGradient";
import Icon from "./Icon";
import { Audio } from 'expo-av';

type PadData = { data: PadProps}

const Pad = (props: PadData) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [borderColor, setBorderColor] = useState<string>("#8D8D8D");
    const [sound, setSound] = useState<Audio.Sound | undefined>();

    useEffect(() => {
      async function loadSound() {
        if (props.data.assignTo && props.data.assignTo.uri) {
          const {sound} = await Audio.Sound.createAsync({uri: props.data.assignTo.uri}, {
            shouldPlay: false, 
            isLooping:(props.data.mode === "loop" ? true : false)
          });
          setSound(sound);
        } else {
          setSound(undefined);
        }
      } 
      loadSound();    
    }, [props.data])

    useEffect(() => {
      switch (props.data.color) {
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
        case "turquoise" :
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
    }, [props.data.color])

    const handlePress = async () => {
      if (isActive === false) {
        setIsActive(true);
        // playSound();
        if (sound) await sound.playAsync();
      } else if (isActive === true) {
        // stopSound();
        if (sound) await sound.stopAsync();
        setIsActive(false);
      }
    }

    return (
      <Pressable style={[styles.pad, {borderColor: isActive ? "white" : borderColor}]} onPress={() => handlePress()}>
        <PadGradient color={props.data.color}>
          {props.data.icon != "none" && <Icon icon={props.data.icon} size={32}/>}
          <Text style={{color: props.data.color === "none" ? "black" : "white"}}>{props.data.name}</Text>
        </PadGradient>        
      </Pressable>
    )
};

export default memo(Pad);