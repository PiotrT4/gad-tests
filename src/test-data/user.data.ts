export const testUser1 = {
  userEmail: process.env.USER_EMAIL ?? '[NOT SET]',
  userPassword: process.env.USER_PASSWORD ?? '[NOT SET]',
};

export const testUserWithIncorrectPassword = {
  userEmail: process.env.USER_EMAIL ?? '[NOT SET]',
  userIncorrectPassword: process.env.USER_INCORRECT_PASSWORD ?? '[NOT SET]',
};
