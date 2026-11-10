import { LoginUser } from '../models/loginUser.model';
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

  async login(userLoginData: LoginUser): Promise<void> {
    await this.loginInput.fill(userLoginData.email);
    await this.passwordInput.fill(userLoginData.password);
    await this.loginButton.click();
  }

  async expectLoginErrorToHaveText(errorMessage: string): Promise<void> {
    await expect.soft(this.loginErrorMessage).toHaveText(errorMessage);
  }

  async expectLoginTitleToContain(expectedTitle: string): Promise<void> {
    await expect.soft(this.page).toHaveTitle(new RegExp(expectedTitle));
  }
}
