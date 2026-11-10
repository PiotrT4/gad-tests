import { ArticlePage } from '../src/pages/article.page';
import { ArticlesPage } from '../src/pages/articles.page';
import { LoginPage } from '../src/pages/login.page';
import { articleData } from '../src/test-data/article.data';
import { testUser1 } from '../src/test-data/user.data';
import { AddArticleView } from '../src/views/addArticle.view';
import { expect, test } from '@playwright/test';

test.describe('Verify article page', () => {
  test('Valid adding article', async ({ page }) => {
    //Arrange
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(testUser1);

    const articlesPage = new ArticlesPage(page);
    articlesPage.goto();

    //Act
    await articlesPage.addArticlesButtonLogged.click();

    const addArticleView = new AddArticleView(page);
    await expect.soft(addArticleView.header).toBeVisible();

    await addArticleView.addArticle(articleData);

    //Assert
    const articlePage = new ArticlePage(page);
    await expect.soft(articlePage.articleTitle).toHaveText(articleData.title);
    await expect
      .soft(articlePage.articleBody)
      .toHaveText(articleData.body, { useInnerText: true });
  });

  test('Negative adding article - incorrect title', async ({ page }) => {
    //Arrange
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(testUser1);

    const articlesPage = new ArticlesPage(page);
    articlesPage.goto();

    //Act
    await articlesPage.addArticlesButtonLogged.click();

    const addArticleView = new AddArticleView(page);
    await expect.soft(addArticleView.header).toBeVisible();

    await addArticleView.fillBody(articleData.body);

    //Assert
    await expect.soft(addArticleView.errorMessage).toBeVisible();
    await expect
      .soft(addArticleView.errorMessage)
      .toHaveText('Article was not created');
  });

  test('Negative adding article - incorrect body', async ({ page }) => {
    //Arrange
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(testUser1);

    const articlesPage = new ArticlesPage(page);
    articlesPage.goto();

    //Act
    await articlesPage.addArticlesButtonLogged.click();

    const addArticleView = new AddArticleView(page);
    await expect.soft(addArticleView.header).toBeVisible();

    await addArticleView.fillBody(articleData.body);

    //Assert
    await expect.soft(addArticleView.errorMessage).toBeVisible();
    await expect
      .soft(addArticleView.errorMessage)
      .toHaveText('Article was not created');
  });
});
