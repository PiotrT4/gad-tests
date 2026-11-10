import { MainMenu } from '../components/main-menu.component';
import { BasePage } from './base.page';
import { Locator, Page } from '@playwright/test';

export class ArticlePage extends BasePage {
  url = '/article.html';
  mainMenu = new MainMenu(this.page);

  articleTitle: Locator = this.page.getByTestId('article-title');
  articleBody: Locator = this.page.getByTestId('article-body');

  constructor(page: Page) {
    super(page);
  }
}
