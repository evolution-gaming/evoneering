import React from "react";

import "./Card.css"

interface CardObject {
    number: string;
    icon: string;
    label: string;
    text: string;
}

interface CardProps {
    content: CardObject;
    isMobile: boolean;
};

export const Card = (props: CardProps) => {

    const { isMobile } = props;

    const { icon, label, number, text } = props.content;

    const CardClasses = {
        wrapper: isMobile? "card-wrapper-mob" : "card-wrapper",
        square: isMobile? "card-square-mob" : "card-square",
        numberWrap: isMobile? "card-number-wrap card-number-wrap-mob" : "card-number-wrap",
        text: isMobile? "card-text-mob" : "card-text"
    }

    return (
        <div className={CardClasses.wrapper}>
            <div className={CardClasses.square}>
            <div className="card-number-wrap">    
            <div className="card-number">{number}</div>
            </div>
                <div className="card-icon" style={{ backgroundImage: `url(${icon})`, backgroundRepeat: "no-repeat" }} />
                <div className="card-label">{label}</div>
                <div className="card-text">{text}</div>
            </div>
        </div>
    );
};