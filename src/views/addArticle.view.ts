import { AddArticleModel } from '../models/addArticleModel';
import { Locator, Page } from '@playwright/test';

export class AddArticleView {
  header: Locator;
  titleInput: Locator;
  bodyInput: Locator;
  saveButton: Locator;
  errorMessage: Locator;

  constructor(private page: Page) {
    this.header = this.page.getByRole('heading', { name: 'Add New Entry' });
    this.titleInput = this.page.getByTestId('title-input');
    this.bodyInput = this.page.getByTestId('body-text');
    this.saveButton = this.page.getByTestId('save');
    this.errorMessage = this.page.getByTestId('alert-popup');
  }

  async addArticle(newArticle: AddArticleModel): Promise<void> {
    await this.titleInput.fill(newArticle.title);
    await this.bodyInput.fill(newArticle.body);
    await this.saveButton.click();
  }

  async fillBody(body: string): Promise<void> {
    await this.bodyInput.fill(body);
    await this.saveButton.click();
  }

  async fillTitle(title: string): Promise<void> {
    await this.titleInput.fill(title);
    await this.saveButton.click();
  }
}
