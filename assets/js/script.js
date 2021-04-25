

//burger menu + header bg //

const burgerEl = document.querySelector('.header__burger');
const headerEl = document.querySelector('.header');
const  menuWrapEl = document.querySelector('.header__menu-wrap');
 

burgerEl.addEventListener('click', function(event)
{menuWrapEl.classList.toggle('header__menu-wrap_visible');
});

 


burgerEl.addEventListener('click', function(event)
{headerEl.classList.toggle('header_bg');

});


window.addEventListener('scroll', function() {
    let scrollPos = window.scrollY;
    if (scrollPos>0) {headerEl.classList.add('header_fixed')} else {headerEl.classList.remove('header_fixed')};

});



document.addEventListener("DOMContentLoaded", function (){let scrollPos = window.scrollY;
    if (scrollPos>0) {headerEl.classList.add('header_fixed')} else {headerEl.classList.remove('header_fixed')};

});

// slider//

var swiper = new Swiper('.swiper-container', {
  loop: true,
    slidesPerView: 3,
    breakpoints: {
      900:{slidesPerView:3},
      800:{slidesPerView:2},
      560:{slidesPerView:1},
      50:{slidesPerView:1}
  
  },
  
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    
    
  });

 
// animation//

    new WOW().init();
    

// form validation//

const contactsFormEl = document.querySelector('.contacts__form');
const formEmailEl = document.querySelector('.form-el__input[name=email]');

const emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


const inputName = document.querySelector('.form-el__input[name=name]');

const inputTelephone = document.querySelector('.form-el__input[name=telephone]');
const telephoneRegEx = /^(\+375|375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/;
 



contactsFormEl.addEventListener('submit', function(event) {

  event.preventDefault();
  let isMailChecked = emailRegEx.test(formEmailEl.value);
  if(!isMailChecked) {
    formEmailEl.classList.add('error');
    }
  else {formEmailEl.classList.remove('error');

}
});




formEmailEl.addEventListener('blur', function() {

  let isMailChecked = emailRegEx.test(formEmailEl.value);
  console.log(isMailChecked);
  if(!isMailChecked) {
    formEmailEl.classList.add('error');
    }
  else {formEmailEl.classList.remove('error');
}
});



formEmailEl.addEventListener('focus', function() {
 
  formEmailEl.classList.remove('error');
}
);





contactsFormEl.addEventListener('submit', function(event) {

  event.preventDefault();
   

  if (inputName.value === '' || inputName.value == null) {
    inputName.classList.add('error');
    }
    else {inputName.classList.remove('error');};

  });



  inputName.addEventListener('blur', function() {
 
    if (inputName.value === '' || inputName.value == null) {
      inputName.classList.add('error');
      }
      else {inputName.classList.remove('error');};
  }
  );



  inputName.addEventListener('focus', function() {
 
    inputName.classList.remove('error');
  }
  );


  contactsFormEl.addEventListener('submit', function(event) {

    event.preventDefault();
    let isTelephoneChecked = telephoneRegEx.test(inputTelephone.value);
    if(!isTelephoneChecked) {
      inputTelephone.classList.add('error');
      }
    else {inputTelephone.classList.remove('error');
  
  }
  });


  inputTelephone.addEventListener('blur', function() {

    let isTelephoneChecked = telephoneRegEx.test(inputTelephone.value);
    if(!isTelephoneChecked) {
      inputTelephone.classList.add('error');
      }
    else {inputTelephone.classList.remove('error');
  }
  });
  

  inputTelephone.addEventListener('focus', function() {
 
    inputTelephone.classList.remove('error');
  }
  );

  // theme switch   

const switchEl = document.querySelector ('.switch .slider');
const switchCheckboxEl = document.querySelector ('.switch .checkbox');

switchEl.addEventListener('click', function(event) {
  document.querySelector('html').classList.toggle('mode-dark');

})


 






 