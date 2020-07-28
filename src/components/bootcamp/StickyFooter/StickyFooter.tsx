import React from "react";

import "./StickyFooter.css";

interface StickyFooterProps {
    label: string;
    href?: string;
}

export const StickyFooter = (props: StickyFooterProps): JSX.Element => {

    const { label, href } = props;

    return (
        <div className="sticky-footer">
            <a href={href} rel="noopener" target="_blank" className="sticky-footer-btn">{label}</a>
        </div>
    );
}