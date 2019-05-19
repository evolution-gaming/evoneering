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
import { Logo } from "./Logo/Logo";

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
                            <div className="slogan">Open Source Projects that we author or contribute to
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
                            <div className="slogan">Journals of our colleagues</div>
                            <JournalContainer/>
                        </div>
                    </div>
                </ScrollableAnchor>

                <HighlightInfo/>

                <div className="mapContainer">
                    <div className="contentContainer">
                        <div className="slogan">Our locations</div>
                        <Map/>
                    </div>
                </div>

                <div className="cultureContainer">
                    <div className="contentContainer">
                        <div className="slogan">Our Culture and Technology</div>
                        <div className="cultureVideoContainer">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/e8jp2iS_Wt8"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
                <div className="footerContainer">
                    <div className="contentContainer">
                        <div className="footerLogo">
                            <Logo/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
