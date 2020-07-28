
import React from "react";

import { alignment, ParagraphItem } from "./types";

function processParagraph (textItem: string | ParagraphItem, index: number | string, ): JSX.Element {
    if (typeof textItem === "string") {
        return (
            <p key={index}>{textItem}<br/></p>
        );
    } else {
        return (
            <div key={index} style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <div className="inserted-svg" style={{backgroundImage: `url(${textItem.icon})`, backgroundRepeat: "no-repeat" , height: "2rem", width: "2rem", marginRight: "5px"}}></div>
                <p key={index}>{textItem.text}<br/></p>
            </div>
        );
    }
}

export function getText(text: (string | ParagraphItem)[], alignment: alignment, keyIndex: string | number, className?: string, textClasses?: string, textList?: boolean) {

    const paragraphs: JSX.Element[] = [];
    
    text.map((line, index) => {
        paragraphs.push(
        textList ? <React.Fragment key={index}><li>{line}</li><br/></React.Fragment> : processParagraph(line, index)
        )
    })

    function getListStyle () {
        if (alignment === "left") {
            return {marginLeft: "30%"}
        }
    }

    const styledList = getListStyle();
    const extraTextClasses = textClasses ? textClasses : "";

    return (
        <div key={keyIndex} style={{ float: alignment}} className={`${className} ${extraTextClasses}`}>
            {textList? <ul style={styledList}> {paragraphs} </ul> : paragraphs}
        </div>
    )
}