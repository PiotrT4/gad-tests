import { AddArticleModel } from '../models/addArticleModel';
import { faker } from '@faker-js/faker';

export function randomNewArticle(): AddArticleModel {
  const title = faker.lorem.sentence();
  const body = faker.lorem.paragraphs(5);

  return { title: title, body: body };
}
