import {useState} from "react";
import {View, Text, TextInput, Pressable} from "react-native";
import {Dropdown} from "react-native-element-dropdown";
import styles from "../styles/styles";
import IconSelector from "./IconSelector";
import AudioSelector from "./AudioSelector";
import {PadName, PadAssignment, PadColor, PadIcon, PadMode, Pads} from "../types";
import { usePadsContext } from "../contexts/PadsContext";
import { useConfigIdContext } from "../contexts/ConfigIdContext";
import { useOpenConfigContext } from "../contexts/OpenConfigContext";
import StorageManager from "../tools/storageManager";

type ColorDropdown = {label: PadColor, value: PadColor}

type ModeDropsDown = {label: PadMode, value: PadMode}

const ConfigPanel = () => {
    const {openConfig, updateOpenConfig} = useOpenConfigContext();
    const {pads, updatePads} = usePadsContext();
    const {idToConfig, updateIdToConfig} = useConfigIdContext();
    const selectedPad = pads[`pad${idToConfig}`];

    const [panelName, setPanelName] = useState<PadName>(selectedPad?.name || "");
    const [panelColor, setPanelColor] = useState<PadColor>(selectedPad?.color || "none");
    const [panelIcon, setPanelIcon] = useState<PadIcon>(selectedPad?.icon || "none");
    const [panelMode, setPanelMode] = useState<PadMode>(selectedPad?.mode || "loop");
    const [panelAssignment, setPanelAssignment] = useState<PadAssignment>(
        selectedPad?.assignTo || { name: "", uri: "" }
    );

    const colors : ColorDropdown[] = [
        {label: "none", value: "none"},
        {label: "red", value: "red"},
        {label: "orange", value: "orange"},
        {label: "yellow", value: "yellow"},
        {label: "green", value: "green"},
        {label: "turquoise", value: "turquoise"},
        {label: "blue", value: "blue"},
        {label: "purple", value: "purple"},
        {label: "pink", value: "pink"},
    ];

    const modes : ModeDropsDown[] = [
        {label: "sequence", value: "sequence"},
        {label: "loop", value: "loop"}
    ]

    const SaveConfig = () => {
        let newPads : Pads = pads ;
        newPads[`pad${idToConfig}`] = {
            "id": idToConfig,
            "name": panelName,
            "color": panelColor,
            "icon": panelIcon,
            "assignTo": panelAssignment,
            "mode": panelMode
        }
        StorageManager.save("buzr_pads", newPads)
        .then(result => {
            if (result.status === 'success') console.log("Données sauvegardées avec succès");
            else console.error("Erreur lors de la sauvegarde des données");
        })
        .catch(error => {
            console.error("Une erreur inattendue s'est produite :", error);
        });
        updatePads(newPads);
        updateOpenConfig(false);
    
    }

    return (
        <View style={styles.configPanel}>
            <View style={styles.configPanelRow}>
                <Text>nom :</Text>
                <TextInput 
                  style={styles.configTextInput}
                  onChangeText={setPanelName}
                  value={panelName}
                  maxLength={15}
                />
            </View>
            <View style={styles.configPanelRow}>
                <Text>couleur :</Text>
                <Dropdown
                  style={[styles.configDropdown, {backgroundColor: panelColor === "none" ? "white" : panelColor}]}
                  placeholder="Select color"
                  data={colors}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  value={panelColor}
                  onChange={item => setPanelColor(item.value)}
                />
            </View>
            <View style={styles.configPanelRow}>
                <Text>icône :</Text>
                <IconSelector initialIcon={pads[`pad${idToConfig}`].icon} onIconChange={setPanelIcon}/>
            </View>
            <View style={styles.configPanelRow}>
                <Text>mode :</Text>
                <Dropdown
                  style={[styles.configDropdown]}
                  placeholder="Select mode"
                  data={modes}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  value={panelMode}
                  onChange={item => setPanelMode(item.value)}
                />
            </View>
            <View style={styles.configPanelRow}>
                <Text>assigné à :</Text>
                <Text>{panelAssignment.name}</Text>
                <AudioSelector selectedFile={(data) => setPanelAssignment(data)}/>
            </View>
            <Pressable style={styles.configValidation} onPress={() => SaveConfig()}>
                <Text>Valider la configuration</Text>
            </Pressable>
        </View>
    )
}

export default ConfigPanel;