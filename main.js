let toggles = document.querySelectorAll('.toggle')
const nav = document.getElementById('navigation')

const links = document.querySelectorAll('.font-title')
const linksDropDown = document.querySelectorAll('.dropdown-item')

window.addEventListener('scroll' , onScroll)

function onScroll() {
  showBackToTopButtonOnScroll()
}
 
function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('on')
  } else {
    backToTopButton.classList.remove('on')
  }
}

//poderia no lugar do forEach ser o map também
Array.prototype.forEach.call(toggles, function (element) {
    element.addEventListener("click", function () {
      nav.classList.toggle("show");
    });
  });

  Array.prototype.forEach.call(links, function (element) {
    element.addEventListener("click", function () {
      nav.classList.remove("show");
    });
  });
  
  Array.prototype.forEach.call(linksDropDown, function (element) {
    element.addEventListener("click", function () {
      nav.classList.remove("show");
    });
  });

 //==================validações formulario=========================
const inputEmail = document.getElementById('email');
const buttonForms = document.getElementById('button-forms')
const alertEmail = document.getElementById('alert-email')

function handleFormsButton (event) {
  event.preventDefault();
  validEmail()
  // clickButonSuccess()

}

// function clickButonSuccess (event) {
//   window.open('http://127.0.0.1:5500/Pages/Forms.html')
// } 

function validEmail() {
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if(emailPattern.test(inputEmail.value)) {
    
    alertEmail.textContent= ''
    alertEmail.classList.remove('alert-invalid-email')
  } else {
    alertEmail.classList.add('alert-invalid-email')
    alertEmail.textContent= 'Formato de e-mail inválido, formato exemplo: (fulano123@gmail.com)!'
    return;
  }
}

 //==================redirecionamento pages=========================

const buttonPlugsInject = document.getElementById('btn-inject')


buttonPlugsInject.addEventListener('click' , clickButonPlugsInjectors );


 function clickButonPlugsInjectors () {
  window.open('./Pages/PlugsInjetados.html')
} 

const buttonChicotPlugs = document.getElementById('btn-chicot')

buttonChicotPlugs.addEventListener('click', clickHandleChicot )

function clickHandleChicot() {
  window.open('./Pages/ChicotesEspeciais.html')

}



//SCROLL REVIEW
ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home, 
  #home .title-home, 
  #contact .title-contact, 
  #local h1,  
  `)