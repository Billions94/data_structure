"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.validatePropertyInput = exports.createUser = void 0;
function createUser(properties, users) {
    validatePropertyInput(properties);
    users.push(properties);
    return properties;
}
exports.createUser = createUser;
function validatePropertyInput(input) {
    if (input.name.trim().length <= 0)
        throw new Error('Name property cannot be empty');
    if (input.occupation.trim().length <= 0)
        throw new Error('Occupation property cannot be empty');
    if (input.age <= 0)
        throw new Error('Age property must be greater than 1');
    if (input.dob.trim().length <= 0)
        throw new Error('DOB property cannot be empty');
}
exports.validatePropertyInput = validatePropertyInput;
function deleteUser(userId, users) {
    const index = users.findIndex((i) => i.id === userId);
    users.splice(index, 1);
}
exports.deleteUser = deleteUser;
//# sourceMappingURL=index.js.map