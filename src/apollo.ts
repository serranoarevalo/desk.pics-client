import ApolloClient from "apollo-boost";

let uri = "";
if (process.env.NODE_ENV === "development") {
  uri = "http://localhost:4000/graphql";
} else {
  uri = "http://deskpics.now.sh/graphql";
}

const client = new ApolloClient({
  uri
});

export default client;
