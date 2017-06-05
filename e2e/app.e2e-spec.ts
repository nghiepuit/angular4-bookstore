import { BookStorePage } from './app.po';

describe('book-store App', () => {
  let page: BookStorePage;

  beforeEach(() => {
    page = new BookStorePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
