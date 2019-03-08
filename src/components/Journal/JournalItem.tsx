import React from "react";
import "./JournalItem.css";

export interface JournalItemProps {
    title: string;
    paragraph: string;
    URL: string;
}

export class JournalItem extends React.PureComponent<JournalItemProps> {
    public render() {
        const {
            title,
            paragraph,
            URL
        } = this.props;

        return (
            <a href={URL} target={"_blank"}>
                <div className={"JournalItem"}>
                    <div className={"articleTitle"}>{title}</div>
                    <div className={"articleDescription"}>{paragraph}</div>
                </div>
            </a>
        )
    }
}
