import { LoginUser } from '../models/loginUser.model';

export const testUser1: LoginUser = {
  email: process.env.USER_EMAIL ?? '[NOT SET]',
  password: process.env.USER_PASSWORD ?? '[NOT SET]',
};

export const testUserWithIncorrectPassword: LoginUser = {
  email: process.env.USER_EMAIL ?? '[NOT SET]',
  password: process.env.USER_INCORRECT_PASSWORD ?? '[NOT SET]',
};
