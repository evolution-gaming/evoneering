import React from "react";

import "./BurgerButton.css";

interface BurgerButtonProps {
    label?: string;
    onClick?: () => void;
}

export const BurgerButton = (props: BurgerButtonProps) => {

    const { label, onClick } = props;

    return (
        <button className="burger-button" onClick={onClick}>{label}</button>
    );
}