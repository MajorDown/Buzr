import { View } from 'react-native';
import styles from '../styles/styles';
import PlayScreen from './PlayScreen';
import OptionsScreen from './OptionsScreen';
import ConfigScreen from './ConfigScreen';
import { useScreenContext } from "../contexts/ScreenContext";
import { AppScreenContext, AppScreen } from "../types";
import ScreenSlider from './ScreenSlider';
import ScreenManager from './ScreenManager';

const AppPanel = () => {
  const { screen , updateScreen} : AppScreenContext = useScreenContext();
  
  return (
    <View style={styles.appPanel}>
      <ScreenSlider selectedScreen={screen}>
        <PlayScreen />
        <OptionsScreen />
        <ConfigScreen />
      </ScreenSlider>
    </View>
  );
};

export default AppPanel;
