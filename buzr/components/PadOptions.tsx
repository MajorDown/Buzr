import {useState} from "react";
import { Pressable, Image, ImageBackground, Text } from "react-native";
import styles from "../styles/styles";
import { PadProps, PadId } from "../types";
import padFinder from "../tools/padFinder";
import iconFinder from "../tools/iconFinder";

type PadOptionsProps = PadProps & {
    onPress: (id: PadId) => void;
};

const PadOptions = (props: PadOptionsProps) => {
    const [isPressed, setIsPressed] = useState<boolean>(false);

    const handlePress = (id: PadId) => {
        setIsPressed(true);
        props.onPress(id);
        setTimeout(() => setIsPressed(false), 500);
    }

    return (
        <Pressable style={isPressed ? styles.optionsPadIsPressed : styles.optionsPad} onPress={() => handlePress(1)}>
            <ImageBackground
              source={padFinder(props.color, false)} 
              alt="color"                   
              style={{width: 30, height: 30, justifyContent: "center", alignItems: "center"}}
            >
                <Image
                  source={iconFinder(props.icon)} 
                  alt="icon" 
                  style={{width: 20, height: 20}}
                />
            </ImageBackground>
            <Text style={styles.optionsPadText}>{props.name}</Text>
            <Text style={[styles.optionsPadText, {fontSize: 10}]}>{props.assignTo}</Text>
            <Text style={[styles.optionsPadText, {fontSize: 10}]}>mode {props.mode}</Text>
        </Pressable>
    )
}

export default PadOptions;