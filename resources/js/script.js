$(document).ready(function () {
  //sticky
  $('.js--section-features').waypoint(
    function (direction) {
      if (direction == 'down') {
        $('nav').addClass('sticky');
      } else {
        $('nav').removeClass('sticky');
      }
    },
    { offset: '60px' }
    // var waypoints = $('#handler-first').waypoint(function(direction) {
    //   notify(this.element.id + ' hit 25% from top of window')
    // }, {
    //   offset: '25%'
    // })
  );

  //scroll on button
  //to plan section
  $('.scroll-plan').click(function () {
    $('html,body').animate(
      { scrollTop: $('.js--section-plans').offset().top },
      1000
    );
  });

  //to start section
  $('.scroll-start').click(function () {
    $('html ,body').animate(
      { scrollTop: $('.js--section-features').offset().top },
      1000
    );
  });

  //to food section

  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') ==
          this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(':focus')) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  $('.js--wp-1').waypoint(
    function () {
      $('.js--wp-1').addClass('animated fadeIn');
    },
    { offset: '50%' }
  );

  $('.js--wp-2').waypoint(
    function () {
      $('.js--wp-2').addClass('animated flipInX');
    },
    { offset: '50%' }
  );

  $('.js--wp-3').waypoint(
    function () {
      $('.js--wp-3').addClass('animated fadeInLeft');
    },
    { offset: '50%' }
  );

  $('.js--wp-4').waypoint(
    function () {
      $('.js--wp-4').addClass('animated tada');
    },
    { offset: '50%' }
  );

  $('.js-list').waypoint(
    function () {
      $('.js-list').addClass('animated flash');
    },
    { offset: '50%' }
  );

  //Mobile navi
  $('.js--nav-icon').click(function () {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon ion-icon');

    nav.slideToggle(200);

    if (icon.hasClass('ion-navicon-round')) {
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
    } else {
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
    }
  });
});

{
  /* <ion-icon name="close-outline"></ion-icon> */
}
