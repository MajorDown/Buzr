import {View, Text, StyleProp, ViewStyle} from "react-native";
import styles from "../styles/styles";
import Pad from "./Pad";

type PlayScreenProps = {
    style?: StyleProp<ViewStyle>;
}

const PlayScreen = (props: PlayScreenProps) => {
    return (
        <View style={[styles.screen, styles.playScreen, props.style]}>
          <Pad name={"kikou"} assignTo="" color={"red"} icon="music" mode="sequence"/>
          <Pad name={"lolilol"} assignTo="" color={"blue"} icon="music" mode="sequence"/>
          <Pad name={"mdr"} assignTo="" color={"green"} icon="music" mode="sequence"/>
          <Pad name={"ptdr"} assignTo="" color={"purple"} icon="music" mode="sequence"/>
          <Pad name={"xptdr"} assignTo="" color={"pink"} icon="music" mode="sequence"/>
          <Pad name={"tkt"} assignTo="" color={"blue"} icon="music" mode="sequence"/>
          <Pad name={"xd"} assignTo="" color={"green"} icon="music" mode="sequence"/>
          <Pad name={"tg"} assignTo="" color={"pink"} icon="music" mode="sequence"/>
          <Pad name={"tmtc"} assignTo="" color={"red"} icon="music" mode="sequence"/>
          <Pad name={"kikou"} assignTo="" color={"none"} icon="music" mode="sequence"/>
          <Pad name={"kikou"} assignTo="" color={"none"} icon="music" mode="sequence"/>
          <Pad name={"kikou"} assignTo="" color={"none"} icon="music" mode="sequence"/>
          <Pad name={"kikou"} assignTo="" color={"none"} icon="music" mode="sequence"/>
          <Pad name={"kikou"} assignTo="" color={"none"} icon="music" mode="sequence"/>
          <Pad name={"kikou"} assignTo="" color={"none"} icon="music" mode="sequence"/>
        </View>
    )
}

export default PlayScreen;