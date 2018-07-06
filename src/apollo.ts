import ApolloClient from "apollo-boost";

let uri = "";
if (process.env.NODE_ENV === "development") {
  uri = "https://deskpics.now.sh/graphql";
} else {
  uri = "https://deskpics.now.sh/graphql";
}

const client = new ApolloClient({
  uri
});

export default client;
