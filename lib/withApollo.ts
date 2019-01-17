import withApollo from "next-with-apollo";
import ApolloClient from "apollo-boost";

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      uri: "https://deskpics.now.sh/graphql"
    })
);
