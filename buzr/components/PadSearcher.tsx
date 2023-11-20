import {useState, useEffect} from "react";
import { Image } from "react-native";
import { PadColor } from "../types";

type IconSearcherProps = {
    color: PadColor;
    isActive : boolean
}

const PadSearcher = (props:IconSearcherProps) => {
    const [icon, setIcon] = useState<any>();

    useEffect(() => {
        if (props.isActive === false) {
            switch (props.color) {
              case "red":
                setIcon(require("../assets/images/pads/pad_red.png"));
                break;
              case "orange":
                setIcon(require("../assets/images/pads/pad_orange.png"));
                break;
              case "yellow":
                setIcon(require("../assets/images/pads/pad_yellow.png"));
                break;
              case "green":
                setIcon(require("../assets/images/pads/pad_green.png"));
                break;
              case "turkish":
                setIcon(require("../assets/images/pads/pad_turkish.png"));
                break;
              case "blue":
                setIcon(require("../assets/images/pads/pad_blue.png"));
                break;
              case "purple":
                setIcon(require("../assets/images/pads/pad_purple.png"));
                break;
              case "pink":
                setIcon(require("../assets/images/pads/pad_pink.png"));
                break;
              case "red":
                setIcon(require("../assets/images/pads/pad_red.png"));
                break;
              case "none":
                setIcon(require("../assets/images/pads/pad_white.png"));
        }} else {
            switch (props.color) {
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
        }
    }, [props.isActive, props.color])

    return icon;
}

export default PadSearcher; 