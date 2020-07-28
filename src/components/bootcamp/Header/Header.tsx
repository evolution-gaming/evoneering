import React, { ReactNode, useState } from "react";

import { BurgerButton } from "../BurgerButton/BurgerButton";
import { Logo } from "../Logo/Logo";

import "./Header.css";

interface HeaderProps {
    isMobile: boolean;
};

function getHeader(isMobile: boolean, isOpen: boolean, children?: ReactNode, onClick?: () => void): JSX.Element {
    if (isMobile) {
        return (
            <div className="mob-header-wrapper">
                <div className="mob-header">
                    <Logo />
                    <BurgerButton onClick={onClick} />
                </div>
                <div className={`head-menu ${isOpen ? "head-menu-active" : "head-menu-passive"}`} onClick={onClick}>
                    {isOpen && children}
                </div>
                {isOpen && <div onClick={onClick} className="header-backdrop"></div>}
            </div>
        )
    } else {
        return (
            <div className={"header"}>
                <Logo />
                {children}
            </div>
        );
    }
}


export const Header: React.FC<HeaderProps> = (props): JSX.Element => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        console.log("clicking")
        setIsOpen(!isOpen);
    }

    return (
        getHeader(props.isMobile, isOpen, props.children, toggleOpen)
    );
};