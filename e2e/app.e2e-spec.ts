import { CreateFormPage } from './app.po';

describe('create-form App', function() {
  let page: CreateFormPage;

  beforeEach(() => {
    page = new CreateFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
