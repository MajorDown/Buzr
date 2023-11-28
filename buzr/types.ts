export type AppScreen = "play" | "options" | "config";
export type AppScreenContext = {
    screen: AppScreen;
    updateScreen: (newScreen: AppScreen) => void;
};

export type PadId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 ;
export type ConfigContext = {
    idToConfig: PadId;
    updateIdToConfig: (newId: PadId) => void
}

export type OpenConfig = {
    openConfig : boolean;
    updateOpenConfig: (isOpen: boolean) => void
}

export type PadName = string | undefined;
export type PadAssignment = {
    name: string | undefined | null; 
    uri: string | undefined | null}
export type PadColor = "none" | "red" | "orange" | "yellow" | "green" | "turquoise" | "blue" | "purple" | "pink";
export type PadIcon = "none" | "music" | "perc" | "synth" | "instrument" | "vocal";
export type PadMode = "loop" | "sequence";
export type PadProps = {
    id: PadId;
    name: string | null;
    assignTo: PadAssignment;
    color: PadColor;
    icon: PadIcon;
    mode: PadMode | null;
}

export type Pads = {
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
export type PadsContext = {
    pads : Pads
    updatePads: (newPads: any) => void;
}