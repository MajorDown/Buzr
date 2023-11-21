export type AppScreen = "play" | "options" | "config";
export type AppScreenContext = {
    screen: AppScreen;
    updateScreen: (newScreen: AppScreen) => void;
};

export type PadName = string | null;
export type PadAssignment = string | null;
export type PadColor = "none" | "red" | "orange" | "yellow" | "green" | "turkish" | "blue" | "purple" | "pink";
export type PadIcon = "none" | "music" | "perc" | "synth" | "instrument" | "vocal";
export type PadMode = "loop" | "sequence";
export type PadProps = {
    name: string | null;
    assignTo: PadAssignment;
    color: PadColor;
    icon: PadIcon;
    mode: PadMode | null;
}

export type PadsContext = {
    pads : {
        pad1 : PadProps;
        pad2 : PadProps;
        pad3 : PadProps;
        pad4 : PadProps;
        pad5 : PadProps;
        pad6 : PadProps;
        pad7 : PadProps;
        pad8 : PadProps;
        pad9 : PadProps;
        pad10 : PadProps;
        pad11 : PadProps;
        pad12 : PadProps;
        pad13 : PadProps;
        pad14 : PadProps;
        pad15 : PadProps;
    };
    updatePads: (newPads: any) => void;
}