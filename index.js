const exec = require('child_process').exec
const Promise = require('pinkie-promise')

function xbacklight (level) {
  if (typeof level === 'number') {
    return set(level)
  } else {
    return get()
  }
}

function isInstalledSync () {
  try {
    execSync('xbacklight')
  } catch (e) {
    return false
  }
  return true
}

function get () {
  return new Promise((resolve, reject) => {
    exec('xbacklight', function (err, stdout) {
      if (err) {
        return reject(err)
      }
      var level = parseFloat(stdout, 10)
      return resolve(level)
    })
  })
}

function set (level) {
  return new Promise((resolve, reject) => {
    exec('xbacklight -set ' + level , function (err, stdout) {
      if (err) {
        return reject(err)
      }
      return resolve()
    })
  })
}

module.exports = xbacklight
module.exports.get = get
module.exports.set = set
