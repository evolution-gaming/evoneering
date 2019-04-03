import * as React from "react";
import gql from "graphql-tag";
import "./HighlightInfo.css";
import Query from "react-apollo/Query";

const GET_STATISTICS = gql`
  {
    statistics {
      number,
      description,
    }
  }
`;

export interface StatisticItem {
    number: number;
    description: string;
}

export class HighlightInfo extends React.PureComponent {
    render() {
        return (
            <div className="highlightContainer">
                <div className="contentContainer">

                    <Query query={GET_STATISTICS}>
                        {({ loading, data }) => {
                            if (loading || !data) return null;

                            return data.statistics.map((statisticItem: StatisticItem, i:number) => (
                                <div key={i} className="highlightItem">
                                    <div className="highlightNumber">
                                        {statisticItem.number}
                                    </div>
                                    <div className="highlightTitle">
                                        {statisticItem.description}
                                    </div>
                                </div>
                            ));
                        }}
                    </Query>
                </div>
            </div>
        );
    }
}
