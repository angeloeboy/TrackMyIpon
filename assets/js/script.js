const burger = document.getElementById('burger');
const links = document.getElementById('links');

burger.addEventListener('click', () => {
    links.classList.toggle('active');
})

$("#links").click(() => {
    links.classList.remove('active');

})


$(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());


});



    // Get all step items and images
    const stepItems = $(".step-item");
    const stepImages = $(".step-image");

    // Initial state
    let currentIndex = 0;

    // Function to update the bold item and image
    const updateStep = () => {
      // Remove bold class from all step items
      stepItems.removeClass("bold");
      // Add bold class to the current step item
      stepItems.eq(currentIndex).addClass("bold");
      // Hide all images
      stepImages.hide();
      // Show the image corresponding to the current step item
      stepImages.eq(currentIndex).fadeIn(500);
      // Increment the current index
      currentIndex = (currentIndex + 1) % stepItems.length;
    };

    // ScrollTrigger animation
    gsap.to(".how-it-works-section", {
      scrollTrigger: {
        trigger: ".how-it-works-section",
        start: "top 70%",
        onEnter: () => {
          // Initial animation state
          updateStep();

          // Animate step items and update the image every 1 second
          setInterval(updateStep, 2000);
        },
      },
    });

  // Call the animation function when the page finishes loading


  gsap.fromTo(
    ".hero-section .img-container",
    { opacity: 0, x: 60 },
    {
      opacity: 1,
      x: 0,
      duration: 0.7,
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top 80%", // Adjust as needed
      },
    }
  );

  gsap.fromTo(
    ".hero-section .img-container .rect1",
    { opacity: 0, x: 60 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top 80%", // Adjust as needed
      },
    }
  );

  
  gsap.fromTo(
    ".hero-section .img-container .rect2",
    { opacity: 0, x: -60 },
    {
      opacity: 1,
      x: 0,
      duration: 0.7,
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top 80%", // Adjust as needed
      },
    }
  );

  gsap.fromTo(
    ".hero-section .img-container .circle1",
    { opacity: 0, x: -100 },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top 80%", // Adjust as needed
      },
    }
  );



  const elements = $(".about-section .text-container").children();

  // Loop through the elements and animate them
  elements.each((index, element) => {
    gsap.fromTo(
      element,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: index * 0.5, // Add delay for staggered animation
        scrollTrigger: {
          trigger: element,
          start: "top 80%", // Adjust as needed
        },
      }
    );    
  });

  gsap.fromTo(
    ".about-section .img-container",
    { opacity: 0, x: -20 },
    {
      opacity: 1,
      duration: 1,
      x: 0,
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 80%", // Adjust as needed
      },
    }
  );


