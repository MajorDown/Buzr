import {useEffect, memo} from "react";
import {View, StyleProp, ViewStyle} from "react-native";
import styles from "../styles/styles";
import Pad from "./Pad";
import { usePadsContext } from "../contexts/PadsContext";

type PlayScreenProps = {
    style?: StyleProp<ViewStyle>;
}

const PlayScreen = (props: PlayScreenProps) => {
    const {pads, updatePads} = usePadsContext();    

    return (
        <View style={[styles.screen, styles.playScreen, props.style]}>
            <View style={styles.playScreenRow}>
                <Pad data={pads.pad1} />
                <Pad data={pads.pad2} />
                <Pad data={pads.pad3} />
                <Pad data={pads.pad4} />
                <Pad data={pads.pad5} />
            </View>
            <View style={styles.playScreenRow}>
                <Pad data={pads.pad6} />
                <Pad data={pads.pad7} />
                <Pad data={pads.pad8} />
                <Pad data={pads.pad9} />
                <Pad data={pads.pad10} />
            </View>
            <View style={styles.playScreenRow}>
                <Pad data={pads.pad11} />
                <Pad data={pads.pad12} />
                <Pad data={pads.pad13} />
                <Pad data={pads.pad14} />
                <Pad data={pads.pad15} />
            </View>
        </View>
    )
}

export default PlayScreen;