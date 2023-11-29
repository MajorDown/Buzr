import { StyleSheet } from "react-native";
import chart from "./chart";

const styles = StyleSheet.create({
  text: {
    color: chart.colorFont
  },
  app: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  appPanel: {
    width: "75%",
    height: "100%",
    overflow: "hidden"
  },
  screenSlider: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    position: "absolute",
  },
  screenManager: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  screen: {
    width: "100%",
    height: "100%"
  },
  playScreen: {
    justifyContent: "space-around",
    padding: "5%"
  },
  playScreenRow: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  optionsScreen: {
    justifyContent: "space-around",
    padding: "2%"
  },
  optionsScreenRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  optionsPadTitle: {
    flexDirection: "row",
    alignItems: "center"
  },
  appMenu: {
    width: "25%",
    height: "100%",
    paddingTop: "3%",
    paddingBottom: "3%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
  },
  MenuTitle: {
    width:"100%",
    height: "50%",
    alignItems: "center"
  },
  menuSelector: {
    width: "100%",
    height: "25%",
    justifyContent: "center",
    alignItems: "center"
  },
  MenuSelectorPadIcon: {
    width: "75%",
    height: "75%",
  },
  pad: {
    width: 75,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 2,
    overflow: "hidden"
  },
  padGradient: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  configModal : {
    backgroundColor: "#eeeeee",
    margin: "3%",
    padding: "2%",
    borderRadius: 10
  },
  configModalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  configModalTitle: {
     
  },
  configModalClose : {
    width: 30,
    height: 30,
    backgroundColor: "#cccccc",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },
  configPanel : {
    width: "80%",
    marginLeft: "10%",
    gap: 8
  },
  configPanelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  configTextInput: {
    padding: 2,
    width: "40%", 
    height: 30,
    textAlign: "center", 
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#cccccc"
  },
  configDropdown: {
    width: "40%", 
    borderRadius: 5, 
    borderWidth: 2, 
    borderColor: "#cccccc", 
    paddingLeft: "5%"
  },
  configIconSelector : {
    flexDirection: "row",
    gap: 20
  },
  configIconSelectorPressable : {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#cccccc",
    borderRadius: 5,
    borderWidth: 2
  },
  configIconSelectorImage : {
    width: "80%",
    height: "80%"
  },
  configAudioSelectorBtn: {
    width: "40%",
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#cccccc",
    borderRadius: 5,
    borderWidth: 2
  },
  configValidation: {
    marginHorizontal: "30%",
    width: "40%",
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#cccccc",
    borderRadius: 5,
    borderWidth: 2
  }
});

export default styles;
