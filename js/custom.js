function CloseModal() {
  let senderName = document.forms[0].name.value
  let senderPhoneNumber = document.forms[0].phone.value
  
  let phoneRegEx5 = RegExp("^[0-9]{10}$")
  let phoneRegEx1 = RegExp("^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$")
  let phoneRegEx2 = RegExp("^[0-9]{3}-[0-9]{3}-[0-9]{4}$")
  let phoneRegEx3 = RegExp("^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$")
  let phoneRegEx4 = RegExp("^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$")
  
  if (senderName != "" && senderPhoneNumber!= ""){
    if (phoneRegEx1.test(senderPhoneNumber) || phoneRegEx2.test(senderPhoneNumber)
     || phoneRegEx3.test(senderPhoneNumber) || phoneRegEx4.test(senderPhoneNumber)  || phoneRegEx5.test(senderPhoneNumber)){
      document.getElementsByClassName("close")[0].click()
    }
    
}
}
  

  /*-------------------------------------------------------------------------------
    PRE LOADER
  -------------------------------------------------------------------------------*/

  $(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
  });



  /* HTML document is loaded. DOM is ready. 
  -------------------------------------------*/

  $(document).ready(function() {


  /*-------------------------------------------------------------------------------
    Hide mobile menu after clicking on a link
  -------------------------------------------------------------------------------*/

    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });



  /*-------------------------------------------------------------------------------
    smoothScroll js
  -------------------------------------------------------------------------------*/
    $(function() {
        $('.navbar-default a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
        });
    });



  /*-------------------------------------------------------------------------------
    Owl Carousel
  -------------------------------------------------------------------------------*/
    
   $(document).ready(function() {
    $("#screenshot-carousel").owlCarousel({
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      slideSpeed: 300,
    });
  });
  
  
   $(document).ready(function() {
    $("#about-carousel").owlCarousel({
      autoPlay: 6000,
      items : 1,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [979,1],
      itemsTablet: [768,1],
      itemsTabletSmall: false,
      itemsMobile : [479,1],
    });
  });



  /*-------------------------------------------------------------------------------
    Back top Top
  -------------------------------------------------------------------------------*/

  $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
          $('.go-top').fadeIn(200);
            } else {
                $('.go-top').fadeOut(200);
           }
        });   
          // Animate the scroll to top
        $('.go-top').click(function(event) {
          event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
    });



  /*-------------------------------------------------------------------------------
    wow js - Animation js
  -------------------------------------------------------------------------------*/

  new WOW({ mobile: false }).init();


  });

