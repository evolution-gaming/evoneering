import React from "react";
import ScrollableAnchor, { configureAnchors } from "react-scrollable-anchor";

import { AnchorButton } from "./Button/AnchorButton";
import { Block } from "./block/Block";
import { Card } from "./Card/Card";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { IntroBlock } from "./IntroBlock/IntroBlock";
import { NavItem } from "./NavItem/NavItem";
import { ReviewBlock } from "./ReviewBlock/ReviewBlock";

import { buttonFormLink } from "./config/constants";
import about_img from "./assets/images/about_img_large.png";
import textContent from "./assets/json/textContent.json";
import { alumniImages, mentorImages } from "./assets/index"

import "./Bootcamp.css"
import { MenuBlock } from "./MenuBlock/MenuBlock";
import { StickyFooter } from "./StickyFooter/StickyFooter";

export const Bootcamp = (): JSX.Element => {

    configureAnchors({ offset: -90, scrollDuration: 250 });

    const smallScreen = window.innerWidth < 820;

    return (
        <div style={{ position: "relative" }}>
            <Header isMobile={smallScreen}>
                <NavItem isMobile={smallScreen} href="#about" label="About" />
                <NavItem isMobile={smallScreen} href="#whyscala" label="Why Scala" />
                <NavItem isMobile={smallScreen} href="#itworks" label="How it Works" />
                <NavItem isMobile={smallScreen} href="#expectations" label="Our Expectations" />
                <NavItem isMobile={smallScreen} href="#benefits" label="Your Benefits" />
                <NavItem isMobile={smallScreen} href="#reviews" label="Alumni Reviews" />
                <NavItem isMobile={smallScreen} href="#mentors" label="Our Mentors" />
                {!smallScreen && <AnchorButton label="I'm Interested" href={buttonFormLink} />}
            </Header>
            <div className="wrapper">
                <IntroBlock isMobile={smallScreen} textBlock={textContent.intro} >
                    {!smallScreen && <div className="bckg-visual" id="bckg1" />}
                    {!smallScreen && <div className="bckg-visual" id="bckg2" />}
                    {!smallScreen && <div className="bckg-visual" id="bckg3" />}
                </IntroBlock>
                <ScrollableAnchor id="about"><div /></ScrollableAnchor>
                <Block isMobile={smallScreen} text={textContent.about} textAl={smallScreen ? "none" : "right"} image={smallScreen ? "" : about_img} picAl="left" header="About" textClasses={smallScreen ? "block-text-mob" : "textSide"} imageClass="about-image" >
                    {!smallScreen && <div className="bckg-visual" id="bckg4" />}
                    {!smallScreen && <div className="bckg-visual" id="bckg5" />}
                </Block>
                <ScrollableAnchor id="whyscala"><div /></ScrollableAnchor>
                <Block isMobile={smallScreen} text={textContent.whyScala} header="Why Scala" textClasses={smallScreen ? "block-text-mob" : "textCenter"} />
                <ScrollableAnchor id="itworks"><div /></ScrollableAnchor>
                <Block isMobile={smallScreen} header="How it Works" contentClass={smallScreen ? "" : "cardBlock"}>
                    <Card isMobile={smallScreen} content={textContent.cards[0]} />
                    <div className={smallScreen ? "card-arrow-mob" : "card-arrow"} />
                    <Card isMobile={smallScreen} content={textContent.cards[1]} />
                    <div className={smallScreen ? "card-arrow-mob" : "card-arrow"} />
                    <Card isMobile={smallScreen} content={textContent.cards[2]} />
                    {!smallScreen && <div className="bckg-visual" id="bckg6" />}
                </Block>
                <ScrollableAnchor id="expectations"><div /></ScrollableAnchor>
                <Block isMobile={smallScreen} header="Our Expectations" text={textContent.expectations} textAl="right" textClasses="colorText yellow" textList={true}>
                    {!smallScreen && <div className="arrowLeft" />}
                    {!smallScreen && <div className="bckg-visual" id="bckg7" />}
                </Block>
                <ScrollableAnchor id="benefits"><div /></ScrollableAnchor>
                <Block isMobile={smallScreen} header="Your Benefits" text={textContent.benefits} textAl="left" textClasses="colorText grey" textList={true}>
                    {!smallScreen && <div className="arrowRight" />}
                    {!smallScreen && <div className="bckg-visual" id="bckg8" />}
                </Block>
                <ScrollableAnchor id="reviews"><div /></ScrollableAnchor>
                <ReviewBlock reviewImages={alumniImages} header="Alumni Reviews" reviews={textContent.reviews} >
                    {!smallScreen && <div className="bckg-visual" id="bckg9" />}
                </ReviewBlock>
                <ScrollableAnchor id="mentors"><div /></ScrollableAnchor>
                <MenuBlock isMobile={smallScreen} header="Our Mentors" images={mentorImages} menuItems={textContent.mentors} >
                    {!smallScreen && <div className="bckg-visual" id="bckg10" />}
                </MenuBlock>
                <Footer />
            </div>
            {smallScreen && <StickyFooter href={buttonFormLink} label="I'm Interested" />}
        </div>
    )
};