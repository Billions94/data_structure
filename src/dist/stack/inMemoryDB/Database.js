"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDatabase = void 0;
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
exports.createDatabase = createDatabase;
const fruitsDB = createDatabase();
fruitsDB.set({
    id: '1',
    name: 'Banana',
    taste: 'Sweet',
});
console.log(fruitsDB.getAll());
//# sourceMappingURL=Database.js.map