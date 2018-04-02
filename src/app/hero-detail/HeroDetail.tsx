import * as React from 'react';

import { Hero } from '../Hero';
import { HeroService } from '../HeroService';

import './HeroDetail.css';

interface Props {
  routeProps: any;
  hero: Hero;
  heroService: HeroService;
  onChange: (value: {}) => void;
}

interface State {
}

class HeroDetail extends React.Component<Props, State> {
  heroes: any = this.props.heroService.getHero(this.props.hero.id);

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2> {this.props.hero.name.toUpperCase()} Details</h2>
        <div><span>id: </span>{this.props.hero.id}</div>
        <div>
          <label><span>name: </span>
            <input
              type="text"
              value={this.props.hero.name}
              onChange={(event) => this.props.onChange(event)}
            />
          </label>
        </div>
        <button onClick={() => this.props.routeProps.history.goBack()}>go back</button>
      </div>
    );
  }
}

export default HeroDetail;
