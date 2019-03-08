import React from "react";
import "./CardContainer.css";
import { Popup } from "./Popup";
import Query, { QueryResult } from "react-apollo/Query";
import gql from "graphql-tag";
import { Tag } from "../Tag/Tag";

const BACKEND_URL = 'http://localhost:1337/'

interface Card {
    URL: string;
    title: string;
    subtitle: string;
    thumbnail: {
        url: string;
    };
    tags: {
        name: string;
        color: string;
    };
}

type CardQueryResult = QueryResult<{
    cards: Card[];
}>

const GET_CARDS = gql`{
    cards {
        thumbnail {
            url
        }
        title
        subtitle
        URL
        tags {
            name
            color
        }
    }
}`;

interface CardsProps {
    onOpen: (URL: string) => void;
}

const Cards = ({onOpen}: CardsProps) =>
    <div className="Cards">
        <Query query={GET_CARDS}>
            {({loading, data}: CardQueryResult) =>
                !loading && data!.cards.map(({thumbnail, URL, title, subtitle, tags}) =>
                    <div 
                        key={URL}
                        className="Card"
                    >
                        <img
                            src={BACKEND_URL + thumbnail.url}
                            onClick={() => onOpen(URL)}
                        />
                        <div className="text">
                            <div className="title">{title}</div>
                            <div className="subtitle">{subtitle}</div>
                            <div className="tags">
                                <Tag bgColor={tags.color} label={tags.name}></Tag>
                            </div>
                        </div>
                    </div>
                )
            }
        </Query>
    </div>;

interface VideoProps {
    src: string;
}

const YoutubeVideo = ({src}: VideoProps) => {
    if (src.includes("youtube.com/watch")) {
        src = src.replace("youtube.com/watch?v=", "youtube.com/embed/")
    }

    return (
        <iframe
            width="100%"
            height="100%"
            src={src}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    )
}

interface CardsState {
    activeVideo?: string,
}

export class CardContainer extends React.Component<{}, CardsState> {
    state: CardsState = {}

    public render() {
        const { activeVideo } = this.state;

        return (
            <div className="cardContainer">
                <div className="contentContainer">
                    <div className="slogan">
                        Our conference talks
                    </div>

                    <Cards onOpen={URL => this.setState({activeVideo: URL})}/>
                    
                    {activeVideo &&
                        <Popup 
                            onClose={() => this.setState({activeVideo: undefined})}
                        >
                            <YoutubeVideo src={activeVideo}/>
                        </Popup>}
                </div>
            </div>
        );
    }
}
