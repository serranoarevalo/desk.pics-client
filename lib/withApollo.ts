import withApollo from "next-with-apollo";
import ApolloClient from "apollo-boost";

let uri = "";
if (process.env.NODE_ENV === "development") {
  uri = "http://localhost:4000/graphql";
} else {
  uri = "https://deskpics.now.sh/graphql";
}

export default withApollo(
  () =>
    new ApolloClient({
      uri
    })
);
