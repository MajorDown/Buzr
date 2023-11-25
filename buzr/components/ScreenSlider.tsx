import { useEffect, useRef, PropsWithChildren, memo } from "react";
import { Animated, Easing } from "react-native";
import styles from "../styles/styles";
import { useScreenContext } from "../contexts/ScreenContext";


const ScreenSlider = (props: PropsWithChildren) => {
  const {screen, updateScreen} = useScreenContext();
  const slideAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    let toValue;
    switch (screen) {
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
  }, [screen]);

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

export default memo(ScreenSlider);


