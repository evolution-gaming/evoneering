import React from "react";

import { alignment, ParagraphItem } from "../utils/types";
import { getText } from "../utils/utils";
import "./Block.css";

interface BlockProps {
    textAl?: alignment;
    picAl?: alignment;
    header: string;
    isMobile: boolean;
    text?: (string | ParagraphItem)[];
    image?: string;
    textClasses?: string;
    textList?: boolean;
    contentClass? : string;
    imageClass? : string;
}

interface BlockOptions {
    blockClass: string;
    headerClass: string;
    contentClass: string;
    textClass: string;
    textAlign: alignment;
}


export const Block: React.FC<BlockProps> = (props): JSX.Element => {

    function getImage(image: string, alignment: alignment, imageClass?: string) {
        return (
            <div key={image} style={{ float: alignment }} className={`image-container ${imageClass}`}>
                <img src={image} className="block-image" />
            </div>
        )
    }
    
    const {contentClass, header, isMobile, image, imageClass, picAl, text, textAl, textClasses, textList } = props;

    const BlockOptions: BlockOptions = {
        blockClass: isMobile? "block-mob" : "block",
        headerClass: isMobile? "block-head-mob" : "block-head",
        contentClass: isMobile? "block-content-mob" : "block-content",
        textClass: isMobile? "block-text-mob" : "block-text",
        textAlign: isMobile? "none" : textAl,
    }

    const textContent = text && getText(text, BlockOptions.textAlign, header, BlockOptions.textClass, textClasses, textList);
    const imageContent = image && getImage(image, picAl, imageClass);

    return (
        <div className={BlockOptions.blockClass} id={header}>
            {header && <div className="block-head">{header}</div>}
            <div className={`${BlockOptions.contentClass} ${contentClass}`}>
                {props.children}
                {text && textContent}
                {image && imageContent}
            </div>
        </div>
    );
};