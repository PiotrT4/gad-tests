import { MainMenu } from '../components/main-menu.component';
import { BasePage } from './base.page';
import { Locator, Page } from '@playwright/test';

export class ArticlesPage extends BasePage {
  url = '/articles.html';
  mainMenu = new MainMenu(this.page);

  addArticlesButtonLogged: Locator;

  constructor(page: Page) {
    super(page);
    this.addArticlesButtonLogged = this.page.getByRole('button', {
      name: 'Add Article',
    });
  }
}
