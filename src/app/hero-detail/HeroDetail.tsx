import * as React from 'react';

import { Hero } from '../Hero';

import './HeroDetail.css';

interface Props {
  hero: Hero;
  heroes: Hero[];
  onChange: (value: {}) => void;
}

interface State {
  hero: Hero;
  heroes: Hero[];
}

class HeroDetail extends React.Component<Props, State> {
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
      </div>
    );
  }
}

export default HeroDetail;
