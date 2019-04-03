import React from "react";
import "./JournalItem.css";

export interface JournalItemProps {
    title: string;
    description: string;
    url: string;
    author: string;
}

export class JournalItem extends React.PureComponent<JournalItemProps> {
    public render() {
        const {
            title,
            description,
            url,
            author,
        } = this.props;

        return (
            <a href={url} target={"_blank"}>
                <div className={"JournalItem"}>
                    <div className={"articleTitle"}>{title}</div>
                    <div className={"articleDescription"}>{description}</div>
                    <div className={"articleAuthor"}>{author}</div>
                </div>
            </a>
        )
    }
}
