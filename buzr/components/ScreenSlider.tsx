import { useEffect, useRef, PropsWithChildren } from "react";
import { Animated, Easing } from "react-native";
import styles from "../styles/styles";
import { AppScreen } from "../types";

type ScreenSliderProps = PropsWithChildren<{
  selectedScreen: AppScreen;
}>;

const ScreenSlider = (props: ScreenSliderProps) => {
  const slideAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    let toValue;
    switch (props.selectedScreen) {
      case "play":
        toValue = 0;
        break;
      case "options":
        toValue = 1;
        break;
      case "config":
        toValue = 2;
        break;
      default:
        toValue = 0;
    }

    Animated.timing(slideAnimation, {
      toValue,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  }, [props.selectedScreen]);

  return (
    <Animated.View
      style={[
        styles.screenSlider,{
          left: slideAnimation.interpolate({
            inputRange: [0, 1, 2],
            outputRange: ["0%", "-100%", "-200%"],
          }),
        },
      ]}
    >
      {props.children}
    </Animated.View>
  );
};

export default ScreenSlider;


