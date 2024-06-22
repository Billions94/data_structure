export interface User {
  id: number;
  name: string;
  occupation: string;
  age: number;
  dob: string;
}

export type Property = User;

export function createUser(properties: Property, users: User[]): User {
  validatePropertyInput(properties);
  users.push(properties);
  return properties;
}

export function validatePropertyInput(input: Property): void {
  if (input.name.trim().length <= 0)
    throw new Error('Name property cannot be empty');

  if (input.occupation.trim().length <= 0)
    throw new Error('Occupation property cannot be empty');

  if (input.age <= 0) throw new Error('Age property must be greater than 1');

  if (input.dob.trim().length <= 0)
    throw new Error('DOB property cannot be empty');
}

export function deleteUser(userId: number, users: User[]): void {
  const index = users.findIndex((i) => i.id === userId);
  users.splice(index, 1);
}
