import {Pressable, Text} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import styles from "../styles/styles";
import { PadAssignment } from "../types";

interface AudioSelectorProps {
    selectedFile: (data: PadAssignment) => void;
  }

const AudioSelector = (props: AudioSelectorProps) => {

    const selectAudio = async () => {
        try {
            const file = await DocumentPicker.getDocumentAsync({
                type: "audio/*",
                multiple: false
            })
            console.log(file);            
            if (file.assets!= null) {
            const data: PadAssignment = {name: file.assets[0].name, uri: file.assets[0].uri}
            props.selectedFile(data)
            }
        } catch (error) {
            console.log(error)            
        }
    }

    return (
        <Pressable
          style={styles.configAudioSelectorBtn}
          onPress={() => selectAudio()
        }
        >
            <Text>Sélectionnez le fichier audio</Text>
        </Pressable>
    )
}

export default AudioSelector;