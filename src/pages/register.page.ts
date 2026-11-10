import { RegisterUser } from '../models/registerUser.model';
import { BasePage } from './base.page';
import { Page, expect } from '@playwright/test';

export class RegisterPage extends BasePage {
  url = '/register.html';

  firstNameInput = this.page.getByTestId('firstname-input');
  lastNameInput = this.page.getByTestId('lastname-input');
  emailInput = this.page.getByTestId('email-input');
  passwordInput = this.page.getByTestId('password-input');
  registerButton = this.page.getByTestId('register-button');
  emailErrorMessage = this.page.getByText('Please provide a valid email');

  constructor(page: Page) {
    super(page);
  }

  async register(registerUserData: RegisterUser): Promise<void> {
    await this.firstNameInput.fill(registerUserData.firstName);
    await this.lastNameInput.fill(registerUserData.lastName);
    await this.emailInput.fill(registerUserData.email);
    await this.passwordInput.fill(registerUserData.password);
    await this.registerButton.click();
  }

  async expectEmailErrorMessageToContain(
    expectedErrorMessage: string,
  ): Promise<void> {
    await expect(this.emailErrorMessage).toContainText(expectedErrorMessage);
  }
}
