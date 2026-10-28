import { Locator, Page } from '@playwright/test';

export class MainMenu {
  commentsButton: Locator;
  articlesButton: Locator;
  homeButton: Locator;

  constructor(private page: Page) {
    this.commentsButton = this.page.getByTestId('open-comments');
    this.articlesButton = this.page.getByTestId('open-articles');
    this.homeButton = this.page.getByRole('link', { name: /GAD/ });
  }
}
