import { Pressable, View } from "react-native";
import { PadProps } from "../types";
import styles from "../styles/styles";

const Pad = (props: PadProps) => {
    const {name, assignTo, color, icon, mode} = props;

    return (
      <View>
        <Pressable></Pressable>
      </View>
    )
};

export default Pad;