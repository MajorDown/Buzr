/**
 * Composant pour créer un arrière-plan en gradient
 *
 * @param {any} children Enfants du composant
 * @param {string[]} colors Couleurs du gradient
 * @returns {React.ReactElement} Le composant
 */

import { LinearGradient } from "expo-linear-gradient";

type BackGradientProps = {
  children: any;
  colors: string[];
}

const BackGradient = (props: BackGradientProps) => {
    return (
      <LinearGradient
        colors={props.colors}
        start={{x:0, y:0}} 
        end={{x:1,y:1}}
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
        }}
      >
        {props.children}
      </LinearGradient>)

}

export default BackGradient;