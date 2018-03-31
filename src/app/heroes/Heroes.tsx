import * as React from 'react';

import HeroDetail from '../hero-detail/HeroDetail';

import { Hero } from '../Hero';
import { HeroService } from '../HeroService';

import './Heroes.css';

interface Props {
  hero: Hero;
  heroService: HeroService;
  onChange: (value: {}) => void;
  onClick: (value: {}) => void;
}

interface State {
}

class Heroes extends React.Component<Props, State> {
  heroes: Hero[] = this.props.heroService.getHeroes();

  constructor(props: Props) {
    super(props);
  }

  render() {
    const listItems = this.heroes.map((h) =>
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
            onChange={(event) => this.props.onChange(event)}
          />
        }
      </div>
    );
  }
}

export default Heroes;
