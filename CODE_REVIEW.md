# Code Review

## Code Smells / Problems

- Cover image source assignment inconsistently uses _interpolation_ and _property binding_ between `book-search.component.html` line `24` and `reading-list.component.html` line `4`.
- In both places above the image tag does not have a valid `alt` attribute.
- `total-count.component.scss` doesn't contain any style, so it can be removed.
- In `book-search.component.ts` line `56` shall use the `searchTerm` _getter_ already declared for getting the form value.
- When the use tries to search for a different term, the book grid becomes empty when the input is cleared but as soon as the user starts typing a new term the previous search results comes up.

## Potential Improvements

- Change the condition showing the search suggestion to check whether any search results are loaded instead of valid value for `searchTerm`. In `book-search.component.html` line `16`. I would use `books.length > 0` in the `ngIf`.
- Let the user know if the search results return no books for clarity.
- Show a loading indicator while searching.
- Reset the search results if the current search returns no books, so that the user won't see the previous results.
- Return a user friendly message if the published date is not valid instead of undefined.

## Accessiblity Issue Fixes (Automatically found issues - Lighthouse)

- The search button does not have valid `aria-label` value, line `10`.
- Insufficent contrast ratio for paragraph tag in `book-search.component.html`, line `50`.
- Insufficent contrast ratio for reading list button in `app.component.html`, line `10`. (Not modifying it since it is in `apps/okreads` folder)

## Accessiblity Issue Fixes (Manually found issues)

- Made the "Javascript" search suggestion anchor focusable by `tab` button for easy navigation and accessibility. In `book-search.component.html` line `51` added `tabindex="0"`.
- Added `aira-label` to the search suggestion.
- Added `aira-label` to the Want to Read button.
- Added `alt` attribute to `img` tags on `book-search.component.html` line `24` and `reading-list.component.html` line `4`.