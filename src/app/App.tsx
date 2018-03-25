import * as React from 'react';

import { Hero } from './Hero';
import Heroes from './heroes/Heroes';

import './App.css';

interface Props {
}

interface State {
  hero: Hero;
}

class App extends React.Component<Props, State> {
  constructor() {
    super({});

    this.state = {
      hero: {
        id: 1,
        name: 'Windstorm'
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: any) {
    this.setState({
      hero: {
        id: this.state.hero.id,
        name: event.target.value
      }
    });
  }

  render() {
    const title = 'Tour of Heroes';
    return ([
      <h1 key="1">{title}</h1>,
      (
        <Heroes
          hero={this.state.hero}
          onChange={(event) => this.handleChange(event)}
        />
      )
    ]);
  }
}

export default App;
