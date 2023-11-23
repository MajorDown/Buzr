import { PadColor } from "../types";

const PadFinder = (fn: string, color:PadColor, isActive:boolean) => {
  console.log(`Start padFinder(${color}) dans ${fn}: `, new Date())
    if (!isActive) {
        switch (color) {
          case "red":
            return(require("../assets/images/pads/pad_red.svg"));
          case "orange":
            return(require("../assets/images/pads/pad_orange.svg"));
          case "yellow":
            return(require("../assets/images/pads/pad_yellow.svg"));
          case "green":
            return(require("../assets/images/pads/pad_green.svg"));
          case "turkish":
            return(require("../assets/images/pads/pad_turkish.svg"));
          case "blue":
            return(require("../assets/images/pads/pad_blue.svg"));
          case "purple":
            return(require("../assets/images/pads/pad_purple.svg"));
          case "pink":
            return(require("../assets/images/pads/pad_pink.svg"));
          case "red":
            return(require("../assets/images/pads/pad_red.svg"));
          case "none":
            return(require("../assets/images/pads/pad_white.svg"));           
          }
    }
    if (isActive) {
        switch (color) {
            case "red":
              return(require("../assets/images/pads/pad_red_active.svg"));
            case "orange":
              return(require("../assets/images/pads/pad_orange_active.svg"));
            case "yellow":
              return(require("../assets/images/pads/pad_yellow_active.svg"));
            case "green":
              return(require("../assets/images/pads/pad_green_active.svg"));
            case "turkish":
              return(require("../assets/images/pads/pad_turkish_active.svg"));
            case "blue":
              return(require("../assets/images/pads/pad_blue_active.svg"));
            case "purple":
              return(require("../assets/images/pads/pad_purple_active.svg"));
            case "pink":
              return(require("../assets/images/pads/pad_pink_active.svg"));
            case "red":
              return(require("../assets/images/pads/pad_red_active.svg"));
            case "none":
              return(require("../assets/images/pads/pad_white_active.svg"));           
            }
    }
    console.log(`End padFinder(${color}) dans ${fn}: `, new Date())
}

export default PadFinder; 