// toggle to change the webpage's theme
document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.getElementById('checkbox')
  var lightTheme = document.getElementById('lightTheme')
  var darkTheme = document.getElementById('darkTheme')

  if (localStorage.getItem('theme') === 'dark') {
    lightTheme.disabled = true
    darkTheme.disabled = false

    checkbox.checked = true
  } else {
    lightTheme.disabled = false
    darkTheme.disabled = true
  }

  checkbox.addEventListener('change', function () {
    if (this.checked) {
      localStorage.setItem('theme', 'dark')
      lightTheme.disabled = true
      darkTheme.disabled = false
    } else {
      localStorage.setItem('theme', 'light')
      lightTheme.disabled = false
      darkTheme.disabled = true
    }
  })
})
