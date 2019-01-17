import withApollo from "next-with-apollo";
import ApolloClient from "apollo-boost";

export default withApollo(
  () =>
    new ApolloClient({
      uri: "https://deskpics.now.sh/graphql"
    })
);
