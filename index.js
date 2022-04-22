"use strict";
// alert("Hello");

// Animate survey numbers function
function surveyAnimate() {
  $(".count").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 2500,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
}

// RUN A FUNCTION WHEN A DIV IS SCROLLED TOO

// Calculate the offset (coordinates of the element) of the element and then compare that with the scroll value
function scrollToSection(section) {
  $(window).on("scroll", function () {
    // Get the current coordinates of the element relative to the document.
    var sectionTop = section.offset().top,
      //Get the current computed outer height (including padding, border, and optionally margin) for the first element in the set of matched elements.
      sectionHeight = section.outerHeight(),
      //Gets you pixel value of the height of the (browser) window aka viewport.
      windowHeight = $(window).height(),
      //Get the current vertical position of the scroll bar
      windowScroll = $(this).scrollTop();

    // console.log(sectionTop);
    // console.log(sectionHeight);
    // console.log(windowHeight);
    console.log(windowScroll);
    console.log(sectionTop + sectionHeight - windowHeight - 250);

    if (windowScroll > sectionTop + sectionHeight - windowHeight - 250) {
      console.log("SECTION SCROLLED TO!");
      console.log(windowScroll);
      console.log(sectionTop + sectionHeight - windowHeight - 250);
      // This detaches the scroll so function won't run more than once
      $(window).off("scroll");
      // Run the function
      surveyAnimate();
    }
  });
}
// Running function - check if section exists
if ($("#survey-section").length) {
  scrollToSection($("#survey-section"));
}
