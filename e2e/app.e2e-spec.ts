import { CommerceAppPage } from './app.po';

describe('commerce-app App', () => {
  let page: CommerceAppPage;

  beforeEach(() => {
    page = new CommerceAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
