import {useState} from "react";
import {View, Text, TextInput} from "react-native";
import {Dropdown} from "react-native-element-dropdown";
import styles from "../styles/styles";
import IconSelector from "./IconSelector";
import AudioSelector from "./AudioSelector";
import {PadName, PadAssignment, PadColor, PadIcon, PadMode} from "../types";
import { usePadsContext } from "../contexts/PadsContext";
import { useConfigIdContext } from "../contexts/ConfigIdContext";

type ColorDropdown = {label: PadColor, value: PadColor}

type ModeDropsDown = {label: PadMode, value: PadMode}

const ConfigPanel = () => {
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
                <IconSelector initialIcon={"none"} onIconChange={setPanelIcon}/>
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
        </View>
    )
}

export default ConfigPanel;