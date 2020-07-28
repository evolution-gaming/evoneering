import React, { useState } from "react";

import { getText } from "../utils/utils"
import { textContentItem } from "../utils/types";

import "./MenuBlock.css";

interface MenuItem extends textContentItem {
    nameSubtext: string;
}

interface MenuBlockProps {
    header: string;
    isMobile: boolean;
    menuItems: MenuItem[];
    images?: string[];
}

export const MenuBlock: React.FC<MenuBlockProps> = (props) => {

    const { header, isMobile, menuItems, images } = props;

    const [tabActive, setTabActive] = useState(0);
    
    const tabs: JSX.Element[] = [];
    const dots: JSX.Element[] = [];
    const paragraphs: JSX.Element[] = [];

    menuItems.map((e, index) => {

        const switchTab = () => {
            setTabActive(e.id);
        }

        tabs.push(
            <div key={index} id={`${e.id}`} className={`menu-block-nav ${tabActive === e.id ? "menu-block-nav-active" : ""}`}>
                <a onClick={switchTab}>{e.name}</a>
            </div>
        );
        dots.push(
            <div onClick={switchTab} key={index} className={`menu-dot ${tabActive === e.id ? "menu-dot-active" : "menu-dot-passive"}`} />
        )

        paragraphs.push(
            getText(menuItems[e.id].text, "none", `menu-item${e.id}`, `${tabActive === e.id ? "menu-block-text-active" : "menu-block-text-passive"}`)
        );
    });

    return (
        <div className={isMobile? "menu-block-mob" : "menu-block" } id={header}>
            {props.children}
            {header && <div className="block-head">{header}</div>}
            <div className="menu-block-content">
                <div className="menu-top-bar">
                    {tabs}
                </div>
                <div className="menu-content-wrap">
                    <div className="menu-block-text">{paragraphs}</div>
                    <div> {images && <img className={isMobile? "menu-block-image-mob" : "menu-block-image"} src={images[tabActive]} />}
                        {images && <div className="menu-block-title">
                            <p className="menu-block-name">{menuItems[tabActive].name}</p>
                            <p className="menu-block-name-subtext">{menuItems[tabActive].nameSubtext}</p>
                        </div>}
                    </div>
                </div>
                <div className="menu-bottom">
                    {dots}
                </div>
            </div>
        </div>
    );
};