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