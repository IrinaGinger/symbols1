import Character from './class/character';
import Team from './class/team';

let team = new Team();

let char1 = new Character('Мечник', 'Swordsman');
char1.attack = 100;
char1.defence = 20;

let char2 = new Character('Лучник', 'Bowman');
char2.health = 50;
char2.level = 1;
char2.attack = 40;
char2.defence = 10;

team.add(char1);
team.add(char2);

for (let item of team) {
  console.log(item);
}

