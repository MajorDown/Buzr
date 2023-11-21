import {useState, useEffect} from "react";
import { PadColor } from "../types";

const ActivePadSearcher = (color:PadColor) => {
    const [icon, setIcon] = useState<any>();

    useEffect(() => {
      switch (color) {
        case "red":
          setIcon(require("../assets/images/pads/pad_red_active.png"));
          break;
        case "orange":
          setIcon(require("../assets/images/pads/pad_orange_active.png"));
          break;
        case "yellow":
          setIcon(require("../assets/images/pads/pad_yellow_active.png"));
          break;
        case "green":
          setIcon(require("../assets/images/pads/pad_green_active.png"));
          break;
        case "turkish":
          setIcon(require("../assets/images/pads/pad_turkish_active.png"));
          break;
        case "blue":
          setIcon(require("../assets/images/pads/pad_blue_active.png"));
          break;
        case "purple":
          setIcon(require("../assets/images/pads/pad_purple_active.png"));
          break;
        case "pink":
          setIcon(require("../assets/images/pads/pad_pink_active.png"));
          break;
        case "red":
          setIcon(require("../assets/images/pads/pad_red_active.png"));
          break;
        case "none":
          setIcon(require("../assets/images/pads/pad_white_active.png"));           
        }
    }, [color])

    return icon;
}

export default ActivePadSearcher; 