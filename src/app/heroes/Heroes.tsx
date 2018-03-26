import * as React from 'react';

import { Hero } from '../Hero';
import HeroDetail from '../hero-detail/HeroDetail';

import './Heroes.css';

interface Props {
  hero: Hero;
  heroes: Hero[];
  onChange: (value: {}) => void;
  onClick: (value: {}) => void;
}

interface State {
  hero: Hero;
  heroes: Hero[];
}

class Heroes extends React.Component<Props, State> {
  render() {
    const listItems = this.props.heroes.map((h) =>
      (
        <li
          className={(this.props.hero.id === h.id ? 'selected' : '')}
          key={h.id}
          onClick={() => this.props.onClick(h)}
        >
          <span className="badge">{h.id}</span> {h.name}
        </li>
      )
    );

    return (
      <div>
        <h2>My Heroes</h2>
        <ul className="heroes">{listItems}</ul>
        {this.props.hero.id > 0 &&
          <HeroDetail
            hero={this.props.hero}
            heroes={this.props.heroes}
            onChange={(event) => this.props.onChange(event)}
          />
        }
      </div>
    );
  }
}

export default Heroes;
