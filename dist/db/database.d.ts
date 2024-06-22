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
export declare function createDatabase<T extends BaseRecord>(): Database<T>;
export {};
