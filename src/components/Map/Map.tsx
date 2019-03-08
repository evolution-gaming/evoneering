import React from "react";
import "./Map.css";
import { Button, ButtonTheme } from "../Button/Button";

export enum MapTheme {
    Light = "light",
    Dark = "dark",
}

export interface MapProps {}
export interface MapState {
    town?: string;
}
interface Hex {
    transform: string;
    town: string;
    country: string;
}
const hexes: Hex[] = [
    {
        town: "Riga",
        country: "Latvia",
        transform: "translate(1077.6122336453602,84.33728115356014)",
    },
    {
        town: "Tallinn",
        country: "Estonia",
        transform: "translate(1087.5331018909421,66.35694509170698)",
    },
    {
        town: "Amsterdam",
        country: "Netherlands",
        transform: "translate(978.3243426606336,120.27815114503974)",
    },
    {
        town: "Stockholm",
        country: "Sweden",
        transform: "translate(1037.8891563985787,48.39641116208053)",
    },
    {
        town: "London",
        country: "UK",
        transform: "translate(938.621067546079,120.27815114503974)",
    },
    {
        town: "New Jersey",
        country: "USA",
        transform: "translate(571.271712608372,210.1204250576254)",
    },
    {
        town: "Vancouver",
        country: "Canada",
        transform: "translate(293.28938040980967,138.2386850746662)",
    },
    {
        town: "Spa",
        country: "Belgium",
        transform: "translate(1008.1067495296062,138.2386850746662)",
    },
    {
        town: "Tbilisi",
        country: "Georgia",
        transform: "translate(1256.306674859196,264.0218289787315)",
    },
    {
        town: "Silema",
        country: "Malta",
        transform: "translate(1027.9682881529968,281.9823629083579)",
    },
    {
        town: "Bucharest",
        country: "Romania",
        transform: "translate(1087.5331018909421,174.17955506614578)",
    },
    {
        town: "Murcia",
        country: "Spain",
        transform: "translate(918.7595289226883,228.08095898725188)",
    },
];
export class Map extends React.PureComponent<MapProps, MapState> {
    public state: MapState = {};
    public render() {
        return (
            <>
                <div className="map">
                    <img className="mapEvoLogo" src="/evoLogo.svg" />
                    <div className="mapBody">
                        <img className="mapBackground" src="/map.svg" width="100%" />
                        <div className="mapOverlay">
                            <svg version="1.1" viewBox="0 0 2560 1289">
                                <g>
                                    <g transform="translate(282.24976562496346,455.0926052515138) scale(1)">
                                        <g fillOpacity="1" strokeWidth="0">
                                            {hexes.map(({ transform, town }, index) => {
                                                return (
                                                    <g
                                                        key={index}
                                                        transform={transform}
                                                        fill={town === this.state.town ? "#FF0000" : "#0000FF"}
                                                    >
                                                        <path d="M8.5,5.5 L0.5,9.5 L-7.5,5.5 L-7.5,-4.5 L0.5,-8.5 L8.5,-4.5 Z" />
                                                    </g>
                                                );
                                            })}
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="slogan">Offices</div>

                <div className="buttons">
                    {hexes.map(({ town, country }, index) => {
                        return (
                            <Button
                                key={index}
                                onClick={() => this.highlight(town)}
                                label={`${town} (${country})`}
                                theme={ButtonTheme.Light}
                            />
                        );
                    })}
                </div>
            </>
        );
    }
    private highlight = (town: string) => {
        this.setState({ town });
    };
}
