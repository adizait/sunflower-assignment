import { faker } from '@faker-js/faker';

export class User {
    constructor(
        public firstName: string = faker.person.firstName(),
        public lastName: string = faker.person.lastName(),
        public email: string = faker.internet.email(),
        public password: string = process.env.PASSWORD!,
        public gender?: 'Male' | 'Female',
    ) {};
};
