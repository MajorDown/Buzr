import {memo} from "react";
import {View, StyleProp, ViewStyle} from "react-native";
import styles from "../styles/styles";
import PadOptions from "./PadOptions";
import {PadId} from "../types";

type OptionsScreenProps = {
    style?: StyleProp<ViewStyle>;
}

const OptionsScreen = (props: OptionsScreenProps) => {

    const goToConfig = (id: PadId) => {
        console.log(id);
    }

    return (
        <View style={[styles.screen, styles.optionsScreen, props.style]}>
            <View style={styles.optionsScreenRow}>
                <PadOptions id={1} name={"kikou"} assignTo={"folder/slide"} color={"blue"} icon={"instrument"} mode={"loop"} onPress={() => goToConfig(1)}/>
                <PadOptions id={2} name={"kikou"} assignTo={"folder/slide"} color={"blue"} icon={"instrument"} mode={"loop"} onPress={() => goToConfig(2)}/>
                <PadOptions id={3} name={"kikou"} assignTo={"folder/slide"} color={"blue"} icon={"instrument"} mode={"loop"} onPress={() => goToConfig(3)}/>
                <PadOptions id={4} name={"kikou"} assignTo={"folder/slide"} color={"blue"} icon={"instrument"} mode={"loop"} onPress={() => goToConfig(4)}/>
                <PadOptions id={5} name={"kikou"} assignTo={"folder/slide"} color={"blue"} icon={"instrument"} mode={"loop"} onPress={() => goToConfig(5)}/>
            </View>
            <View style={styles.optionsScreenRow}>
                <PadOptions id={6} name={"kikou"} assignTo={"folder/slide"} color={"blue"} icon={"instrument"} mode={"loop"} onPress={() => goToConfig(6)}/>
                <PadOptions id={7} name={"kikou"} assignTo={"folder/slide"} color={"blue"} icon={"instrument"} mode={"loop"} onPress={() => goToConfig(7)}/>
                <PadOptions id={8} name={"kikou"} assignTo={"folder/slide"} color={"blue"} icon={"instrument"} mode={"loop"} onPress={() => goToConfig(8)}/>
                <PadOptions id={9} name={"kikou"} assignTo={"folder/slide"} color={"blue"} icon={"instrument"} mode={"loop"} onPress={() => goToConfig(9)}/>
                <PadOptions id={10} name={"kikou"} assignTo={"folder/slide"} color={"blue"} icon={"instrument"} mode={"loop"} onPress={() => goToConfig(10)}/>
            </View>
            <View style={styles.optionsScreenRow}>
                <PadOptions id={11} name={"kikou"} assignTo={"folder/slide"} color={"blue"} icon={"instrument"} mode={"loop"} onPress={() => goToConfig(11)}/>
                <PadOptions id={12} name={"kikou"} assignTo={"folder/slide"} color={"blue"} icon={"instrument"} mode={"loop"} onPress={() => goToConfig(12)}/>
                <PadOptions id={13} name={"kikou"} assignTo={"folder/slide"} color={"blue"} icon={"instrument"} mode={"loop"} onPress={() => goToConfig(13)}/>
                <PadOptions id={14} name={"kikou"} assignTo={"folder/slide"} color={"blue"} icon={"instrument"} mode={"loop"} onPress={() => goToConfig(14)}/>
                <PadOptions id={15} name={"kikou"} assignTo={"folder/slide"} color={"blue"} icon={"instrument"} mode={"loop"} onPress={() => goToConfig(15)}/>
            </View>
        </View>
    )
}

export default memo(OptionsScreen);