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
    const agree = $('.agree');
    const closecAgree = $('.agree__form_close');

    function openFormCall() {
      let form = $('.input-call');
      let pagePosition = window.scrollY;
      let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
      let expanded = $('.input__form_block');
       
      form.fadeIn();
      form.css('display', 'flex'); 

      $('body').addClass('fixed');

      document.body.style.paddingRight = paddingOffset;
      document.body.dataset.position = pagePosition;
      document.body.style.top = -pagePosition + 'px';
      form.css('top', pagePosition + 'px');

      expanded.attr('aria-expanded', 'true');
    }

    function openFormEmail() {
      let form = $('.input');
      let pagePosition = window.scrollY;
      let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
      let expanded = $('.input__form_block');
            
      form.fadeIn();
      form.css('display', 'flex');

      $('body').addClass('fixed');

      document.body.style.paddingRight = paddingOffset;
      document.body.dataset.position = pagePosition;
      document.body.style.top = -pagePosition + 'px';
      form.css('top', pagePosition + 'px');

      expanded.attr('aria-expanded', 'true');
    }

    function closeForm() {
      let formCall = $('.input-call');
      let formMail = $('.input');
      let formMessage = $('.input-out');
      let pagePosition = parseInt(document.body.dataset.position, 10);
      let expanded = $('.input__form_block');
            
      formCall.css('display', 'none');
      formMail.css('display', 'none');  
      formMessage.css('display', 'none');
      
      $('body').removeClass('fixed');
     
      document.body.style.paddingRight = 0;
      document.body.style.top = 'auto';
      window.scroll({top: pagePosition, left: 0});
      document.body.removeAttribute('data-position');

      expanded.attr('aria-expanded', 'false');
    }

    function closeAgree() {
      let formAgree = $('.agree-block');
      let expanded = $('.agree__form_block');
            
      formAgree.css('display', 'none');

      expanded.attr('aria-expanded', 'false');
    }

    function openWinowMessage() {
      let form = $('.input-out');
      let pagePosition = window.scrollY;
      let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
      let expanded = $('.input__form_block');
            
      form.fadeIn();
      form.css('display', 'flex');

      $('body').addClass('fixed');

      document.body.style.paddingRight = paddingOffset;
      document.body.dataset.position = pagePosition;
      document.body.style.top = -pagePosition + 'px';
      form.css('top', pagePosition + 'px');

      expanded.attr('aria-expanded', 'true');
    }

    function openWinowAgree() {
      let form = $('.agree-block');
      let pagePosition = window.scrollY;
      let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
      let expanded = $('.agree__form_block');
            
      form.fadeIn();
      form.css('display', 'flex');

      $('body').addClass('fixed');

      document.body.style.paddingRight = paddingOffset;
      document.body.dataset.position = pagePosition;
      document.body.style.top = -pagePosition + 'px';
      form.css('top', pagePosition + 'px');

      expanded.attr('aria-expanded', 'true');
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

    agree.on('click', function(event){
      event.preventDefault();
            
      openWinowAgree();
    });

    closecAgree.on('click', function(event){
      event.preventDefault();

      closeAgree();
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

    $('.input__form').each(function(){
      $(this).validate({
        errorPlacement(error, element) {
          return true;
        },

        focusInvalid: false,

        rules: {
          Имя: {
            required: true,
            minlength: 3,
          },

          Телефон: {
            required: true,
          },

          Почта: {
            required: true,
            email: true,
          },

          Чек: {
            required: true,
          },
        },

        submitHandler(form) {
          let th = $(form);
    
          $.ajax({
            type: 'POST',
            url: 'mail.php',
            data: th.serialize(),
          }).done(() => {
            closeForm();
            openWinowMessage();

            th.trigger('reset');
          });
    
          return false;
        }       
      });
    });   
});
