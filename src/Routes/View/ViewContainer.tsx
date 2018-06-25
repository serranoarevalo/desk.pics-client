import React from "react";
import { Query } from "react-apollo";
import { RouteComponentProps } from "react-router";
import ViewPresenter from "./ViewPresenter";
import { GET_DESK_PIC } from "./ViewQueries";

class ViewContainer extends React.Component<RouteComponentProps<any>> {
  constructor(props: RouteComponentProps<any>) {
    super(props);
  }
  render() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    console.log(id);
    return (
      <Query query={GET_DESK_PIC} variables={{ id }}>
        {({ loading, data, error }) => (
          <ViewPresenter data={data} loading={loading} error={error} />
        )}
      </Query>
    );
  }
}

export default ViewContainer;
