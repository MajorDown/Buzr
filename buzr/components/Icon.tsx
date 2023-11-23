import {useState, useEffect} from "react";
import { Image, ImageURISource } from "react-native";
import { PadIcon} from "../types";
const none = require("../assets/images/padIcons/none.png");
const music = require("../assets/images/padIcons/music.png");
const perc = require("../assets/images/padIcons/perc.png");
const synth = require("../assets/images/padIcons/synth.png");
const instrument = require("../assets/images/padIcons/instrument.png");
const vocal = require("../assets/images/padIcons/vocal.png");

type IconProps = {
    icon: PadIcon;
    size: number,
}

const Icon = (props: IconProps) => {
    const [icon, setIcon] = useState<ImageURISource>(none);

    useEffect(() => {
        switch (props.icon) {
            case "none":
                setIcon(none);
                break;
            case "music":
                setIcon(music);
                break;
            case "perc":
                setIcon(perc);
                break;
            case "synth":
                setIcon(synth);
                break;
            case "instrument":
                setIcon(instrument);
                break;
            case "vocal":
                setIcon(vocal);
                break;
        }
    }, [])

    return (
        <Image 
        source={icon}
        alt={props.icon} 
        style={{width: props.size, height: props.size}}
        />
    )
}

export default Icon;