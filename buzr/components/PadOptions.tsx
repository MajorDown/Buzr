import {useState} from "react";
import { Pressable, Image, Text } from "react-native";
import styles from "../styles/styles";
import { PadProps, PadId } from "../types";
import iconFinder from "../tools/iconFinder";
import PadGradient from "./PadGradient";

type PadOptionsProps = PadProps & {
    onPress: (id: PadId) => void;
};

const PadOptions = (props: PadOptionsProps) => {
    const [isPressed, setIsPressed] = useState<boolean>(false);
    const padIcon = iconFinder(props.icon)

    const handlePress = (id: PadId) => {
        setIsPressed(true);
        props.onPress(id);
        setTimeout(() => setIsPressed(false), 500);
    }

    return (
        <Pressable style={isPressed ? styles.optionsPadIsPressed : styles.optionsPad} onPress={() => handlePress(1)}>
            <PadGradient color={props.color}>
                <Image
                  source={padIcon} 
                  alt="icon" 
                  style={{width: 20, height: 20}}
                />
            </PadGradient>
            <Text style={styles.optionsPadText}>{props.name}</Text>
            <Text style={[styles.optionsPadText, {fontSize: 10}]}>{props.assignTo}</Text>
            <Text style={[styles.optionsPadText, {fontSize: 10}]}>mode {props.mode}</Text>
        </Pressable>
    )
}

export default PadOptions;