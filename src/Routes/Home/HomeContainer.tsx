import React from "react";
import { Query } from "react-apollo";
import HomePresenter from "./HomePresenter";
import { GET_DESK_PICS } from "./HomeQueries";

interface IState {
  page: number;
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
          <HomePresenter
            loading={loading}
            error={error}
            data={data.GetDeskPics}
            page={page}
            onNextClick={this.onNextClick}
            onPrevClick={this.onPrevClick}
          />
        )}
      </Query>
    );
  }
  private onNextClick = (): void => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1
      };
    });
  };

  private onPrevClick = (): void => {
    this.setState(prevState => {
      return {
        page: prevState.page - 1
      };
    });
  };
}

export default HomeContainer;
