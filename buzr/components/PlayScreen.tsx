import {View, Text, StyleProp, ViewStyle} from "react-native";
import styles from "../styles/styles";
import Pad from "./Pad";

type PlayScreenProps = {
    style?: StyleProp<ViewStyle>;
}

const PlayScreen = (props: PlayScreenProps) => {
    return (
        <View style={[styles.screen, styles.playScreen, props.style]}>
            <View style={styles.playScreenRow}>
                <Pad name={"kikou"} assignTo="" color={"red"} icon="music" mode="sequence" />
                <Pad name={"lolilol"} assignTo="" color={"blue"} icon="music" mode="sequence"/>
                <Pad name={"mdr"} assignTo="" color={"green"} icon="music" mode="sequence"/>
                <Pad name={"ptdr"} assignTo="" color={"purple"} icon="music" mode="sequence"/>
                <Pad name={"xptdr"} assignTo="" color={"pink"} icon="music" mode="sequence"/>
            </View>
            <View style={styles.playScreenRow}>
                <Pad name={"kikou"} assignTo="" color={"red"} icon="music" mode="sequence"/>
                <Pad name={"lolilol"} assignTo="" color={"blue"} icon="music" mode="sequence"/>
                <Pad name={"mdr"} assignTo="" color={"green"} icon="music" mode="sequence"/>
                <Pad name={"ptdr"} assignTo="" color={"purple"} icon="music" mode="sequence"/>
                <Pad name={"xptdr"} assignTo="" color={"pink"} icon="music" mode="sequence"/>
            </View>
            <View style={styles.playScreenRow}>
                <Pad name={"kikou"} assignTo="" color={"red"} icon="music" mode="sequence"/>
                <Pad name={"lolilol"} assignTo="" color={"blue"} icon="music" mode="sequence"/>
                <Pad name={"mdr"} assignTo="" color={"green"} icon="music" mode="sequence"/>
                <Pad name={"ptdr"} assignTo="" color={"purple"} icon="music" mode="sequence"/>
                <Pad name={"xptdr"} assignTo="" color={"pink"} icon="music" mode="sequence"/>
            </View>
        </View>
    )
}

export default PlayScreen;