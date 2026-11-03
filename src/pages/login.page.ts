import { BasePage } from './base.page';
import { Page, expect } from '@playwright/test';

export class LoginPage extends BasePage {
  url = '/login';
  loginErrorMessage = this.page.getByTestId('login-error');

  constructor(page: Page) {
    super(page);
  }

  async login(userLogin: string, userPassword: string): Promise<void> {
    await this.page
      .getByRole('textbox', { name: 'Enter User Email' })
      .fill(userLogin);
    await this.page
      .getByRole('textbox', { name: 'Enter Password' })
      .fill(userPassword);
    await this.page.getByRole('button', { name: 'LogIn' }).click();
  }

  async expectLoginErrorToHaveText(errorMessage: string): Promise<void> {
    await expect.soft(this.loginErrorMessage).toHaveText(errorMessage);
  }

  async expectLoginTitleToContain(expectedTitle: string): Promise<void> {
    await expect.soft(this.page).toHaveTitle(new RegExp(expectedTitle));
  }
}
