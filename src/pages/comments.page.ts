import { Page } from '@playwright/test';

export class CommentsPage {
  url = '/comments.html';

  constructor(private page: Page) {}

  async goto(): Promise<void> {
    //typ Promise zwracamy dla prostych zmiennych/typów, deklarujemy zwrot takiego typu kiedy nic nie chcemy zwrócić
    await this.page.goto(this.url);
  }

  async title(): Promise<string> {
    return this.page.title();
  }
}
