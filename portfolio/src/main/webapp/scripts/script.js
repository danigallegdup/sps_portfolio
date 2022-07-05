
  window.onscroll = function () { stick() };

  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;

  function stick() {
    header.classList.add("sticky");

  }
/**
 * Adds a random greeting to the page.
 */
 function addRandomGreeting() {
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}


  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

  function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");}

    function view_more_less(dots,moreText, btnText,id) {
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "View More";
          moreText.style.display = "none";
          $(id).css("width", "400px");
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "View Less";
          moreText.style.display = "inline";
          $(id).css("width", "90%");
        }
      }

      TweenMax.staggerFrom(
        ".titles > div",
        0.8,
        {
          x: "-60",
          ease: Power3.easeInOut,
          opacity: "0",
        },
        2
      );
  
      TweenMax.staggerTo(
        ".titles > div",
        0.8,
        {
          x: "60",
          ease: Power3.easeInOut,
          delay: 1.2,
          opacity: "0",
        },
        2
      );
      TweenMax.staggerFrom(
        "li",
        3,
        {
          x: "-1600",
          delay: 4.2,
          ease: Expo.easeInOut,
        },
        0.16
      );
  
      TweenMax.staggerTo(
        "li",
        2.6,
        {
          x: "1600",
          delay: 6.8,
          ease: Expo.easeInOut,
        },
        0.2
      );
  
      var textWrapper = document.querySelector(".header");
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );
  
      anime.timeline().add({
        targets: ".header .letter",
        opacity: [0, 1],
        translateY: [80, 0],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 2000,
        delay: (el, i) => 7400 + 40 * i,
      });


  


  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

