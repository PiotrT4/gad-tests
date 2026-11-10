import { randomNewArticle } from '../factories/article.factory';
import { AddArticleModel } from '../models/addArticleModel';

export const articleData: AddArticleModel = {
  title: randomNewArticle().title,
  body: randomNewArticle().body,
};
