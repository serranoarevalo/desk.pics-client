import React from "react";
import { Query } from "react-apollo";
import { RouteComponentProps } from "react-router";
import { GetDeskPic, GetDeskPicVariables } from "../../types/api";
import ViewPresenter from "./ViewPresenter";
import { GET_DESK_PIC } from "./ViewQueries";

interface IRouteProps {
  id: number;
}

class ViewQuery extends Query<GetDeskPic, GetDeskPicVariables> {}

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
      <ViewQuery query={GET_DESK_PIC} variables={{ id }}>
        {({ loading, data, error }) => (
          <ViewPresenter data={data} loading={loading} error={error} />
        )}
      </ViewQuery>
    );
  }
}

export default ViewContainer;
