import React from "react";
import "./App.css";
import {TopBar} from "./TopBar/TopBar";
import {Button, ButtonTheme} from "./Button/Button";
import { Banner } from "./Banner/Banner";
import bootcampImage from "./eng-bootcamp-web-banner.jpg";
import bootcampImageMob from "./eng-bootcamp-web-banner-mob.png";
import {TagContainer} from "./Tag/TagContainer";
import {Repos} from "./Repos/Repos";
import {HighlightInfo} from "./HighlightInfo/HighlightInfo";
import {JournalContainer} from "./Journal/JournalContainer";
import {Map} from "./Map/Map";
import {CardContainer} from "./Card/CardContainer";
import {IntroContainer} from "./Intro/IntroContainer";
import ScrollableAnchor from "react-scrollable-anchor";
import { LogoEvolution } from "./Logo/LogoEvolution";
import {initAmsterdamWidget, initMinskWidget, initRigaWidget, initTallinnWidget} from "./widget";
import {OfficeGallery} from "./OfficeGallery/OfficeGallery";
import "react-image-gallery/styles/css/image-gallery.css";
import {CultureGallery} from "./CultureGallery/CultureGallery";
import gql from "graphql-tag";
import Query from "react-apollo/Query";
import ReactMarkdown from "react-markdown";

const QUERY = gql`
{
  banners {
    visible,
    text,
    textBold,
    textColor,
    backgroundColor,
    link,
  }
  headings{
    opensource,
    conference,
    journal,
    locations,
    positions,
    culture,
    offices,
    about,
  }
  aboutevos {
    about,
  }
  aboutcultures {
    about,
  }
}
`;

class App extends React.PureComponent {
    componentDidMount() {
        setTimeout(() => {
            initAmsterdamWidget("amsterdamWidget");
            initRigaWidget("rigaWidget");
            initTallinnWidget("tallinnWidget");
            initMinskWidget("minskWidget");
        }, 500);
    }

    render() {
        return (
            <Query query={QUERY}>
                {({loading, data}) => {
                    if (loading || !data) return null;

                    const banner = data.banners[0] ||  {};
                    const headings = data.headings[0] || {};
                    const aboutevo = (data.aboutevos[0] || {}).about || "";
                    const aboutculture = (data.aboutcultures[0] || {}).about || "";

                    return (
                        <div className="App">
                            {banner.visible && (
                                <a
                                    className="hiringBanner"
                                    href={banner.link}
                                    style={{backgroundColor: banner.backgroundColor, color: banner.textColor}}
                                >
                                    {banner.text} <span>{banner.textBold}</span>
                                </a>
                            )}
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

                            <ScrollableAnchor id={'scalabootcamp'}>
                                <div className="bootcampContainer">
                                    <Banner buttonLabel="LEARN MORE" buttonLink="https://scala-bootcamp.evolutiongaming.com/" bannerImage={window.innerWidth < 820 ? bootcampImageMob : bootcampImage}/>
                                </div>
                            </ScrollableAnchor>

                            <ScrollableAnchor id={'opensource'}>
                                <div className="ossContainer">
                                    <div className="contentContainer">
                                        <div className="slogan">{headings.opensource}</div>

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
                                <div className="cardContainer">
                                    <div className="contentContainer">
                                        <div className="slogan">
                                            {headings.conference}
                                        </div>

                                        <CardContainer/>
                                    </div>
                                </div>
                            </ScrollableAnchor>

                            <ScrollableAnchor id={'journal'}>
                                <div className="journalContainer">
                                    <div className="contentContainer">
                                        <div className="slogan">{headings.journal}</div>
                                        <JournalContainer/>
                                    </div>
                                </div>
                            </ScrollableAnchor>

                            <HighlightInfo/>

                            <ScrollableAnchor id={'locations'}>
                                <div className="mapContainer">
                                    <div className="contentContainer">
                                        <div className="slogan">{headings.locations}</div>
                                        <Map/>
                                        <div className="jobsWidgets">
                                            <ScrollableAnchor id={'jobs'}>
                                                <div className="slogan jobs">{headings.positions}</div>
                                            </ScrollableAnchor>
                                            <div className="slogan city">Amsterdam</div>
                                            <div id="amsterdamWidget"/>
                                            <div className="slogan city">Minsk</div>
                                            <div id="minskWidget"/>
                                            <div className="slogan city">Riga</div>
                                            <div id="rigaWidget"/>
                                            <div className="slogan city">Tallinn</div>
                                            <div id="tallinnWidget"/>
                                        </div>
                                    </div>
                                </div>
                            </ScrollableAnchor>

                            <ScrollableAnchor id={'culture'}>
                                <div className="cultureContainer">
                                    <div className="contentContainer">
                                        <div className="slogan">{headings.culture}</div>
                                        <div className="cultureVideoContainer">
                                            <iframe
                                                width="100%"
                                                height="100%"
                                                src="https://www.youtube.com/embed/hhkCid2VL2M"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        </div>

                                        <div className="textDescription">
                                            <ReactMarkdown source={aboutculture} />
                                        </div>
                                        <div className="imageGallery">
                                            <CultureGallery/>
                                        </div>
                                    </div>
                                </div>
                            </ScrollableAnchor>

                            <ScrollableAnchor id={'offices'}>
                                <div className="officesContainer">
                                    <div className="contentContainer">
                                        <div className="slogan">{headings.offices}</div>
                                        <div className="imageGallery">
                                            <OfficeGallery/>
                                        </div>
                                    </div>
                                </div>
                            </ScrollableAnchor>


                            <ScrollableAnchor id={'aboutEvo'}>
                                <div className="aboutEvoContainer">
                                    <div className="contentContainer">
                                        <div className="slogan">{headings.about}</div>

                                        <div className="longDescription">
                                            <ReactMarkdown source={aboutevo} />
                                        </div>
                                    </div>
                                </div>
                            </ScrollableAnchor>


                            <div className="footerContainer">
                                <div className="contentContainer">
                                    <div className="footerLogo">
                                        <LogoEvolution />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </Query>
        );
    }
}

export default App;
