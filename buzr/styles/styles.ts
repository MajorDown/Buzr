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
    height: "50%",
    flexDirection: "row",
    position: "absolute",
  },
  screen: {
    width: "100%",
    height: "100%",
  },
  playScreen: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginVertical: "10%"
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
    margin: "2%",
    width: 75,
    height: 75,
    justifyContent: "center",
    alignItems: "center"
  },
  padBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    overflow: "hidden"
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
