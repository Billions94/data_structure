export interface User {
    id: number;
    name: string;
    occupation: string;
    age: number;
    dob: string;
}
export type Property = User;
export declare function createUser(properties: Property, users: User[]): User;
export declare function validatePropertyInput(input: Property): void;
export declare function deleteUser(userId: number, users: User[]): void;
