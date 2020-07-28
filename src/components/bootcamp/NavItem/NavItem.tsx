import React from "react";

import "./NavItem.css";

interface NavItemProps {
    label: string;
    href: string;
    isMobile: boolean;
}

export const NavItem = (props: NavItemProps): JSX.Element => {

    const { href, isMobile, label } = props;

    return (
        <div className={isMobile ? "nav-item-mob" : "nav-item"}>
            <a href={href}>{label}</a>
        </div>
    );
};