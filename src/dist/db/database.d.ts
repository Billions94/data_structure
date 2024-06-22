interface BaseRecord {
    id: string | number;
}
export interface Database<T extends BaseRecord> {
    getAll(): T[];
    get(value: T['id']): T | undefined;
    set(value: T): void;
    update(value: T): T | undefined;
    delete(id: T['id']): void;
}
export declare function createDatabase<T extends BaseRecord>(): Database<T>;
export {};
