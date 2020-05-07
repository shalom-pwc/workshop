/* DOM = Document Object Model ---example all tags in html
---------------------------------------- */
// Grab the head title
const title = document.querySelector('title');


//Di
console.log(title)


console.log(title.innerHTML)


const h1 = document.querySelector('h1');
h1.innerHTML = "I just the h1 "
h1.classList.add('.bob');
h1.classList.remove('mainheader');
h1.setAttribute('id', 'mainheader');
console.log(h1.getAttribute('id'));

//get element by id 
const h1ID = document.getElementById('h1')

const myClass = document.getElementsByClassName('bob')

const myConsle = document.querySelector('my-consle')
myConsle.innerHTML= "let bob=3;"
//Di
//console.log(myConsle);

document.querySelector("html").innerHTML = "";




const h1 = document.querySelector('h1');

console.log(h1.innerHTML);