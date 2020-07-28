import React from "react";


import { getText } from "../utils/utils";
import "./IntroBlock.css";
import Intro_L from "../assets/images/intro_img_large.png";
import { ParagraphItem, alignment } from "../utils/types";

interface introBlockProps {
    isMobile: boolean;
    textBlock: (string | ParagraphItem)[];
}

interface BlockOptions {
    align: alignment;
    blockClass: string;
    textWrapClass: string;
    headerClass: string;
    textClass: string;
    imageClass: string;
}

export const IntroBlock: React.FC<introBlockProps> = (props) => {

    const { isMobile, textBlock } = props;

    const blockOptions: BlockOptions = {
        align: isMobile? "none" : "left",
        blockClass: isMobile? "intro-block-mob" : "intro-block",
        textWrapClass: isMobile? "intro-text-wrapper-mob" : "intro-text-wrapper",
        headerClass:  isMobile? "intro-h1-mob" : "intro-h1",
        textClass: isMobile? "intro-text-mob" : "intro-text",
        imageClass: isMobile? "intro-image-mob" : "intro-image"
    }

    const textContent = getText(textBlock, blockOptions.align, "intro", blockOptions.textClass)

    return (
        <div className={blockOptions.blockClass}>
            <div className={blockOptions.textWrapClass}>
                {isMobile && <div className="intro-img-wrap-mob" style={{backgroundImage: `url(${Intro_L})`}}></div>}
            <h1 className={blockOptions.headerClass}>Bootcamp <span style={{color: "red"}}>[Scala]</span></h1>
            {textContent}
            </div>
            <div>
            {!isMobile && <img src={Intro_L} className={blockOptions.imageClass}></img>}
            {props.children}
            </div>
        </div>
    )
}