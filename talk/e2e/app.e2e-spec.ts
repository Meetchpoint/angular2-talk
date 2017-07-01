import { TalkPage } from './app.po';

describe('talk App', () => {
  let page: TalkPage;

  beforeEach(() => {
    page = new TalkPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
