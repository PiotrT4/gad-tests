import { BasePage } from './base.page';
import { Page, expect } from '@playwright/test';

export class LoginPage extends BasePage {
  url = '/login/';

  loginInput = this.page.getByRole('textbox', { name: 'Enter User Email' });
  passwordInput = this.page.getByRole('textbox', { name: 'Enter Password' });
  loginButton = this.page.getByRole('button', { name: 'LogIn' });

  loginErrorMessage = this.page.getByTestId('login-error');

  constructor(page: Page) {
    super(page);
  }

  async login(userLogin: string, userPassword: string): Promise<void> {
    await this.loginInput.fill(userLogin);
    await this.passwordInput.fill(userPassword);
    await this.loginButton.click();
  }

  async expectLoginErrorToHaveText(errorMessage: string): Promise<void> {
    await expect.soft(this.loginErrorMessage).toHaveText(errorMessage);
  }

  async expectLoginTitleToContain(expectedTitle: string): Promise<void> {
    await expect.soft(this.page).toHaveTitle(new RegExp(expectedTitle));
  }
}
