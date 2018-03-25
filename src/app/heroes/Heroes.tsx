import * as React from 'react';

import { Hero } from '../Hero';

import './Heroes.css';

interface Props {
  hero: Hero;
  onChange: (value: {}) => void;
}

interface State {
  hero: Hero;
}

class Heroes extends React.Component<Props, State> {
  render() {
    return ([
      <h2 key="1">{this.props.hero.name.toUpperCase()} Details</h2>,
      <div key="2"><span>id: </span>{this.props.hero.id}</div>,
      (
        <div key="3">
          <label>name:
            <input type="text" value={this.props.hero.name} onChange={(event) => this.props.onChange(event)} />
          </label>
        </div>
      )
    ]);
  }
}

export default Heroes;
