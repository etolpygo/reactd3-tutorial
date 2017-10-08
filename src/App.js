import React, { Component } from 'react';
import Preloader from './components/Preloader';
import { loadAllData } from './DataHandling';


class App extends Component {

  state = {
    techSalaries: []
  }

  componentWillMount() {
    loadAllData(data => this.setState(data));
  }

  render() {
    if (this.state.techSalaries.length < 1) {
      return (
        <Preloader />
      );
    }
    else {
      return (
              <div className="App container">
                <h1>Loaded {this.state.techSalaries.length} salaries</h1>
              </div>
            );

    }
  }
}

export default App;
