import {gql} from '@apollo/client';
export const pastLaunches = gql`
  query launchesPast($limit: Int) {
    launchesPast(limit: $limit) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        flickr_images
      }
      rocket {
        rocket_name
      }
    }
  }
`;
