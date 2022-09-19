
function loader(){
  document.querySelector('.face').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 4000);
}

window.onload = fadeOut();

 
$(document).ready(function () {
    $(".navbar a").on("click", function () {
        $(".navbar a").removeClass("active")
        $(this).addClass("active") 
    })

     $(".w").on('click', function () {
              $('.navbar').toggleClass("toogle")
    });
    })

 $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return true;
    });


      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });

  

    