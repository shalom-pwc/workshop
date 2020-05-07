
const h1 = document.querySelector('h1');

//console.log(h1); // display h1 tag with open and close tag
console.log(h1.innerHTML);  // display content inside h1

h1.innerHTML = 'If you work hard you will reach ur goals'; //Change h1 content

h1.setAttribute('id','main-title'); // add id to h1
h1.classList = ('.big'); // add class to h1
console.log(h1);