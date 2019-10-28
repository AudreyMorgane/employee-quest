import React from "react";

import QuoteCitation from "./Components/QuoteCitation";

import axios from "axios";

class App extends React.Component {
  state = {
    simpson: null
  };

  componentDidMount() {
    this.getSimpson();
  }

  getSimpson = this.getSimpson.bind(this);

  getSimpson() {
    axios
      .get("https://quests.wilders.dev/simpsons-quotes/quotes")
      .then(response => response.data)
      .then(data => {
        this.setState({
          simpson: data[0]
        });
      });
  }

  render() {
    const { simpson } = this.state;
    return (
      <div>
        {this.state.simpson ? (
          <QuoteCitation simpson={this.state.simpson} />
        ) : (
          <p>no data</p>
        )}
        <button type="button" onClick={this.getSimpson}>
          Get new simpson 
        </button>
      </div>
    );
  }
}

export default App;
