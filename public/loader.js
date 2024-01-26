// // page loader animation happens when an anchor tag is clicked
// $(document).ready(function () {
//   $("a").click(function (e) {
//     e.preventDefault()
//     var link = $(this).attr('href')
//     $('.loader-wrapper').fadeIn(1000, function () {
//       window.location.href = link
//     })
//   })
// })

// $(window).on('load', function () {
//   $('.loader-wrapper').fadeOut(1000)
// })

$(document).ready(function () {
  // Variable to track whether the navigation is due to a user click
  var userClicked = false;

  // Click event for anchor tags
  $("a").click(function (e) {
    var link = $(this).attr('href');

    // Check if the link has target="_blank"
    if ($(this).attr('target') === '_blank') {
      // If it does, open the link in a new tab/window without the loader
      return;
    }

    e.preventDefault();
    userClicked = true;

    // Show loader and navigate after fadeIn
    $('.loader-wrapper').fadeIn(1000, function () {
      window.location.href = link;
    });
  });

  // Popstate event when navigating back or forward
  $(window).on('popstate', function (e) {
    // Check if the navigation is due to a user click
    if (userClicked) {
      userClicked = false;
    } else {
      // Show loader when navigating back or forward
      $('.loader-wrapper').fadeIn(1000);
    }
  });

  // Load event when the page is initially loaded or refreshed
  $(window).on('load', function () {
    // Hide loader after page is fully loaded
    $('.loader-wrapper').fadeOut(1000);
  });
});

