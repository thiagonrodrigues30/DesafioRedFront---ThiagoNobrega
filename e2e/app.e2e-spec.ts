import { RedrocketImdbPage } from './app.po';

describe('redrocket-imdb App', () => {
  let page: RedrocketImdbPage;

  beforeEach(() => {
    page = new RedrocketImdbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
