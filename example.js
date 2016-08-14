const xbacklight = require('./')

xbacklight.get().then(console.log).catch(console.error)
xbacklight.set(100).then(console.log).catch(console.error)
