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


## Why

Even though this is very simple, popular utility libraries like
[lodash](https://lodash.com/) don't have a method like it.
[Chance.js](http://chancejs.com/) does, but its api requires you to construct
an instance of a directly exported class, which can be frustrating for unit
tests since you can't stub the constructor. You can stub the `Chance::Chance`
method to get an instance, though having to do this every time you need to test
a random bool is annoying.

As a result, I found myself writing utility functions like this one in a lot of
my personal projects. I figured I'd save myself some trouble and just publish
it. Use if you like, though I don't really have plans to add much more to it in
the future.
