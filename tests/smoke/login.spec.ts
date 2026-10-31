import { LoginPage } from '../../src/pages/login.page';
import { WelcomePage } from '../../src/pages/welcome.page';
import { expect, test } from '@playwright/test';

test.describe('Verify login page', () => {
  test('Valid positive login', async ({ page }) => {
    //Arrange
    const loginPage = new LoginPage(page);
    const welcomePage = new WelcomePage(page);
    const userLogin = 'Moses.Armstrong@Feest.ca';
    const userPassword = 'test1';

    //Act
    await loginPage.goto();
    await loginPage.login(userLogin, userPassword);

    //Assert
    expect(await welcomePage.title()).toContain('Welcome');
  });
});
