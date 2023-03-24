const injectForms = document.getElementById('redi-forms')
injectForms.addEventListener('click' , handlePlugsForms)
function handlePlugsForms() {
  window.open('../Pages/PlugsInjetados.html')

}
 //==================redirecionamento pages Produtos de Eventos e Produtos de Industria=========================
const prodEvent = document.getElementById('redi-event-prod')
prodEvent.addEventListener('click' , prodClickEvent)

function prodClickEvent() {
  window.open('../Pages/PlugsInjetados.html#prod-event')

}

const prodIndustry = document.getElementById('redi-industry-prod')
prodIndustry.addEventListener('click' , prodClickIndustry)
function prodClickIndustry() {
  window.open('../Pages/PlugsInjetados.html#industry')

}