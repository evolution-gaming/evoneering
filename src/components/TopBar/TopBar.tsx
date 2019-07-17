import React from "react";
import "./TopBar.css";
import {Logo} from "../Logo/Logo";
import {FacebookIcon} from "../FacebookIcon/FacebookIcon";
import {TwitterIcon} from "../TwitterIcon/TwitterIcon";
import {BurgerIcon} from "../BurgerIcon/BurgerIcon";

export interface TopBarProps {
}

export class TopBar extends React.PureComponent<TopBarProps> {
    state = {
        menuOpen: false,
    };

    public render() {
        const wrapperClass = this.state.menuOpen ? "navigationWrapper open" : "navigationWrapper";
        return (
            <div className={"TopBar"}>
                <div className={"logoContainer"}>
                    <Logo/>
                </div>

                <div className={wrapperClass}>
                    <div className={"backdrop"} onClick={this.closeMenu}/>
                    <div className={"menuIcon"} onClick={this.openMenu}>
                        <BurgerIcon/>
                    </div>

                    <div className={"navigationContainer"} onClick={this.closeMenu}>
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
                            <a href="#locations">Locations</a>
                        </div>
                        <div>
                            <a href="#culture">Our Culture</a>
                        </div>
                        <div>
                            <a href="#jobs">Jobs</a>
                        </div>
                        <div>
                            <a href="https://www.evolutiongaming.com/" target="_blank">Company</a>
                        </div>
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

    private openMenu = () => this.setState({menuOpen: true});
    private closeMenu = () => this.setState({menuOpen: false});
}
