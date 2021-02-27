import { $, $$, browser, ExpectedConditions } from 'protractor';

describe('When: I use the reading list feature', () => {
  it('Then: I should see my reading list', async () => {
    await browser.get('/');
    await browser.wait(
      ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );

    const readingListToggle = await $('[data-testing="toggle-reading-list"]');
    await readingListToggle.click();

    await browser.wait(
      ExpectedConditions.textToBePresentInElement(
        $('[data-testing="reading-list-container"]'),
        'My Reading List'
      )
    );
  });

  it('Then: I should be able to mark a book as finished', async () => {
    await browser.get('/');
    await browser.wait(
      ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );

    const form = await $('form');
    const input = await $('input[type="search"]');
    await input.sendKeys('javascript');
    await form.submit();

    const wantToReadButton = await $$('[aria-label="Add the book to reading list"]');
    await wantToReadButton[0].click();


    const readingListToggle = await $('[data-testing="toggle-reading-list"]');
    await readingListToggle.click();

    const finishButton = await $$('[data-testing="finished-button"]');
    await finishButton[0].click();

    expect(ExpectedConditions.textToBePresentInElement($('[class="reading-list-item--details--finished"]')[0], 'Finished on')).toBeTruthy();
  });
});
