import { MyGuitarPage } from './app.po';

describe('my-guitar App', () => {
  let page: MyGuitarPage;

  beforeEach(() => {
    page = new MyGuitarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
