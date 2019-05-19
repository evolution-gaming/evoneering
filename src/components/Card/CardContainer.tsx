import React from "react";
import "./CardContainer.css";
import { Popup } from "./Popup";
import Query, { QueryResult } from "react-apollo/Query";
import gql from "graphql-tag";
import { Tag } from "../Tag/Tag";
import { STATIC_SERVER } from "./../../config";

interface Card {
    url: string;
    title: string;
    description: string;
    image: {
        url: string;
    };
    tags: {
        title: string;
        color: string;
    }[];
}

type CardQueryResult = QueryResult<{
    talks: Card[];
}>

const GET_CARDS = gql`{
    talks {
      title,
      description,
      image {
        url
      },
      url,
      tags {
      	title,
        color
      },
    }
  }`;

interface CardsProps {
    onOpen: (URL: string) => void;
}

const Cards = ({ onOpen }: CardsProps) =>
    <div className="Cards">
        <Query query={GET_CARDS}>
            {({ loading, data }: CardQueryResult) => {
                if (loading || !data) return null;

                return data.talks.map(({ title, description, image, url, tags }) =>
                    <div
                        key={url}
                        className="Card"
                        onClick={() => onOpen(url)}
                    >
                        <img src={STATIC_SERVER + image.url}/>
                        <div className="text">
                            <div className="title">{title}</div>
                            <div className="subtitle">{description}</div>
                            <div className="tags">
                                {tags.map((tag, i) => <Tag key={i} bgColor={tag.color} label={tag.title}/>)}
                            </div>
                        </div>
                    </div>
                )
            }}
        </Query>
    </div>;

interface VideoProps {
    src: string;
}

const YoutubeVideo = ({ src }: VideoProps) => {
    if (src.includes("youtube.com/watch")) {
        src = src.replace("youtube.com/watch?v=", "youtube.com/embed/");
    }

    return (
        <iframe
            width="100%"
            height="100%"
            src={src}
            frameBorder="0"
            allowFullScreen
        />
    )
};

interface CardsState {
    activeVideo?: string,
}

export class CardContainer extends React.Component<{}, CardsState> {
    state: CardsState = {};

    public render() {
        const { activeVideo } = this.state;

        return (
            <div className="cardContainer">
                <div className="contentContainer">
                    <div className="slogan">
                        Our Conference Talks
                    </div>

                    <Cards onOpen={URL => this.setState({ activeVideo: URL })}/>

                    {activeVideo &&
                    <Popup
                        onClose={() => this.setState({ activeVideo: undefined })}
                    >
                        <YoutubeVideo src={activeVideo}/>
                    </Popup>}
                </div>
            </div>
        );
    }
}
