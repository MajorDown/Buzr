import {View, Text, StyleProp, ViewStyle} from "react-native";
import styles from "../styles/styles";

type PlayScreenProps = {
    style?: StyleProp<ViewStyle>;
}

const PlayScreen = (props: PlayScreenProps) => {
    return (
        <View style={[styles.screen, props.style]}>
          <Text style={styles.text}>Playcreen</Text>
        </View>
    )
}

export default PlayScreen;