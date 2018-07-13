import React from "react";
import AboutPresenter from "./AboutPresenter";

interface IState {
  lang: "en" | "kr";
}

class AboutContainer extends React.Component<{}, IState> {
  constructor(props) {
    super(props);
    this.state = {
      lang: "kr"
    };
  }
  render() {
    const { lang } = this.state;
    return <AboutPresenter lang={lang} onSwitchClick={this.onSwitchClick} />;
  }

  private onSwitchClick = () => {
    const { lang } = this.state;
    if (lang === "en") {
      this.setState({
        lang: "kr"
      });
    } else {
      this.setState({
        lang: "en"
      });
    }
  };
}
export default AboutContainer;
