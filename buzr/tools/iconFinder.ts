import { PadIcon } from "../types";

const PadFinder = (icon:PadIcon) => {
    switch (icon) {
        case "music":
        return (require(`../assets/images/padIcons/music.png`));
        case "perc":
        return (require(`../assets/images/padIcons/perc.png`));
        case "synth":
        return (require(`../assets/images/padIcons/synth.png`));
        case "instrument":
        return (require(`../assets/images/padIcons/instrument.png`));
        case "vocal":
        return (require(`../assets/images/padIcons/vocal.png`));
        case "none":
        return (require(`../assets/images/padIcons/none.png`));
    }
}

export default PadFinder; 