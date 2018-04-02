import * as React from 'react';
import { Link } from 'react-router-dom';

import { Hero } from '../Hero';
import { HeroService } from '../HeroService';

import './Heroes.css';

interface Props {
  hero: Hero;
  heroService: HeroService;
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
        <Link
          to={`/detail/${h.id}`}
        >
          <span className="badge">{h.id}</span> {h.name}
        </Link>
        </li>
      )
    );

    return (
      <div>
        <h2>My Heroes</h2>
        <ul className="heroes">{listItems}</ul>
      </div>
    );
  }
}

export default Heroes;
