import {useState, useEffect, PropsWithChildren} from "react";
import {View, DimensionValue} from "react-native";
import styles from "../styles/styles";
import { AppScreen } from "../types";

type ScreenSliderProps = PropsWithChildren<{
  selectedScreen: AppScreen
}>

const ScreenSlider = (props: ScreenSliderProps) => {
    const [slide, setSlide] = useState<DimensionValue>();

    useEffect(() => {
        switch (props.selectedScreen) {
            case "play":
              setSlide("0%");
              break;
            case "options":
              setSlide("-100%");
              break;
            case "config":
              setSlide("-200%");
              break;
            default:
              setSlide("0%");
        }
    }, [props.selectedScreen])

    return (
        <View style={[styles.screenSlider, {left: slide}]}>
            {props.children}
        </View>
    )
}

export default ScreenSlider;
