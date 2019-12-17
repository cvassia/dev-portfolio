
 
      function openNav() {
        document.getElementById("myNav").style.height = "100%";
      }

      function closeNav() {
        document.getElementById("myNav").style.height = "0%";
      }
   
      $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll < 17) {
          $(".fixed-top").css("background", "black");
          $(".fixed-top #logo").css("color", "white");
        } else {
          $(".fixed-top").css("background", "#0000004f");
         
        }
      });
   