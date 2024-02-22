window.addEventListener('scroll', () => {
    const verticalScrollPx = window.scrollY || window.pageYOffset;
  
    if (verticalScrollPx < 3000) {
      document.body.style.backgroundColor = '#f4977b';
    } else if (verticalScrollPx > 3000 && verticalScrollPx < 5000) {
      document.body.style.backgroundColor = 'rgb(241, 120, 96)';
    } else {
      document.body.style.backgroundColor = 'red';
    }
  });


  $(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".part").each(function() {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        
        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
          if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
        } else { //object goes out of view (scrolling up)
          if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
        }
      });
    }).scroll(); //invoke scroll-handler on page-load
  });

  $(window).on("load",function() {
    // Function to check if the user has scrolled to the bottom of the page
    function isBottomOfPage() {
        return $(window).scrollTop() + $(window).height() === $(document).height();
    }
    
    // Function to toggle the visibility of the arrow
    function toggleArrowVisibility() {
        var arrow = $(".arrow");
        if (isBottomOfPage()) {
            arrow.fadeOut();
        } else {
            arrow.fadeIn();
        }
    }

    // Call toggleArrowVisibility function when the page is loaded and when the user scrolls
    $(window).scroll(toggleArrowVisibility);
    toggleArrowVisibility(); // Invoke the function initially to handle the arrow visibility
});