import { HEROES } from './MockHeroes';
import { MessageService } from './MessageService';

export class HeroService {
  hero: any;

  constructor(private messageService: MessageService) { }

  getHeroes() {
    this.messageService.add('HeroService: fetched heroes');
    return HEROES;
  }

  getHero(id: number) {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
//    this.hero = HEROES.find(hero => hero.id === id);
    this.hero = HEROES[id - 11];
    return this.hero;
  }
}
