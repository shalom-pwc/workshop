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



/*CREATE admin message
-----------------------------------------------*/
const div1= make('div');
const div2 = make('div');

div1.setAttribute('id', 'admin-msg');
div1.setAttribute('class', 'message');
div2.setAttribute('class', 'msg-content');

div2.innerHTML = "Some admin text.";

div1.prepend(div2);

//$('body').insertBefore(div1, $('script'));



/*Events
-----------------------------------------------*/
let count = 0;

// The event listener needs 2 arguments 
$('#btn1').addEventListener('mousedown', function() {

  count++;
  $('#msg').innerHTML += "I just clicked !"
  $('#p1').innerHTML = count;

});


let counter = setInterval(function(){
  count++;
  document.querySelector('#msg').innerHTML = count;
}, 1000);
