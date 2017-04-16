import { Bootstrap4SassPage } from './app.po';

describe('bootstrap4-sass App', () => {
  let page: Bootstrap4SassPage;

  beforeEach(() => {
    page = new Bootstrap4SassPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
