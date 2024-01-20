// page loader animation happens when an anchor tag is clicked
$(document).ready(function () {
  $("a").click(function (e) {
    e.preventDefault()
    var link = $(this).attr('href')
    $('.loader-wrapper').fadeIn(1000, function () {
      window.location.href = link
    })
  })
})

$(window).on('load', function () {
  $('.loader-wrapper').fadeOut(1000)
})
