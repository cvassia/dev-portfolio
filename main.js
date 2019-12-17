
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}


//Navbar change

const navbar = document.querySelector("nav");
const text = document.querySelector("a");
const button = document.querySelector("button")
const text1 = document.querySelector("#changeOne");
const text2 = document.querySelector("#changeTwo");
const text3 = document.querySelector("#changeThree");

const sectionOne = document.querySelector("#firstChange")
const sectionTwo = document.querySelector("#contact")

const sectionOneObserver = new IntersectionObserver(function(entries){
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            navbar.classList.add("navChangedProjects")
        }else{
            navbar.classList.remove("navChangedProjects")
        }
    });
})

const sectionTwoObserver = new IntersectionObserver(function(entries){
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      navbar.classList.remove("navChangedProjects")
      text.classList.add("textChangedContact")
      text1.classList.add("textChangedContact")
      text2.classList.add("textChangedContact")
      text3.classList.add("textChangedContact")
      button.classList.add("textChangedContact")
    }else{
      navbar.classList.add("navChangedProjects")
      text.classList.remove("textChangedContact")
      text1.classList.remove("textChangedContact")
      text2.classList.remove("textChangedContact")
      text3.classList.remove("textChangedContact")
      button.classList.remove("textChangedContact")
    }
  })
})

sectionOneObserver.observe(sectionOne)
sectionTwoObserver.observe(sectionTwo)




// $(window).scroll(function() {
//   var scroll = $(window).scrollTop();
//   if (scroll <= 1500) {
//     $(".fixed-top").css("background", "transparent");
// }else if (scroll > 1500 & scroll < 4700) {
//     $(".fixed-top").css("background", "rgba(255, 255, 255, 0.644)");
//     // $(".fixed-top #logo").css("color", "black");
//   }else{
//     $(".fixed-top").css("background", "transparent");
//     $("nav #logo").css("color", "white");
//     $("button").css("color", "white");
//   }
// });






 /* Setting Scroll reveal as a global 
    object in window */
    window.sr = new ScrollReveal({
        reset: false // to repeat the effect
      });

      // Picture
      sr.reveal("#hidden", {
        origin: "bottom",
        duration: 3000,
        distance: "500px",
        reset: true
      });

      // First Section

      sr.reveal("#reveal-h1", {
        origin: "top",
        duration: 3000, 
        distance: "250px",
        reset: true
        
      });

      // Second section
      sr.reveal(".reveal-container1", {
        origin: "left",
        duration: 4000,
        distance: "250px"
      });

      // info box
      sr.reveal(".info1", {
        origin: "right",
        duration: 4000,
        distance: "250px"
      });

      // Second section
      sr.reveal(".reveal-container2", {
        origin: "right",
        duration: 4000,
        distance: "250px"
      });

      // info box
      sr.reveal(".info2", {
        origin: "left",
        duration: 4000,
        distance: "250px"
      });


       /* Setting Scroll reveal as a global 
object in window */
window.sr = new ScrollReveal({
    reset: false // to repeat the effect
  });

  // First Section
  sr.reveal("#reveal-h", {
    origin: "left", // Place to start
    distance: "500px", // Distance to be moved
    duration: 3000
  });

  // Second section
  sr.reveal(".reveal-container", {
    origin: "bottom",
    duration: 3000,
    distance: "200px"
  });

  // info box
  sr.reveal(".info", {
    origin: "bottom",
    duration: 3000,
    distance: "200px"
  });

      /* Setting Scroll reveal as a global 
  object in window */
  window.sr = new ScrollReveal({
    reset: true // to repeat the effect
  });

  sr.reveal(".reveal-logo", {
    origin: "bottom", // Place to start
    distance: "700px", // Distance to be moved
    duration: 6000
  });