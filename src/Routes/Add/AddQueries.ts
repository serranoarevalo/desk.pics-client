import { gql } from "apollo-boost";

export const UPLOAD_DESK_PIC = gql`
  mutation UploadDeskPic(
    $drinkName: String!
    $photoUrl: String!
    $locationName: String!
  ) {
    UploadDeskPic(
      drinkName: $drinkName
      photoUrl: $photoUrl
      locationName: $locationName
    ) {
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
        photoUrl
      }
    }
  }
`;

export const CONNECT_USER = gql`
  mutation ConnectUser(
    $email: String
    $firstName: String!
    $lastName: String!
    $fbUserId: String!
  ) {
    ConnectUser(
      email: $email
      firstName: $firstName
      lastName: $lastName
      fbUserId: $fbUserId
    ) {
      ok
      token
    }
  }
`;
