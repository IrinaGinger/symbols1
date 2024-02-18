export default class Team {
    constructor() {
        this.members = new Set();
        this[Symbol.iterator] = function() {
            let current = 0;
            let members = [...this.members];
            return {
                next() {
                    if (current >= members.length) {
                        return {
                            done: true,
                            value: undefined, 
                        }
                    }
                    let result = {
                          value: members[current],
                          done: false,
                      };
                    current++;
                    return result;
                }
            }
        }
    }

    add(character) {
        if (this.members.has(character)) {
            return new Error('Такой персонаж в команде уже есть');
        }
        this.members.add(character);        
    }

    addAll(...characters) {
        characters.forEach((item) => {
            this.members.add(item);
        });
    } 
}