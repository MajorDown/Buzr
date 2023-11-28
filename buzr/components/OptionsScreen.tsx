import {memo} from "react";
import {View, StyleProp, ViewStyle} from "react-native";
import styles from "../styles/styles";
import OptionsPad from "./OptionsPad";
import { PadId } from "../types";
import { usePadsContext } from "../contexts/PadsContext";
import { useConfigIdContext } from "../contexts/ConfigIdContext";
import { useOpenConfigContext } from "../contexts/OpenConfigContext";

type OptionsScreenProps = {
    style?: StyleProp<ViewStyle>;
}

const OptionsScreen = (props: OptionsScreenProps) => {
    const {idToConfig, updateIdToConfig} = useConfigIdContext();
    const {openConfig, updateOpenConfig} = useOpenConfigContext();
    const {pads, updatePads} = usePadsContext();

    const goToConfig = (id: PadId) => {
        updateIdToConfig(id);
        updateOpenConfig(true);
    };

    return (
        <View style={[styles.screen, styles.optionsScreen, props.style]}>
            <View style={styles.optionsScreenRow}>
                <OptionsPad data={pads.pad1} onPress={() => goToConfig(pads.pad1.id)} />
                <OptionsPad data={pads.pad2} onPress={() => goToConfig(pads.pad2.id)} />
                <OptionsPad data={pads.pad3} onPress={() => goToConfig(pads.pad3.id)} />
                <OptionsPad data={pads.pad4} onPress={() => goToConfig(pads.pad4.id)} />
                <OptionsPad data={pads.pad5} onPress={() => goToConfig(pads.pad5.id)} />
            </View>
            <View style={styles.optionsScreenRow}>
                <OptionsPad data={pads.pad6} onPress={() => goToConfig(pads.pad6.id)} />
                <OptionsPad data={pads.pad7} onPress={() => goToConfig(pads.pad7.id)} />
                <OptionsPad data={pads.pad8} onPress={() => goToConfig(pads.pad8.id)} />
                <OptionsPad data={pads.pad9} onPress={() => goToConfig(pads.pad9.id)} />
                <OptionsPad data={pads.pad10} onPress={() => goToConfig(pads.pad10.id)} />
            </View>
            <View style={styles.optionsScreenRow}>
                <OptionsPad data={pads.pad11} onPress={() => goToConfig(pads.pad11.id)} />
                <OptionsPad data={pads.pad12} onPress={() => goToConfig(pads.pad12.id)} />
                <OptionsPad data={pads.pad13} onPress={() => goToConfig(pads.pad13.id)} />
                <OptionsPad data={pads.pad14} onPress={() => goToConfig(pads.pad14.id)} />
                <OptionsPad data={pads.pad15} onPress={() => goToConfig(pads.pad15.id)} />
            </View>
        </View>
    )
}

export default memo(OptionsScreen);