import * as React from 'react';

import Heroes from './heroes/Heroes';

import { Hero } from './Hero';
import { HEROES } from './MockHeroes';

import './App.css';

interface Props {
}

interface State {
  hero: Hero;
  heroes: Hero[];
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hero: {
        id: 0,
        name: ''
      },
      heroes: HEROES
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event: any) {
    this.state.heroes.forEach((hero) => {
      if (hero.id === this.state.hero.id) {
        hero.name = event.target.value;
      }
    });
    this.setState({
      hero: {
        id: this.state.hero.id,
        name: event.target.value
      }
    });
  }

  handleClick(hero: Hero) {
    this.setState({ hero: hero });
  }

  render() {
    const title = 'Tour of Heroes';
    return ([
      <h1 key="a1">{title}</h1>,
      (
        <Heroes
          key="a2"
          hero={this.state.hero}
          heroes={this.state.heroes}
          onChange={(event) => this.handleChange(event)}
          onClick={this.handleClick}
        />
      )
    ]);
  }
}

export default App;
