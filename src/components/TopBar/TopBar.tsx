import React from "react";
import "./TopBar.css";
import { Logo } from "../Logo/Logo";
import { FacebookIcon } from "../FacebookIcon/FacebookIcon";
import { TwitterIcon } from "../TwitterIcon/TwitterIcon";

export interface TopBarProps {
}

export class TopBar extends React.PureComponent<TopBarProps> {
    public render() {
        return (
            <div className={"TopBar"}>
                <div className={"logoContainer"}>
                    <Logo/>
                </div>

                <div className={"navigationContainer"}>
                    <div>
                        <a href="#technologies">Technologies</a>
                    </div>
                    <div>
                        <a href="#opensource">Open-source</a>
                    </div>
                    <div>
                        <a href="#talks">Talks</a>
                    </div>
                    <div>
                        <a href="#journal">Journal</a>
                    </div>
                    <div>
                        <a href="https://www.evolutiongamingcareers.com/engineering-positions/" target="_blank">Jobs</a>
                    </div>
                    <div>
                        <a href="https://www.evolutiongaming.com/" target="_blank">Company</a>
                    </div>
                </div>
                <div className={"socialContainer"}>
                    <a href="https://www.facebook.com/evoneering" target="_blank">
                        <FacebookIcon/>
                    </a>
                    <a href="https://twitter.com/evoneering" target="_blank">
                        <TwitterIcon/>
                    </a>
                </div>
            </div>
        )
    }
}
