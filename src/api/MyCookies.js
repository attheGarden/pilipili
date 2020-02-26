export function setCookie (cname, cvalue, exdays) {
  var d = new Date()
  d.setDate(d.getDate() + exdays)
  document.cookie = cname + '=' + cvalue +
    ((exdays == null) ? '' : ';expires=' + d.toUTCString())
  console.info(document.cookie)
}

// 获取cookie
export function getCookie (cname) {
  if (document.cookie.length > 0) {
    var cstart = document.cookie.indexOf(cname + '=')
    if (cstart !== 1) {
      cstart = cstart + cname.length + 1
      var cend = document.cookie.indexOf(';', cstart)
      if (cend === -1) cend = document.cookie.length
      return unescape(document.cookie.substring(cstart, cend))
    }
  }
  return ''
}

export function checkCookie () {
  var user = this.getCookie('username')
  if (user !== '') {
    alert('Welcome again' + user)
  } else {
    user = prompt('Please enter your name:', '')
    if (user !== '' && user !== null) {
      this.setCookie('username', user, 365)
    }
  }
}

export function clearCookie (cname) {
  setCookie(cname, '', -1)
}
