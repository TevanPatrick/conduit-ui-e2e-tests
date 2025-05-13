import { Page, Locator, expect } from '@playwright/test';

export class NewArticleEditorPage {
  readonly page: Page;
  readonly newArticleLink: Locator;
  readonly titleInput: Locator;
  readonly aboutInput: Locator;
  readonly articleContentInput: Locator;
  readonly tagsInput: Locator;
  readonly publishButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newArticleLink = page.getByRole('link', { name: 'New Article' });
    this.titleInput = page.getByRole('textbox', { name: 'Article Title' });
    this.aboutInput = page.getByRole('textbox', { name: 'What\'s this article about?' });
    this.articleContentInput = page.getByRole('textbox', { name: 'Write your article (in'});
    this.tagsInput = page.getByRole('textbox', { name: 'Enter tags' });
    this.publishButton = page.getByRole('button', { name: 'Publish Article' });
  }

  async navigateToNewArticlePage(){
    await this.page.goto(process.env.newArticleEditorUrl);
  }

  async addNewArticle(title: string, about: string, 
    article: string, tags: string){
    await this.titleInput.fill(title);
    await this.aboutInput.fill(about);
    await this.articleContentInput.fill(article);
    await this.tagsInput.fill(tags);
    await this.publishButton.click();
  }

}