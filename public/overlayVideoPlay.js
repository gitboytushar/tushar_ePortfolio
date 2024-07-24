// video link 1
document
  .getElementById('playVideo1')
  .addEventListener('click', function (event) {
    event.preventDefault()
    var overlay = document.getElementById('videoOverlay1')
    var iframe = overlay.querySelector('iframe')
    iframe.src += '&autoplay=1'
    overlay.style.display = 'flex'
  })

document
  .getElementById('videoOverlay1')
  .addEventListener('click', function (event) {
    if (event.target === this) {
      var iframe = this.querySelector('iframe')
      iframe.src = iframe.src.replace('&autoplay=1', '') // Stop the video
      this.style.display = 'none'
    }
  })

// video link 2
document
  .getElementById('playVideo2')
  .addEventListener('click', function (event) {
    event.preventDefault()
    var overlay = document.getElementById('videoOverlay2')
    var iframe = overlay.querySelector('iframe')
    iframe.src += '&autoplay=1'
    overlay.style.display = 'flex'
  })

document
  .getElementById('videoOverlay2')
  .addEventListener('click', function (event) {
    if (event.target === this) {
      var iframe = this.querySelector('iframe')
      iframe.src = iframe.src.replace('&autoplay=1', '') // Stop the video
      this.style.display = 'none'
    }
  })