export type PadColor = "none" | "red" | "orange" | "yellow" | "green" | "turkish" | "blue" | "purple" | "pink";

export type PadIcon = "none" | "music" | "perc" | "synth" | "instrument" | "vocal";

export type Pad = {
    name: string | null;
    assignTo: string | null;
    padColor: PadColor;
    padIcon: PadIcon;
};

