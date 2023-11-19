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
  }
});

export default styles;
