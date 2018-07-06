import { gql } from "apollo-boost";

export const GET_DESK_PICS = gql`
  query GetDeskPics($page: Int!) {
    GetDeskPics(page: $page) {
      ok
      error
      deskPics {
        id
        user {
          firstName
        }
        drink {
          name
        }
        locationName
        officialUrl
      }
    }
  }
`;
