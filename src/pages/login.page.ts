import { BasePage } from './base.page';
import { Page } from '@playwright/test';

export class LoginPage extends BasePage {
  url = '/login';

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
}
