const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

/*** Programming Notes **************************************
  Arrow Functions - es6 syntactically compact alternative to a regular function expression
  see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  or https://www.w3schools.com/js/js_arrow_function.asp

  classList property - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  */

var string = document.lastModified;


let nLastModif = Date.parse(document.lastModified);
  
document.body.appendChild(document.createElement("center")).innerText = "Last Updated: " + document.lastModified



var f=new Date();
    /*document.write(f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());*/
var day = f.getDay();
var x = document.getElementById('myDIV');
if (day === 5) {
  x.style.display = 'block';
  document.querySelector('#myDIV').textContent = "Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park pavilion.";

}else {
  x.style.display = 'none';
}
