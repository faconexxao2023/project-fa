// (document).ready(function() {
//     $('[data-fancybox]').fancybox({
//       afterShow: function(instance, current) {
//         $('.fancybox-slide').click(function() {
//           instance.close();
//         });
//       }
//     });
//   });

// const buttonProdInjector = document.getElementById('prod');
// console.log(buttonProdInjector);

// buttonProdInjector.addEventListener('click' , handleButtonInjProd)

// function handleButtonInjProd() {
//   window.open('../#contact')
// }




let toggles = document.querySelectorAll('.toggle')
const nav = document.getElementById('navigation')

const links = document.querySelectorAll('.font-title')
const linksDropDown = document.querySelectorAll('.dropdown-item')





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

const buttonPlugsInjectProdPage = document.getElementById('redi-home"')
const buttonChicotProdPage = document.getElementById('redi-chicot')

buttonPlugsInjectProdPage.addEventListener('click' , handlePlugs );
buttonChicotProdPage = addEventListener('click' , handleChicot )

 function handlePlugs () {
  window.open('../index.html#home')
} 

function handleChicot () {
  window.open('../Pages/ChicotesEspeciais.html')

}

 //==================redirecionamento pages Produtos de Eventos e Produtos de Industria=========================

 const buttonPlugsEvent = document.getElementById('event-produto')
 
 buttonPlugsEvent.addEventListener('click' , handleEvent)
 function handleEvent () {
  window.open('../Pages/PlugsInjetados.html#prod-event')

 }

 const buttonPlugsIndustry = document.getElementById('industry-produto')
 buttonPlugsIndustry.addEventListener('click' , handleIndustry)

 function handleIndustry() {
  window.open('../Pages/PlugsInjetados.html#industry')

 }