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

    const callform = $('.header-menu__call');
    const callfooter = $('.footer__call');
    const callmobile = $('.header-menu__call-mobile');
    const knowmore = $('.presentation__about_more');
    const knowprice = $('.activity__price');
    const proekt = $('.examples__order');
    const closecallform = $('.input__form_close');
    const gradient = $('.gradient');

    function openFormCall() {
      let form = $('.input-call');
      let pagePosition = window.scrollY;
      let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
      
      form.css('display', 'flex'); 

      $('body').addClass('fixed');

      document.body.style.paddingRight = paddingOffset;
      document.body.dataset.position = pagePosition;
      document.body.style.top = -pagePosition + 'px';
      form.css('top', pagePosition + 'px');
    }

    function openFormEmail() {
      let form = $('.input');
      let pagePosition = window.scrollY;
      let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
           
      form.css('display', 'flex'); 

      $('body').addClass('fixed');

      document.body.style.paddingRight = paddingOffset;
      document.body.dataset.position = pagePosition;
      document.body.style.top = -pagePosition + 'px';
      form.css('top', pagePosition + 'px');
    }

    function closeForm() {
      let form = $('.input-call');
      let form2 = $('.input');
      let pagePosition = parseInt(document.body.dataset.position, 10);
            
      form.css('display', 'none');
      form2.css('display', 'none');  
      
      $('body').removeClass('fixed');
     
      document.body.style.paddingRight = 0;
      document.body.style.top = 'auto';
      window.scroll({top: pagePosition, left: 0});
      document.body.removeAttribute('data-position');
    }

    callform.on('click', function(event){
      event.preventDefault();
            
      openFormCall();
    });

    callfooter.on('click', function(event){
      event.preventDefault();

      openFormCall();
    });

    callmobile.on('click', function(event){
      event.preventDefault();

      openFormCall();
    });
 
    knowmore.on('click', function(event){
      event.preventDefault();

      openFormEmail();
    });

    knowprice.on('click', function(event){
      event.preventDefault();
            
      openFormEmail();
    });

    proekt.on('click', function(event){
      event.preventDefault();
            
      openFormEmail();
    });

    closecallform.on('click', function(event){
      event.preventDefault();

      closeForm();
    });

    gradient.on('click', function(event){
      event.preventDefault();

      closeForm();
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

    $('input[type="tel"]').inputmask({"mask": "+7 (999) 999-9999"});
});
