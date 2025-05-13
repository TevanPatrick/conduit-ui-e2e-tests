import { Page, Locator, expect } from '@playwright/test';

export class ArticlePage {
  readonly page: Page;
  readonly titleInput: Locator;
  readonly articleContentInput: Locator;
  readonly tagsInput: Locator;
  readonly deleteArticleButton: Locator;
  readonly confirmationDialog: Locator;

  constructor(page: Page) {
    this.page = page;
    this.titleInput = page.getByRole('heading');
    this.articleContentInput = page.locator('.row.article-content .col-xs-12');
    this.tagsInput = page.locator('.tag-list');
    this.deleteArticleButton = page.getByRole('button', { name: 'Delete Article' });
    this.confirmationDialog = page.locator('.swal2-popup');
  }


}