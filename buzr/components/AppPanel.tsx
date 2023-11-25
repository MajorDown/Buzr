import { View } from 'react-native';
import styles from '../styles/styles';
import PlayScreen from './PlayScreen';
import OptionsScreen from './OptionsScreen';
import ConfigScreen from './ConfigScreen';
import ScreenSlider from './ScreenSlider';
import { PadsProvider } from "../contexts/PadsContext";

const AppPanel = () => {

  return (
    <View style={styles.appPanel}>
      <ScreenSlider>
        <PadsProvider>
          <PlayScreen />
          <OptionsScreen />
          <ConfigScreen />
        </PadsProvider>
      </ScreenSlider>
    </View>
  );
};

export default AppPanel;
