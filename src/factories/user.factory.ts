import { RegisterUser } from '../models/registerUser.model';
import { fakerEN } from '@faker-js/faker';

export function randomUserFactory(): RegisterUser {
  const registerUserData: RegisterUser = {
    firstName: fakerEN.person.firstName().replace(/[^a-zA-Z]/g, ''),
    lastName: fakerEN.person.lastName().replace(/[^a-zA-Z]/g, ''),
    email: '',
    password: fakerEN.internet.password({ length: 12 }),
  };

  registerUserData.email = fakerEN.internet.email({
    firstName: registerUserData.firstName,
    lastName: registerUserData.lastName,
    allowSpecialCharacters: true,
  });

  return registerUserData;
}
