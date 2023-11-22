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
                <Pad id={1} name={"kikou"} assignTo="" color={"red"} icon="music" mode="sequence" />
                <Pad id={2} name={"lolilol"} assignTo="" color={"blue"} icon="music" mode="sequence"/>
                <Pad id={3} name={"mdr"} assignTo="" color={"green"} icon="music" mode="sequence"/>
                <Pad id={4} name={"ptdr"} assignTo="" color={"purple"} icon="music" mode="sequence"/>
                <Pad id={5} name={"xptdr"} assignTo="" color={"pink"} icon="music" mode="sequence"/>
            </View>
            <View style={styles.playScreenRow}>
                <Pad id={6} name={"kikou"} assignTo="" color={"red"} icon="music" mode="sequence"/>
                <Pad id={7} name={"lolilol"} assignTo="" color={"blue"} icon="music" mode="sequence"/>
                <Pad id={8} name={"mdr"} assignTo="" color={"green"} icon="music" mode="sequence"/>
                <Pad id={9} name={"ptdr"} assignTo="" color={"purple"} icon="music" mode="sequence"/>
                <Pad id={10} name={"xptdr"} assignTo="" color={"pink"} icon="music" mode="sequence"/>
            </View>
            <View style={styles.playScreenRow}>
                <Pad id={11} name={"kikou"} assignTo="" color={"red"} icon="music" mode="sequence"/>
                <Pad id={12} name={"lolilol"} assignTo="" color={"blue"} icon="music" mode="sequence"/>
                <Pad id={13} name={"mdr"} assignTo="" color={"green"} icon="music" mode="sequence"/>
                <Pad id={14} name={"ptdr"} assignTo="" color={"purple"} icon="music" mode="sequence"/>
                <Pad id={15} name={"xptdr"} assignTo="" color={"pink"} icon="music" mode="sequence"/>
            </View>
        </View>
    )
}

export default PlayScreen;