import { PropsWithChildren, useEffect, useState } from "react";
import { View } from "react-native";
import { AppScreen } from "../types";
import styles from "../styles/styles";

type ScreenManagerProps = PropsWithChildren<{
  selectedScreen: AppScreen;
}>;

const ScreenManager = (props: ScreenManagerProps) => {
  const [topValue, setTopValue] = useState<"0%" | "-100%" | "-200%">("0%");

  useEffect(() => {
    switch (props.selectedScreen) {
      case "play":
        setTopValue("0%");
        break;
      case "options":
        setTopValue("-100%");
        break;
      case "config":
        setTopValue("-200%");
        break;
      default:
        setTopValue("0%");
    }
  }, [props.selectedScreen]);

  return (
    <View style={[styles.screenManager, { top: topValue }]}>
      {props.children}
    </View>
  );
};

export default ScreenManager;

