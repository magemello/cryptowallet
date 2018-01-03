import { CryptowalletPage } from './app.po';

describe('cryptowallet App', () => {
  let page: CryptowalletPage;

  beforeEach(() => {
    page = new CryptowalletPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
