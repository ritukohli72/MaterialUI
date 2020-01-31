import React from "react";
import ReactDOM from "react-dom";
import Demo from "./demo";
import Detail from "./detailWW";
import { BrowserRouter, Route } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      records: []
    };
  }

  componentDidMount() {
    fetch("https://mddev.mdcms.ch/mdrdemod/CLNTAPI31")
      .then(res => res.json())
      .then(records => {
        this.setState({ records: records });
      });
  }

  render() {
    let { records } = this.state;

    return (
      records && (
        <BrowserRouter>
          <div>
            <Route
              exact
              path="/"
              render={props => <Demo {...props} records={records} />}
            />

            <Route
              path="/:id"
              render={props => <Detail {...props} records={records} />}
            />
          </div>
        </BrowserRouter>
      )
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
