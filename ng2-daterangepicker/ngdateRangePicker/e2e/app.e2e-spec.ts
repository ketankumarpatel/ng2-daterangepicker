import { NgdateRangePickerPage } from './app.po';

describe('ngdate-range-picker App', () => {
  let page: NgdateRangePickerPage;

  beforeEach(() => {
    page = new NgdateRangePickerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
