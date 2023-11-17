export type AppPanelProps = {
    mode: "play" | "option" | "config";
}

export type PadProps = {
    name: string | null;
    assignTo: string | null;
    color: "none" | "red" | "orange" | "yellow" | "green" | "turkish" | "blue" | "purple" | "pink";
    icon: "none" | "music" | "perc" | "synth" | "instrument" | "vocal";
    mode: "loop" | "sequence";
};