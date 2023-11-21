import { PadColor } from "../types";

const PadFinder = (color:PadColor, isActive:boolean) => {
    if (!isActive) {
        switch (color) {
          case "red":
            return(require("../assets/images/pads/pad_red.png"));
          case "orange":
            return(require("../assets/images/pads/pad_orange.png"));
          case "yellow":
            return(require("../assets/images/pads/pad_yellow.png"));
          case "green":
            return(require("../assets/images/pads/pad_green.png"));
          case "turkish":
            return(require("../assets/images/pads/pad_turkish.png"));
          case "blue":
            return(require("../assets/images/pads/pad_blue.png"));
          case "purple":
            return(require("../assets/images/pads/pad_purple.png"));
          case "pink":
            return(require("../assets/images/pads/pad_pink.png"));
          case "red":
            return(require("../assets/images/pads/pad_red.png"));
          case "none":
            return(require("../assets/images/pads/pad_white.png"));           
          }
    }
    if (isActive) {
        switch (color) {
            case "red":
              return(require("../assets/images/pads/pad_red_active.png"));
            case "orange":
              return(require("../assets/images/pads/pad_orange_active.png"));
            case "yellow":
              return(require("../assets/images/pads/pad_yellow_active.png"));
            case "green":
              return(require("../assets/images/pads/pad_green_active.png"));
            case "turkish":
              return(require("../assets/images/pads/pad_turkish_active.png"));
            case "blue":
              return(require("../assets/images/pads/pad_blue_active.png"));
            case "purple":
              return(require("../assets/images/pads/pad_purple_active.png"));
            case "pink":
              return(require("../assets/images/pads/pad_pink_active.png"));
            case "red":
              return(require("../assets/images/pads/pad_red_active.png"));
            case "none":
              return(require("../assets/images/pads/pad_white_active.png"));           
            }
    }
}

export default PadFinder; 