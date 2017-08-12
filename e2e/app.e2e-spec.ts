import { Angular4InterviewPage } from './app.po';

describe('angular4-interview App', () => {
  let page: Angular4InterviewPage;

  beforeEach(() => {
    page = new Angular4InterviewPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
