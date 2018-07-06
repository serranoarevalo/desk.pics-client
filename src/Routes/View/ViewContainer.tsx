import React from "react";
import { Query } from "react-apollo";
import { RouteComponentProps } from "react-router";
import ViewPresenter from "./ViewPresenter";
import { GET_DESK_PIC } from "./ViewQueries";

interface IRouteProps {
  id: number;
}

class ViewContainer extends React.Component<RouteComponentProps<IRouteProps>> {
  constructor(props: RouteComponentProps<IRouteProps>) {
    super(props);
  }
  render() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    return (
      <Query query={GET_DESK_PIC} variables={{ id }}>
        {({ loading, data, error }) => (
          <ViewPresenter
            data={data.GetDeskPic}
            loading={loading}
            error={error}
          />
        )}
      </Query>
    );
  }
}

export default ViewContainer;
