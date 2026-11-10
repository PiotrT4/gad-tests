import { randomUserFactory } from '../src/factories/user.factory';
import { RegisterUser } from '../src/models/registerUser.model';
import { LoginPage } from '../src/pages/login.page';
import { RegisterPage } from '../src/pages/register.page';
import { test } from '@playwright/test';

test.describe('Verify register page', () => {
  test('Valid positive register', async ({ page }) => {
    //Arrange
    const registerPage = new RegisterPage(page);
    const loginPage = new LoginPage(page);
    const registerUserData = randomUserFactory();

    //Act
    await registerPage.goto();
    await registerPage.register(registerUserData);

    //Assert
    await loginPage.waitForUrl();
    await registerPage.expectTitleToContain('Login');
  });

  test('negative register - incorrect email', async ({ page }) => {
    //Arrange
    const registerPage = new RegisterPage(page);

    const registerUserData: RegisterUser = randomUserFactory();
    registerUserData.email = 'qwerty123#';

    //Act
    await registerPage.goto();
    await registerPage.register(registerUserData);

    //Assert
    await registerPage.expectEmailErrorMessageToContain(
      'Please provide a valid email address',
    );
  });
});
