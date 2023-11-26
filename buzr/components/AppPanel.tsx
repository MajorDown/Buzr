import {useState, useEffect} from "react";
import { View, Text } from 'react-native';
import styles from '../styles/styles';
import PlayScreen from './PlayScreen';
import OptionsScreen from './OptionsScreen';
import ScreenSlider from './ScreenSlider';
import { PadsProvider } from "../contexts/PadsContext";
import { ConfigIdProvider, useConfigContext } from '../contexts/ConfigContext';
import ConfigModal from './ConfigModal';

const AppPanel = () => {
  const {idToConfig, updateIdToConfig} = useConfigContext();
  const [openConfig, setOpenConfig] = useState<boolean>(false);

    // Utiliser useEffect pour surveiller les changements dans le contexte
    useEffect(() => {
      if (idToConfig) {
        // Si le contexte a été modifié, montrer la modal
        setOpenConfig(true);
      }
    }, [idToConfig]);

  return (
    <View style={styles.appPanel}>
      <ConfigIdProvider>
        <PadsProvider>
          <ScreenSlider>
            <PlayScreen />
            <OptionsScreen />
          </ScreenSlider>
            {openConfig && <ConfigModal>
            <Text style={styles.configModal}>kikou</Text>
          </ConfigModal>}
        </PadsProvider>
      </ConfigIdProvider>
    </View>
  );
};

export default AppPanel;
