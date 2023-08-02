const swiper = new Swiper('.swiper', {
    // Optional parameters
    
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  // ----------popap_active---------
  // $('button').on('click', function() {
    
  //   $(".wrapp-popup").removeClass('none_active');
  // });

  $(document).ready(function($) {
    $('button').click(function() {
      $('.wrapp-popup').fadeIn();
      return false;
    });	
    
    $('.popup-close').click(function() {
      $(this).parents('.wrapp-popup').fadeOut();
      return false;
    });		
   
    $(document).keydown(function(e) {
      if (e.keyCode === 27) {
        e.stopPropagation();
        $('.wrapp-popup').fadeOut();
      }
    });
    
    $('.wrapp-popup').click(function(e) {
      if ($(e.target).closest('.container-popup').length == 0) {
        $(this).fadeOut();					
      }
    });
  });

  // =====================

  $('.menu-icon').on('click', function() {

    $("nav").removeClass('open');
    $("#menu").removeClass('wrap-menu');
    $("#menu").addClass('menu_mob');
    $(".telephone1").removeClass('open_tel');
    $(".menu a").removeClass('menu-close');
    $(".social_media").removeClass('media_open');
    
  });

  $('.menu_a').on('click', function() {
    $("nav").addClass('open');
    $("#menu").addClass('wrap-menu');
    $("#menu").removeClass('menu_mob');
    $(".telephone1").addClass('open_tel');
    $(".menu a").addClass('menu-close');
   
  });
  
  // -------------------------
  $('#send').click(function() {
    var serializeFormData = $('#form').serialize();
    
    $.ajax({
      type: 'POST',
      url: '/get-form-data',
      data: serializeFormData,
      success: function(data) {
          console.log(data);
      },
      error:  function(data){
          alert('Внимание! произошла ошибка:' + serializeFormData);
      }
    });
});