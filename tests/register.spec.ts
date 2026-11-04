import { LoginPage } from '../src/pages/login.page';
import { RegisterPage } from '../src/pages/register.page';
import { test } from '@playwright/test';

test.describe('Verify register page', () => {
  test('Valid positive register', async ({ page }) => {
    //Arrange
    const registerPage = new RegisterPage(page);
    const loginPage = new LoginPage(page);

    const userFirstName = 'Jan';
    const userLastName = 'Kowalski';
    const userEmail = `${Math.random()}@test.test`;
    const userPassword = 'test1';

    //Act
    await registerPage.goto();
    await registerPage.register(
      userFirstName,
      userLastName,
      userEmail,
      userPassword,
    );

    //Assert
    await loginPage.waitForUrl();
    await registerPage.expectTitleToContain('Login');
  });

  // test('Valid negative register with used email', async ({}) => {
  //   //Arrange
  // });
});
