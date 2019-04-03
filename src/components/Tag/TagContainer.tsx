import * as React from "react";
import gql from "graphql-tag";
import Query from "react-apollo/Query";
import { Tag } from "./Tag";

const GET_TAGS = gql`
  {
    tags {
      title,
      color,
    }
  }
`;

interface TagProps {
    title: string;
    color: string;
}

export class TagContainer extends React.PureComponent {
    public render() {
        return (
            <Query query={GET_TAGS}>
                {({ loading, data }) => {
                    if (loading || !data) return null;

                    const tags = data.tags.map((
                        { title, color }: TagProps, i: number) => <Tag key={i} label={title} bgColor={color}/>
                    );

                    return [...tags]
                }}
            </Query>
        )
    }
}
