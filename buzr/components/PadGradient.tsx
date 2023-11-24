import { LinearGradient } from "expo-linear-gradient";
import {useState, useEffect, memo, PropsWithChildren} from "react";
import { PadColor } from "../types";
import styles from "../styles/styles";

const pinkGradient = ["#FF0099", "#000000"];
const redGradient = ["#FF0000", "#000000"];
const orangeGradient = ["#FF5C00", "#000000"];
const yellowGradient = ["#C0D003", "#000000"];
const greenGradient = ["#21ED00", "#000000"];
const turkishGradient = ["#00EADC", "#000000"];
const blueGradient = ["#0038FF", "#000000"];
const purpleGradient = ["#9E00FF", "#000000"];
const whiteGradient = ["#FFFFFF", "#959595"];

type PadGradientProps = PropsWithChildren<{color: PadColor}>;

const PadGradient = (props: PadGradientProps) => {
    const [gradientColors, setGradientColors] = useState<string[]>(["#FFFFFF", "#959595"])

    useEffect(() => {
        switch (props.color) {
          case "pink" :
            setGradientColors(pinkGradient);
            break;
          case "red" :
            setGradientColors(redGradient);
            break;
          case "orange" :
            setGradientColors(orangeGradient);
            break;
          case "yellow" :
            setGradientColors(yellowGradient);
            break;
          case "green" :
            setGradientColors(greenGradient);
            break;
          case "turkish" :
            setGradientColors(turkishGradient);
            break;
          case "blue" :
            setGradientColors(blueGradient);
            break;
          case "purple" :
            setGradientColors(purpleGradient);
            break;
          case "none" :
            setGradientColors(whiteGradient);
            break;
        }
      }, [props.color])
      
    return (
        <LinearGradient
          colors={gradientColors}
          start={{x:1, y:0}} 
          end={{x:0,y:1}}
          style={styles.padGradient}
        >
            {props.children}
        </LinearGradient>
    )
}

export default memo(PadGradient);