import { View, Text, Image } from "react-native";
import { PadProps } from "../types";
import styles from "../styles/styles";

const Pad = (props: PadProps) => {
    const {name, assignTo, color, icon, mode} = props;
    return (<View>
        <Image source={require(`../assets/images/pads/pad_${color}.png`)}/>
        <Text>Pad</Text>
        </View>)
};

export default Pad; 