import { StyleSheet } from "react-native";
import chart from "./chart";

const styles = StyleSheet.create({
  app: {
    width: "100%",
    height: "100%",
    backgroundColor: chart.colorBack,
    paddingTop: 30,
    alignItems: "center",
  },
  appText: {
    color: chart.colorFont,
    fontFamily: chart.fontApp,
  },
  title: {
    textAlign: "center",
    color: chart.colorTitle,
    fontFamily: chart.fontTitle,
    fontSize: 30,
  },
  tempoMaker: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    padding: 5,
    margin: 5,
  },
  tempoMakerText: {
    color: chart.colorFont,
    fontFamily: chart.fontApp,
  },
  tempoMakerInput: {
    color: chart.colorFont,
    fontFamily: chart.fontApp,
    fontSize: 30,
  },
  tempoMakerInputBorder: {
    borderColor: chart.colorShadow,
    borderWidth: 2,
    padding: 5,
    minWidth: 100,
    borderRadius: 5,
    alignItems: "center",
  },
  tempoViewer: {
    alignItems: "center",
  },
  tempoViewerButton: {
    backgroundColor: chart.colorFont,
    padding: 5,
    margin: 30,
    borderRadius: 5,
    alignItems: "center",
  },
  tempoViewerText: {
    color: chart.colorBack,
    fontFamily: chart.fontApp,
    fontSize: 30,
  },
  tempoViewerSelect: {
    backgroundColor: chart.colorBack,
    width: 150,
  },
  tempoViewerSelectText: {
    color: chart.colorFont,
    fontFamily: chart.fontApp,
    fontSize: 30,
  },
  tempoViewerSelectOption: {
    backgroundColor: chart.colorFont,
  },
  visualTempo: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
});

export default styles;
