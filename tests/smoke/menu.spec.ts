import { ArticlesPage } from '../../src/pages/articles.page';
import { CommentsPage } from '../../src/pages/comments.page';
import { HomePage } from '../../src/pages/home.page';
import { expect, test } from '@playwright/test';

test.describe('Verify menu main buttons', () => {
  test('comments button navigates to comments page @GAD_R01_03', async ({
    page,
  }) => {
    //Arrange
    const articlesPage = new ArticlesPage(page);
    const commentsPage = new CommentsPage(page);

    //Act
    await articlesPage.goto();
    await articlesPage.mainMenu.commentsButton.click();

    //Assert
    const title = await commentsPage.title();
    expect(title).toContain('Comments');
  });

  test('articles button navigates to comments page @GAD_R01_04', async ({
    page,
  }) => {
    //Arrange
    const articlesPage = new ArticlesPage(page);
    const commentsPage = new CommentsPage(page);

    //Act
    await commentsPage.goto();
    await commentsPage.mainMenu.articlesButton.click();

    //Assert
    const title = await articlesPage.title();
    expect(title).toContain('Articles');
  });

  test('home button navigate to homa page', async ({ page }) => {
    //Arrange
    const articlesPage = new ArticlesPage(page);
    const homePage = new HomePage(page);

    //Act
    await articlesPage.goto();
    await articlesPage.mainMenu.homeButton.click();

    //Assert
    const title = await homePage.title();
    expect(title).toContain('GAD');
  });
});
