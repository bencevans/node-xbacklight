# xbacklight

> node.js xbacklight wrapper

## Install

    $ npm install xbacklight --save

## Usage

Require module

```js
const xbacklight = require('xbacklight')
```

**Get the current backlight level**

```js
xbacklight()
  .then((level) => {
    console.log(level)
  })
  .catch((err) => {

  })
```

**Set the backlight** by passing a percentage as the first arg

```js
xbacklight(90)
  .then(() => {
    console.log('updated brightness')
  })
  .catch((err) => {

  })
```

## Licence

MIT &copy; [Ben Evans](https://bencevans.io)
