import React from "react";

import "./AnchorButton.css";

interface AnchorButtonProps {
    label: string;
    href?: string
}

export const AnchorButton = (props: AnchorButtonProps) => {

    const { label, href} = props;

    return (
        <a className="anchor-button" rel="noopener" target="_blank" href={href}>{label}</a>
    );
};