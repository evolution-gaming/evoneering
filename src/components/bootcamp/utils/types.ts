export type alignment = "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "inline-end" | "inline-start" | "left" | "none" | "right" | undefined;

export interface ParagraphItem {
    icon: string;
    text: string;
}

export interface textContentItem {
    id: number;
    name: string;
    text: string[];
    image: string;
};