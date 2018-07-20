import { gql } from "apollo-boost";

export const GET_DESK_PIC = gql`
  query GetDeskPic($id: Int!) {
    GetDeskPic(deskPicId: $id) {
      ok
      error
      deskPic {
        id
        user {
          firstName
        }
        drink {
          name
        }
        locationName
        bigUrl
        views
      }
    }
  }
`;
