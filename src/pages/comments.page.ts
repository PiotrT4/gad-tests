import { MainMenu } from '../components/main-menu.component';
import { BasePage } from './base.page';
import { Page } from '@playwright/test';

export class CommentsPage extends BasePage {
  url = '/comments.html';
  mainMenu = new MainMenu(this.page);

  constructor(page: Page) {
    super(page);
  }
}
