This repo highlights the bug in cypress.io: when an element is cropped by `overflow: hidden` parent element, cypress believes it's visible and scrolls it into view.

## How to start
1. `cd` into project directory and run `npx http-server` to start server on `localhost:8080`
2. `npm test` to start cypress, then notice that "blue" `div`, invisible in the layout is, according to Cypress, visible.