import { gql } from "apollo-boost";

export const GET_DESK_PICS = gql`
  query GetDeskPics($page: Int!) {
    GetDeskPics(page: $page) {
      ok
      error
      pages
      currentPage
      deskPics {
        id
        user {
          firstName
        }
        drink {
          name
        }
        locationName
        thumbnailUrl
        views
      }
    }
  }
`;
