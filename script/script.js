$(function() {
    const menu = $('.header-menu__burger-menu');

    menu.on('click', function(event){
        event.preventDefault();

        const description = $('.menu__list');

        description.slideToggle('slow', function(){
            let expanded = $('.menu__list').attr('aria-expanded');
            let list_expanded = $('.menu__list');
            let burger = $('.burger');
            let close = $('.burger__close');
            let gradient = $('.gradient-container');

            if (expanded == 'false') {
                expanded = true;
                list_expanded.attr('aria-expanded', expanded); 
                close.css('display', 'block');
                burger.css('display', 'none');
                gradient.css('display', 'block');       
            } else {
                expanded = false;
                list_expanded.attr('aria-expanded', expanded);
                close.css('display', 'none');
                burger.css('display', 'block');
                gradient.css('display', 'none');    
            }
        });
    });

    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,

        breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },

            641: {
              slidesPerView: 2,
              spaceBetween: 37
            },

            1301: {
              slidesPerView: 3,
              spaceBetween: 20
            }
          },

        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
    
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });

    $("nav li a").click(function () { 
      elementClick = $(this).attr("href"); 
      destination = $(elementClick).offset().top; 
      $("body,html").animate({scrollTop: destination }, 800); 
    });  
})
