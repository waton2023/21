  // ===== Scroll to Top ==== //
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 100) {
        $('#return-to-top').fadeIn(200);
    } else {
        $('#return-to-top').fadeOut(200);
    }
});

$('#return-to-top').click(function() {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
});	



// toggle btn js

  $(".toggleSearch").click(function () {
    $(".headerSearchbar form").toggleClass("active");
  });

// toggle pagetwo css start
  $("#toggle-close").on("click", function () {
    var w = $('#sidebar').width();
    var pos = $('#sidebar').offset().left;
    if (pos == 0) {
      $("#sidebar").animate({
        "left": -w
      }, "slow");
    } else {
      $("#sidebar").animate({
        "left": "0"
      }, "slow");
    }
  });

 	// Menu button
	     /*--- Responsive Menu Start ----*/
       $(".navbar-toggler").on("click", function () {
        $(this).toggleClass("on");
              var w = $('#sidebar').width();
              var pos = $('#sidebar').offset().left;
  
              if (pos === 0) {
                  $("#sidebar").animate({ "left": -w }, "slow");
              }
              else {
                  $("#sidebar").animate({ "left": "0" }, "slow");
              }
  
          });
      // css menu
      (function ($) {
        $(document).ready(function () {

            $('#cssmenu li.active').addClass('open').children('ul').show();
            $('#cssmenu li.has-sub>a').on('click', function () {
                $(this).removeAttr('href');
                var element = $(this).parent('li');
                if (element.hasClass('open')) {
                    element.removeClass('open');
                    element.find('li').removeClass('open');
                    element.find('ul').slideUp(200);
                }
                else {
                    element.addClass('open');
                    element.children('ul').slideDown(200);
                    element.siblings('li').children('ul').slideUp(200);
                    element.siblings('li').removeClass('open');
                    element.siblings('li').find('li').removeClass('open');
                    element.siblings('li').find('ul').slideUp(200);
                }
            });

        });
    })(jQuery);

    // -------- search-button ------- //
  $('#search-button').on("click", function (e) {
    $('#search-open').slideToggle();
    e.stopPropagation();
  });
  $(document).on("click", function (e) {
    if (!(e.target.closest('#search-open'))) {
      $("#search-open").slideUp();
    }
  });
  
// counter js start

$('.count').each(function () {
  $(this).prop('Counter', 0).animate({
    Counter: $(this).text()
  }, {
    duration: 3000,
    easing: 'swing',
    step: function (now) {
      $(this).text(Math.ceil(now));
    }
  });
});

// client slider js start

$('.client-slider .owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 2
    }
  }
});

// partner slider  js start
$('.brand-slider .owl-carousel').owlCarousel({
  loop: true,
  margin: 5,
  nav: true,
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 4
    },
    1000: {
      items: 6
    }
  }
});

// accordion pluse and minus sign js

$(function() {
  $('.acc_ctrl').on('click', function(e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).next()
      .stop()
      .slideUp(300);
    } else {
      $(this).addClass('active');
      $(this).next()
      .stop()
      .slideDown(300);
    }
  });
});

// company slider js start

