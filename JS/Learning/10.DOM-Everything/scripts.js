// →→→ HELPER FUNCTION → TARGET ANY SELECTOR
function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return document.querySelectorAll(selector);
}


// →→→ HELPER FUNCTION → CREATE ANY ELEMENT
function make(selector){
  return document.createElement(selector);
}


// Target element → classic approach
//const main = document.querySelector('main'); console.log(main);

// Target element → awesome approach
const main = $('main'); console.log(main);
//main.setAttribute('class');

// →→→ Manage attributs
$('h1').setAttribute('id', 'main-title');
$('p').setAttribute('class', 'row'); //default it chose the first p the first node
$('#p4').removeAttribute('class');
$('html').setAttribute('lang', 'fr')

// →→→ MANAGE CLASS ATTRIBUTE
$('body').classList.add('menu-is-open', 'bob');


// →→→ CREATE ELEMENT [Classic approach]
const p1 = make('p');
p1.setAttribute('class', 'row');
p1.innerHTML = "this is how to add class";

const span = make('span');
span.textContent = "Info: ";

p1.prepend(span); //will add the element at the end of the main

// INSERT before - 2 argumants: what and the refernce
main.insertBefore(p1, $('#p2'));

//Remove an element
//$('main').remove();

$('main').append(p1);



// →→→ ADD TEXT CONTENT
p1.textContent = '<span></span>A simple Text.';

// →→→ ADD HTML CONTENT
p1.innerHTML = '<span class="success"></span>A complex Content.';



//CREATE admin message-------------------
const div1= make('div');
const div2 = make('div');

div1.setAttribute('id', 'admin-msg');
div1.setAttribute('class', 'message');
div2.setAttribute('class', 'msg-content');

div2.innerHTML = "Some admin text.";

div1.prepend(div2);

//$('body').insertBefore(div1, $('script'));




// →→→ YOU CAN DO MORE WITH HTML CONTENT
// insertAdjacentHTML()
// The four positions available are:
// "beforebegin" (directly before the current node)
// "afterbegin" (inside the current node, at the beginning)
// "beforeend" (inside the current node, at the end)
// "afterend" (directly after the current node)


// This will only touch the first item of his kind


// This will touch all of them
/*  console.log($$('p'));
$$('p').forEach(function(item){
  item.style.backgroundColor = '#ccc';

});  
 */
// →→→ DO STYLES
$('#p3').style.backgroundColor = '#f00';
$('#p4').style.cssText = 'background-color: #fc0; color: #fff'; 



// →→→ INSERT, APPEND, PREPEND



