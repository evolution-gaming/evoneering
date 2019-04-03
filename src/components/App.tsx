import React from "react";
import "./App.css";
import { TopBar } from "./TopBar/TopBar";
import { Button, ButtonTheme } from "./Button/Button";
import { TagContainer } from "./Tag/TagContainer";
import { Repos } from "./Repos/Repos";
import { HighlightInfo } from "./HighlightInfo/HighlightInfo";
import { JournalContainer } from "./Journal/JournalContainer";
import { Map } from "./Map/Map";
import { CardContainer } from "./Card/CardContainer";
import { IntroContainer } from "./Intro/IntroContainer";
import ScrollableAnchor from "react-scrollable-anchor";

class App extends React.PureComponent {
    render() {
        return (
            <div className="App">
                <div className="topBarContainer">
                    <div className="contentContainer">
                        <TopBar/>
                    </div>
                </div>
                <div className="mainInfoContainer">
                    <video muted loop className={"Video"} autoPlay={true}>
                        <source src={require("./evo.mp4")} type="video/mp4"/>
                    </video>
                    <div className={"VideoOverlay"}/>
                    <div className="contentContainer">
                        <IntroContainer/>

                        <ScrollableAnchor id={'technologies'}>
                            <div className="tags">
                                <TagContainer/>
                            </div>
                        </ScrollableAnchor>
                    </div>
                </div>
                <ScrollableAnchor id={'opensource'}>
                    <div className="ossContainer">
                        <div className="contentContainer">
                            <div className="slogan">Open source projects we author or contribute to
                            </div>

                            <Repos/>

                            <div className="buttonContainer">
                                <Button
                                    onClick={() => window.open("https://github.com/evolution-gaming", "_blank")}
                                    label={"View All OpenSource Projects"}
                                    theme={ButtonTheme.Light}
                                />
                            </div>
                        </div>
                    </div>
                </ScrollableAnchor>

                <ScrollableAnchor id={'talks'}>
                    <CardContainer/>
                </ScrollableAnchor>

                <ScrollableAnchor id={'journal'}>
                    <div className="journalContainer">
                        <div className="contentContainer">
                            <div className="slogan">Journal</div>
                            <JournalContainer/>
                        </div>
                    </div>
                </ScrollableAnchor>

                <HighlightInfo/>

                <div className="mapContainer">
                    <div className="contentContainer">
                        <Map/>
                    </div>
                </div>

                <div className="footerContainer">
                    <div className="contentContainer">Evolution Gaming Engineering</div>
                </div>
            </div>
        );
    }
}

export default App;
