import React from "react";

import "./Banner.css";

interface BannerProps {
    buttonLabel: string;
    buttonLink: string;
    bannerImage: string;
    customStyles?: React.CSSProperties;
}

// Banner Sizing is applied with wrapping container from App.css - .bannerGenericContainer

export const Banner = (props: BannerProps): JSX.Element => {

    const { buttonLabel, buttonLink, bannerImage, customStyles } = props;

    return (
        <div className="bannerMain" style={{backgroundImage: `url(${bannerImage})`, ...customStyles}}>
            <a href={buttonLink} className="bannerButton">{buttonLabel}</a>
        </div>
    );
}