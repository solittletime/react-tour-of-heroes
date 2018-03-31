import * as React from 'react';

import Heroes from './heroes/Heroes';
import Messages from './messages/Messages';

import { Hero } from './Hero';
import { HEROES } from './MockHeroes';
import { HeroService } from './HeroService';
import { MessageService } from './MessageService';

import './App.css';

interface Props {
}

interface State {
  hero: Hero;
  heroes: Hero[];
  messages: string[];
}

class App extends React.Component<Props, State> {

  messageService: MessageService = new MessageService();
  heroService: HeroService = new HeroService(this.messageService);

  constructor(props: Props) {
    super(props);

    this.state = {
      hero: {
        id: 0,
        name: ''
      },
      heroes: HEROES,
      messages: this.messageService.messages
    };
    this.handleHeroesChange = this.handleHeroesChange.bind(this);
    this.handleHeroesClick = this.handleHeroesClick.bind(this);
    this.handleMessagesClick = this.handleMessagesClick.bind(this);
  }

  handleHeroesChange(event: any) {
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

  handleHeroesClick(hero: Hero) {
    this.setState({ hero: hero });
  }

  handleMessagesClick() {
    this.messageService.clear();
    this.setState({ messages: this.messageService.messages });
  }

  render() {
    const title = 'Tour of Heroes';
    return ([
      <h1 key="a1">{title}</h1>,
      (
        <Heroes
          hero={this.state.hero}
          heroService={this.heroService}
          onChange={(event) => this.handleHeroesChange(event)}
          onClick={this.handleHeroesClick}
        />
      ),
      (
        <Messages
          messages={this.state.messages}
          onClick={this.handleMessagesClick}
        />
      )
    ]);
  }
}

export default App;
