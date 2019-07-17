import * as React from "react";
import gql from "graphql-tag";
import Query from "react-apollo/Query";
import ImageGallery from "react-image-gallery";
import {STATIC_SERVER} from "../../config";

const QUERY = gql`
    {
      cultureimages {
        image {
          url,
          name,
        }
      }
    }
`;

export class CultureGallery extends React.PureComponent {
    public render() {
        return (
            <Query query={QUERY}>
                {({ loading, data }) => {
                    if (loading || !data) return null;

                    const images = data.cultureimages.map((item: any) => ({
                        original: STATIC_SERVER + item.image.url,
                        thumbnail: STATIC_SERVER + item.image.url,
                    }));

                    return <ImageGallery items={images} />
                }}
            </Query>
        )
    }
}
