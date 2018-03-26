import * as React from 'react';

import { Hero } from '../Hero';

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
        }
      </div>
    );
  }
}

export default Heroes;
