import * as React from 'react';
import { Link } from 'react-router-dom';

import { Hero } from '../Hero';
import { HeroService } from '../HeroService';

import './Dashboard.css';

interface Props {
  hero: Hero;
  heroService: HeroService;
  onClick: (value: {}) => void;
}

interface State {
}

class Dashboard extends React.Component<Props, State> {
  heroes: Hero[] = this.props.heroService.getHeroes().slice(1, 5);

  constructor(props: Props) {
    super(props);
  }

  render() {
    const linkItems = this.heroes.map((hero) =>
      (
        <Link
          to={`/detail/${hero.id}`}
          className="col-1-4"
          key={hero.id}
          onClick={() => this.props.onClick(hero)}
        >
          <div className="module hero">
            <h4>{hero.name}</h4>
          </div>
        </Link>
      )
    );

    return (
      <div>
        <h3>Top Heroes</h3>
        <div className="grid grid-pad">
          {linkItems}
        </div>
      </div>
    );
  }
}

export default Dashboard;
