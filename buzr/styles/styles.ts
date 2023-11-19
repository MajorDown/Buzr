import { StyleSheet } from "react-native";
import chart from "./chart";

const styles = StyleSheet.create({
  text: {
    color: chart.colorFont
  },
  appScreen: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  appPanel: {
    width: "75%",
    height: "100%",
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
  menuSelector: {
    width: "100%",
    height: "25%",
    justifyContent: "center",
    alignItems: "center"
  },
  pad: {
    width: 75,
    height: 75,
  },
  padContainer: {
    width: "100%",
    height: "100%"    
  },
  padContent: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default styles;
