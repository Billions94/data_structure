interface Fruits {
  id: string;
  name: string;
  taste: string;
}

interface BaseRecord {
  id: string | number;
}

export interface Database<T extends BaseRecord> {
  getAll(): T[];
  get(value: T['id']): T | undefined;
  set(value: T): T;
  update(value: T): T | undefined;
  delete(id: T['id']): void;
  init(): void;
}

// Factory method
export function createDatabase<T extends BaseRecord>(): Database<T> {
  class InMemoryDatabase implements Database<T> {
    private db: Record<string | number, T> = {};
    private autoIncrement: number = 1;

    getAll(): T[] {
      return Object.values(this.db);
    }

    get(id: T['id']): T | undefined {
      return this.db[id];
    }

    set(value: T): T {
      value.id = this.autoIncrement;
      this.db[value.id] = value;
      this.autoIncrement++;
      return value;
    }

    update(value: T): T | undefined {
      const modifiedData = this.db[value.id];

      if (modifiedData) {
        this.db[value.id] = value;
        return this.db[value.id];
      }
    }

    delete(id: T['id']): void {
      delete this.db[id];
      this.autoIncrement--;
    }

    init() {
      console.log('Database initialized');
    }
  }

  // Singleton instance
  return new InMemoryDatabase();
}
