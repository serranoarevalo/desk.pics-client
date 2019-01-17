import React from "react";
import { Query } from "react-apollo";
import { GetDeskPics, GetDeskPicsVariables } from "../../types/api";
import HomePresenter from "./HomePresenter";
import { GET_DESK_PICS } from "./HomeQueries";

interface IState {
  page: number;
}

class HomeQuery extends Query<GetDeskPics, GetDeskPicsVariables> {}

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
      <HomeQuery query={GET_DESK_PICS} variables={{ page }}>
        {({ loading, error, data }) => (
          <HomePresenter
            loading={loading}
            error={error}
            data={data}
            page={page}
            onNextClick={this.onNextClick}
            onPrevClick={this.onPrevClick}
          />
        )}
      </HomeQuery>
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
