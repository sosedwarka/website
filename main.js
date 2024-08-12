$(document).ready(function() {
    let slideIndex = 0;
    const slides = $('.carousel-slide');
    const dotsContainer = $('.carousel-dots');

    // Function to show the current slide
    function showSlide(n) {
      if (n >= slides.length) { slideIndex = 0; } 
      if (n < 0) { slideIndex = slides.length - 1; }

      const translateValue = `translateX(-${slideIndex * 100}%)`;
      $('.carousel-slides').css('transform', translateValue);

      // Update active dot
      dotsContainer.children().removeClass('active');
      dotsContainer.children().eq(slideIndex).addClass('active');
    }

    // Create pagination dots dynamically
    for (let i = 0; i < slides.length; i++) {
      const dot = $('<span class="carousel-dot"></span>');
      dotsContainer.append(dot);

      // Event listener for dot clicks
      dot.click(function() {
        slideIndex = $(this).index();
        showSlide(slideIndex);
      });
    }

    // Show the initial slide and set the first dot as active
    showSlide(slideIndex);
    dotsContainer.children().eq(0).addClass('active');

    // Auto-advance the carousel (optional)
    setInterval(function() {
      slideIndex++;
      showSlide(slideIndex);
    }, 3000); // Change 3000 (milliseconds) to adjust the interval
  });