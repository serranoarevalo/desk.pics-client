import React from "react";
import { Query } from "react-apollo";
import HomePresenter from "./HomePresenter";
import { GET_DESK_PICS } from "./HomeQueries";

interface IState {
  page: 0;
}

class HomeContainer extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      page: 0
    };
  }
  render() {
    const { page } = this.state;
    return (
      <Query query={GET_DESK_PICS} variables={{ page }}>
        {({ loading, error, data }) => (
          <HomePresenter loading={loading} error={error} data={data} />
        )}
      </Query>
    );
  }
}

export default HomeContainer;
