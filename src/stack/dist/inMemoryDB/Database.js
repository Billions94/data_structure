"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createDatabase() {
    class InMemoryDatabase {
        constructor() {
            this.db = {};
        }
        getAll() {
            return Object.values(this.db);
        }
        get(id) {
            return this.db[id];
        }
        set(value) {
            this.db[value.id] = value;
        }
        update(value) {
            const modifiedData = this.db[value.id];
            if (modifiedData) {
                this.db[value.id] = value;
                return modifiedData;
            }
        }
        delete(id) {
            delete this.db[id];
        }
    }
    return new InMemoryDatabase();
}
const userDB = createDatabase();
const fruitsDB = createDatabase();
fruitsDB.set({
    id: '1',
    name: 'Banana',
    taste: 'Sweet',
});
fruitsDB.set({
    id: '5',
    name: 'Lime',
    taste: 'Sour',
});
fruitsDB.set({
    id: '2',
    name: 'Apple',
    taste: 'Sweet',
});
fruitsDB.delete('1');
fruitsDB.delete('5');
console.log('-> before update', fruitsDB.getAll());
fruitsDB.update({
    id: '2',
    name: 'Grapefruit',
    taste: 'Sour',
});
userDB.set({
    id: 1,
    name: 'John',
    occupation: 'Software Engineer',
    age: 30,
    dob: '01/01/2000',
});
console.log('-> after update', fruitsDB.getAll());
//# sourceMappingURL=Database.js.map