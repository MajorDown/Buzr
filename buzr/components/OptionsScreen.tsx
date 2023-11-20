import {Text, View, StyleProp, ViewStyle} from "react-native";
import styles from "../styles/styles";

type OptionsScreenProps = {
    style?: StyleProp<ViewStyle>;
}

const OptionsScreen = (props: OptionsScreenProps) => {
    return (
        <View style={[styles.screen, props.style]}>
          <Text style={styles.text}>OptionsScreen</Text>
        </View>
    )
}

export default OptionsScreen;