import {useState, memo} from "react";
import { Pressable, Image, Text } from "react-native";
import styles from "../styles/styles";
import { PadProps, PadId } from "../types";
import iconFinder from "../tools/iconFinder";
import PadGradient from "./PadGradient";

type OptionsPadProps = {
    data: PadProps;
    onPress: (id: PadId) => void
};

const OptionsPad = (props: OptionsPadProps) => {
    const [isPressed, setIsPressed] = useState<boolean>(false);
    const padIcon = iconFinder(props.data.icon);

    const handlePress = () => {
        setIsPressed(true);
        props.onPress(props.data.id);
        setTimeout(() => setIsPressed(false), 500);
    }

    return (
        <Pressable 
            style={isPressed ? 
                [styles.pad, {borderColor: 'white'}] : 
                [styles.pad, {borderColor: props.data.color === "none" ? "grey" : props.data.color}]} 
            onPress={() => handlePress()}>
            <PadGradient color={props.data.color}>
                <Image
                  source={padIcon} 
                  alt="icon" 
                  style={{width: 20, height: 20}}
                />
                <Text style={{color: props.data.color === "none" ? "black" : "white"}}>{props.data.name}</Text>
                <Text style={{color: props.data.color === "none" ? "black" : "white", fontSize: 10}}>{props.data.mode} : </Text>
                <Text style={{color: props.data.color === "none" ? "black" : "white", fontSize: 8}}>{props.data.assignTo}</Text>
            </PadGradient>
        </Pressable>
    )
}

export default memo(OptionsPad);