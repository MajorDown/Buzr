import {useState, useEffect} from "react";
import { View, Text } from 'react-native';
import styles from '../styles/styles';
import PlayScreen from './PlayScreen';
import OptionsScreen from './OptionsScreen';
import ScreenSlider from './ScreenSlider';
import { PadsProvider } from "../contexts/PadsContext";
import { useOpenConfigContext } from "../contexts/OpenConfigContext";
import ConfigModal from './ConfigModal';
import { useConfigIdContext } from "../contexts/ConfigIdContext";
import ConfigPanel from "./ConfigPanel";

const AppPanel = () => {
  const {openConfig, updateOpenConfig} = useOpenConfigContext();
  const {idToConfig, updateIdToConfig} = useConfigIdContext();

  return (
    <View style={styles.appPanel}>
        <PadsProvider>
          <ScreenSlider>
            <PlayScreen />
            <OptionsScreen />
          </ScreenSlider>
            {openConfig && <ConfigModal>
              <ConfigPanel />
            </ConfigModal>}
        </PadsProvider>
    </View>
  );
};

export default AppPanel;
