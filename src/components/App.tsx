import React from "react";
import "./App.css";
import { TopBar } from "./TopBar/TopBar";
import { Button, ButtonTheme } from "./Button/Button";
import { TagContainer } from "./Tag/TagContainer";
import { Repos } from "./Repos/Repos";
import { HighlightInfo } from "./HighlightInfo/HighlightInfo";
import { JournalContainer } from "./Journal/JournalContainer";

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
                        <source src={require("./evo.mp4")} type="video/mp4" />
                    </video>
                    <div className={"VideoOverlay"} />
                    <div className="contentContainer">
                        <div className="slogan">
                            We are the leading provider of B2B gaming solutions which believe in sharing our
                            technology leadership with the community.
                        </div>

                        <div className="tags">
                            <TagContainer/>
                        </div>
                    </div>
                </div>
                <div className="ossContainer">
                    <div className="contentContainer">
                        <div className="slogan">
                            Open source projects we author or contribute to
                        </div>

                        <Repos/>

                        <div className="buttonContainer">
                            <Button
                                onClick={() => window.open('https://github.com/evolution-gaming', '_blank')}
                                label={"View All OpenSource Projects"}
                                theme={ButtonTheme.Light}
                            />
                        </div>
                    </div>
                </div>

                <div className="videoContainer">
                    <div className="contentContainer">
                        <div className="slogan">
                            Our conference talks
                        </div>
                        <div className="videoItem"></div>
                        <div className="videoItem"></div>
                        <div className="videoItem"></div>
                        <div className="videoItem"></div>
                    </div>
                </div>

                <div className="journalContainer">
                    <div className="contentContainer">
                        <div className="slogan">
                            Journal
                        </div>

                        <JournalContainer/>

                        {/*<div className="buttonContainer">*/}
                        {/*<Button*/}
                        {/*onClick={() => window.open('https://github.com/evolution-gaming', '_blank')}*/}
                        {/*label={"All articles at or Medium"}*/}
                        {/*theme={ButtonTheme.Dark}*/}
                        {/*/>*/}
                        {/*</div>*/}
                    </div>
                </div>

                <HighlightInfo/>

                <div className="mapContainer">
                    <div className="contentContainer">

                        <div className="slogan">
                            Offices
                        </div>

                        <div className="buttons">
                            <Button
                                onClick={() => window.open('https://github.com/evolution-gaming', '_blank')}
                                label={"Riga (Latvia)"}
                                theme={ButtonTheme.Light}
                            />

                            <Button
                                onClick={() => window.open('https://github.com/evolution-gaming', '_blank')}
                                label={"Riga (Latvia)"}
                                theme={ButtonTheme.Light}
                            />

                            <Button
                                onClick={() => window.open('https://github.com/evolution-gaming', '_blank')}
                                label={"Riga (Latvia)"}
                                theme={ButtonTheme.Light}
                            />

                            <Button
                                onClick={() => window.open('https://github.com/evolution-gaming', '_blank')}
                                label={"Riga (Latvia)"}
                                theme={ButtonTheme.Light}
                            />
                            <Button
                                onClick={() => window.open('https://github.com/evolution-gaming', '_blank')}
                                label={"Riga (Latvia)"}
                                theme={ButtonTheme.Light}
                            />

                            <Button
                                onClick={() => window.open('https://github.com/evolution-gaming', '_blank')}
                                label={"Riga (Latvia)"}
                                theme={ButtonTheme.Light}
                            />

                            <Button
                                onClick={() => window.open('https://github.com/evolution-gaming', '_blank')}
                                label={"Riga (Latvia)"}
                                theme={ButtonTheme.Light}
                            />

                            <Button
                                onClick={() => window.open('https://github.com/evolution-gaming', '_blank')}
                                label={"Riga (Latvia)"}
                                theme={ButtonTheme.Light}
                            />
                            <Button
                                onClick={() => window.open('https://github.com/evolution-gaming', '_blank')}
                                label={"Riga (Latvia)"}
                                theme={ButtonTheme.Light}
                            />

                            <Button
                                onClick={() => window.open('https://github.com/evolution-gaming', '_blank')}
                                label={"Riga (Latvia)"}
                                theme={ButtonTheme.Light}
                            />

                            <Button
                                onClick={() => window.open('https://github.com/evolution-gaming', '_blank')}
                                label={"Riga (Latvia)"}
                                theme={ButtonTheme.Light}
                            />

                            <Button
                                onClick={() => window.open('https://github.com/evolution-gaming', '_blank')}
                                label={"Riga (Latvia)"}
                                theme={ButtonTheme.Light}
                            />
                            <Button
                                onClick={() => window.open('https://github.com/evolution-gaming', '_blank')}
                                label={"Riga (Latvia)"}
                                theme={ButtonTheme.Light}
                            />

                            <Button
                                onClick={() => window.open('https://github.com/evolution-gaming', '_blank')}
                                label={"Riga (Latvia)"}
                                theme={ButtonTheme.Light}
                            />

                            <Button
                                onClick={() => window.open('https://github.com/evolution-gaming', '_blank')}
                                label={"Riga (Latvia)"}
                                theme={ButtonTheme.Light}
                            />

                            <Button
                                onClick={() => window.open('https://github.com/evolution-gaming', '_blank')}
                                label={"Riga (Latvia)"}
                                theme={ButtonTheme.Light}
                            />
                        </div>
                    </div>
                </div>

                <div className="footerContainer">
                    <div className="contentContainer">
                        Come to us, we have cookie and cookie policy 😂
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
