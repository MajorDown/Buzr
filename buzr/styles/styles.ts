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
  optionsPad: {
    alignItems: "center",
    borderRadius: 5,
    padding: 5
  },
  optionsPadIsPressed : {
    alignItems: "center",
    borderRadius: 5,
    padding: 5,
    backgroundColor: "#777777"
  },
  optionsPadTitle: {
    flexDirection: "row",
    alignItems: "center"
  },
  optionsPadText: {
    color: "#ffffff"
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
  padIcon: {
    width: 32,
    height: 32,    
  },
  padText: {
    color: "white"
  }
});

export default styles;
