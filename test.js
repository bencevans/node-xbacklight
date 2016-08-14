const test = require('ava')
const xbacklight = require('./')

test('short hand get', (t) => {
  xbacklight((level) => {
    console.log('level: ', level)
    t.equal(typeof level, 'number')
    t.end()
  })
})

test('short hand set', (t) => {
  let originalLevel
  let testLevel = 50

  xbacklight()
    .then((level) => {
      t.equal(typeof level, 'number')
      t.truthy(level >=0 && level <= 100)
      originalLevel = level
      return xbacklight(50)
    })
    .then(() => {
      return xbacklight()
    })
    .then((level) => {
      t.equal(level, 50)
      return xbacklight(originalLevel)
    })
    .then(() => {
      return xbacklight(originalLevel)
    })
    .then((level) => {
      t.equal(level, originalLevel)
      t.end()
    })
})