$('.client-slider-next .owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});

//  about page slider 

$('.slider-service-box  .owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});

// image gallery js start 

$('.filters ul li').click(function(){
  $('.filters ul li').removeClass('active');
  $(this).addClass('active');
  
  var data = $(this).attr('data-filter');
  $grid.isotope({
      filter: data
  })
  });

  var $grid = $(".grid").isotope({
  itemSelector: ".all",
  percentPosition: true,
  masonry: {
      columnWidth: ".all"
  }
  })

  // light box js start
// Gallery image hover
$( ".img-wrapper" ).hover(
  function() {
    $(this).find(".img-overlay").animate({opacity: 1}, 600);
  }, function() {
    $(this).find(".img-overlay").animate({opacity: 0}, 600);
  }
);

// Lightbox
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $prevButton = $('<div id="prevButton"><i class="fa fa-chevron-left"></i></div>');
var $nextButton = $('<div id="nextButton"><i class="fa fa-chevron-right"></i></div>');
var $exitButton = $('<div id="exitButton"><i class="fa fa-times"></i></div>');

// Add overlay
$overlay.append($image).prepend($prevButton).append($nextButton).append($exitButton);
$("#gallery").append($overlay);

// Hide overlay on default
$overlay.hide();

// When an image is clicked
$(".img-overlay").click(function(event) {
  // Prevents default behavior
  event.preventDefault();
  // Adds href attribute to variable
  var imageLocation = $(this).prev().attr("href");
  // Add the image src to $image
  $image.attr("src", imageLocation);
  // Fade in the overlay
  $overlay.fadeIn("slow");
});

// When the overlay is clicked
$overlay.click(function() {
  // Fade out the overlay
  $(this).fadeOut("slow");
});

// When next button is clicked
$nextButton.click(function(event) {
  // Hide the current image
  $("#overlay img").hide();
  // Overlay image location
  var $currentImgSrc = $("#overlay img").attr("src");
  // Image with matching location of the overlay image
  var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
  // Finds the next image
  var $nextImg = $($currentImg.closest(".image").next().find("img"));
  // All of the images in the gallery
  var $images = $("#image-gallery img");
  // If there is a next image
  if ($nextImg.length > 0) { 
    // Fade in the next image
    $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
  } else {
    // Otherwise fade in the first image
    $("#overlay img").attr("src", $($images[0]).attr("src")).fadeIn(800);
  }
  // Prevents overlay from being hidden
  event.stopPropagation();
});

// When previous button is clicked
$prevButton.click(function(event) {
  // Hide the current image
  $("#overlay img").hide();
  // Overlay image location
  var $currentImgSrc = $("#overlay img").attr("src");
  // Image with matching location of the overlay image
  var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
  // Finds the next image
  var $nextImg = $($currentImg.closest(".image").prev().find("img"));
  // Fade in the next image
  $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
  // Prevents overlay from being hidden
  event.stopPropagation();
});

// When the exit button is clicked
$exitButton.click(function() {
  // Fade out the overlay
  $("#overlay").fadeOut("slow");
});


// vedio js 
$(function() {
  $('.popup-youtube, .popup-vimeo').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
  });
});

//   dark mode js start

$(function() {

  // Toggleable dark mode
  (function darkMode() {

    /**
     * Define the elements we will be working with.
     * ---
     * NOTE: #id selectors are used over .classes because jQuery will use the
     *       .getElementByID() method to traverse the DOM, which is much faster.
     */

    var $toggleButton = $('.js-toggle-dark-mode');
    var $body = $('body');

    // Set up a function to be used by the click event on $toggleButton
    function toggleDarkMode() {

      // Check if body does not have the `dark` class
      if (!$body.hasClass('dark')) {

        // If it doesn't, it should when this button is clicked, so add it
        $body.addClass('dark');

        /**
         * We will also add the "true" state to a localStorage item. This is the
         * property that tells the browser that dark mode should be set.
         * ---
         * NOTE: localStorage will only store strings, we can use "true" and
         *       "false" as values to determine which state should be set.
         */

        localStorage.setItem('darkmode', 'true');

      } else {

        // If body does have the `dark` class, remove it when the toggle is clicked
        $body.removeClass('dark');

        // Also set the storage item to "false"
        localStorage.removeItem('darkmode');

      }

    }

    /**
     * Fire the toggleDarkMode function on each click.
     * ---
     * NOTE: This is called last so that the script will first check against
     *       other conditions, before doing any actual toggling.
     */

    $toggleButton.on('click', toggleDarkMode);

  })();

});



  /**
   * Set `dark` class on body if dark mode should be enabled.
   * Has to be at top of `<body>` so that body exists, and happens
   * as soon as possible.
   */
  if (localStorage.getItem('darkmode') === 'true') {
    document.body.className = 'dark';
  }

  // gallery js start

$('.portfolio_img_text').magnificPopup({
  delegate: '.img-link',
  type: 'image',
  tLoading: 'Loading image #%curr%...',
  mainClass: 'mfp-img-mobile',
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0,1]
  },
  image: {
    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    titleSrc: function(item) {
      return item.el.attr('title') + '<small></small>';
    }
  }
});

// counter js start

// Get the countdown container element
const countdownContainer = document.getElementById("countdown-container");

// Set the target date and time (adjust it according to your needs)
const targetDate = new Date("2023-12-31T23:59:59").getTime();

// Function to initialize the countdown
function startCountdown() {
  // Get the current date and time
  const currentDate = new Date().getTime();

  // Calculate the time remaining
  const timeRemaining = targetDate - currentDate;

  // Calculate and update the days, hours, minutes, and seconds
  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");

  // Calculate the days, hours, minutes, and seconds remaining
  let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  // Update the HTML elements with the calculated values
  daysElement.textContent = days;
  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;

  // TODO: Implement the countdown logic to update the timer every second
}

// ...

// Update the countdown timer every second
setInterval(startCountdown, 1000);

// ...
