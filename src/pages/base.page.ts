import { Page, expect } from '@playwright/test';

export class BasePage {
  url = '';

  constructor(protected page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto(this.url);
  }

  async title(): Promise<string> {
    return this.page.title();
  }

  async expectTitleToContain(expectedTitle: string): Promise<void> {
    expect(await this.page.title()).toContain(expectedTitle);
  }
}
