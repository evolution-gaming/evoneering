import * as React from "react";
import gql from "graphql-tag";
import Query from "react-apollo/Query";
import { Tag } from "./Tag";

const GET_TAGS = gql`
  {
    tags {
      name,
      color,
    }
  }
`;

export class TagContainer extends React.PureComponent {
    public render() {
        return (
            <Query query={GET_TAGS}>
                {({ loading, data }) => {
                    if (loading) return null;

                    const tags = data.tags.map((
                        { name, color }: { name: string; color: string }, i: number) => <Tag key={i} label={name} bgColor={color}/>
                    );

                    return [...tags]
                }}
            </Query>
        )
    }
}
