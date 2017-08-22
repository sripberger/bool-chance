# bool-chance

A simple wrapper around Math.random for returning a random boolean, with the
provided chance of being true. It exports an object with a `::get` method to
facilitate stubbing for unit tests.

## Usage
```js
const boolChance = require('bool-chance');

let bool = boolChance.get(0.75); // Will return true 75% of the time.
let otherBool = boolChance.get(0.5); // Will return true half of the time.
```
