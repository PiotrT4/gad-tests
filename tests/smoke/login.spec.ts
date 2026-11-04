import { LoginPage } from '../../src/pages/login.page';
import { WelcomePage } from '../../src/pages/welcome.page';
import {
  testUser1,
  testUserWithIncorrectPassword,
} from '../../src/test-data/user.data';
import { test } from '@playwright/test';

test.describe('Verify login page', () => {
  test('Valid positive login', async ({ page }) => {
    //Arrange
    const loginPage = new LoginPage(page);
    const welcomePage = new WelcomePage(page);
    const userLogin = testUser1.userEmail;
    const userPassword = testUser1.userPassword;

    //Act
    await loginPage.goto();
    await loginPage.login(userLogin, userPassword);

    //Assert
    // expect(await welcomePage.title()).toContain('Welcome');
    welcomePage.expectTitleToContain('Welcome');
  });

  test('Valid negative login with incorrect password', async ({ page }) => {
    //Arrange
    const loginPage = new LoginPage(page);
    const userLogin = testUser1.userEmail;
    const userIncorrectPassword =
      testUserWithIncorrectPassword.userIncorrectPassword;

    //Act
    await loginPage.goto();
    await loginPage.login(userLogin, userIncorrectPassword);

    //Assert
    // await expect.soft(await loginPage.loginErrorMessage).toHaveText('Invalid username or password');
    // expect.soft(await loginPage.title()).toContain('Login');

    // pod standardy Piotra
    await loginPage.expectLoginErrorToHaveText('Invalid username or password');
    await loginPage.expectLoginTitleToContain('Login');
  });
});
