import * as React from "react";
import "./HighlightInfo.css";

export class HighlightInfo extends React.PureComponent {
    render() {
        return (
            <div className="highlightContainer">
                <div className="contentContainer">
                    <div className="highlightItem">
                        <div className="highlightNumber">
                            200
                        </div>
                        <div className="highlightTitle">
                            Developers
                        </div>
                    </div>

                    <div className="highlightItem">
                        <div className="highlightNumber">
                            6
                        </div>
                        <div className="highlightTitle">
                            Offices
                        </div>
                    </div>

                    <div className="highlightItem">
                        <div className="highlightNumber">
                            3
                        </div>
                        <div className="highlightTitle">
                            Departments
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
