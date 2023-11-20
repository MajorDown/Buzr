import React from "react";
import { View, Text, StyleProp, ViewStyle } from "react-native";
import styles from "../styles/styles";

type ConfigScreenProps = {
  style?: StyleProp<ViewStyle>;
}

const ConfigScreen = (props: ConfigScreenProps) => {
  return (
    <View style={[styles.screen, props.style]}>
      <Text style={styles.text}>ConfigScreen</Text>
    </View>
  );
};

export default ConfigScreen;