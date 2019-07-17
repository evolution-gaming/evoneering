import * as React from "react";
import gql from "graphql-tag";
import Query from "react-apollo/Query";

const GET_INTRO = gql`
{
  intros {
    title,
  }
}
`;

export class IntroContainer extends React.PureComponent {
    public render() {
        return (
            <Query query={GET_INTRO}>
                {({ loading, data }) => {
                    if (loading || !data) return null;

                    const intro = data.intros[0];
                    const longIntro = data.intros[1];

                    return <>
                        <div className="slogan">
                            {intro.title}
                        </div>
                        <div className="longDescription">
                            {longIntro.title}
                        </div>
                    </>
                }}
            </Query>
        )
    }
}
