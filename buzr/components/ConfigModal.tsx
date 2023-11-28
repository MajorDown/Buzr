import {useState, PropsWithChildren} from "react";
import {Modal, View, Pressable, Text} from "react-native";
import { useConfigIdContext } from "../contexts/ConfigIdContext";
import { useOpenConfigContext } from "../contexts/OpenConfigContext";
import styles from "../styles/styles";

const ConfigModal = (props : PropsWithChildren) => {
    const {idToConfig, updateIdToConfig} = useConfigIdContext();
    const {openConfig, updateOpenConfig} = useOpenConfigContext();
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const hideModal = () => {
        setIsOpen(false)
        updateOpenConfig(false);        
    }

    return (
        <Modal
          transparent={true}
          visible={isOpen}
          onRequestClose={hideModal}
        >
            <View style={styles.configModal}>
                <View style={styles.configModalHeader}>
                    <Text style={styles.configModalTitle}>Configuration du Pad {idToConfig}</Text>
                    <Pressable
                      style={styles.configModalClose}
                      onPress={() => hideModal()}
                      >
                        <Text style={{color: "black"}}>X</Text>
                    </Pressable>
                </View>
                <View style={{width: "100%", height: "90%"}}>
                    {props.children}
                </View>
            </View>
        </Modal>
    )

}

export default ConfigModal;