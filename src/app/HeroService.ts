import { HEROES } from './MockHeroes';
import { MessageService } from './MessageService';

export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes() {
    this.messageService.add('HeroService: fetched heroes');
    return HEROES;
  }
}
