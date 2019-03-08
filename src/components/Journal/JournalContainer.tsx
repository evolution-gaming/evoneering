import * as React from "react";
import gql from "graphql-tag";
import Query from "react-apollo/Query";
import { JournalItem, JournalItemProps } from "./JournalItem";

const GET_POSTS = gql`
  {
    posts {
      id,
      title,
      paragraph,
      URL
    }
  }
`;

export class JournalContainer extends React.PureComponent {
    public render() {
        return (
            <Query query={GET_POSTS}>
                {({ loading, data }) => {
                    if (loading) return null;

                    const items = data.posts.map((props: JournalItemProps, i: number) => <JournalItem key={i} {...props}/>);
                    return [...items]
                }}
            </Query>
        )
    }
}
