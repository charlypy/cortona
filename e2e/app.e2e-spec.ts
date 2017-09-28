import { CortonaPage } from './app.po';

describe('cortona App', () => {
  let page: CortonaPage;

  beforeEach(() => {
    page = new CortonaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
