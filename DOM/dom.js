var header=document.querySelector('#main-header');
header.style.borderBottom='solid 3px #000';

// var items=document.getElementsByClassName('list-group-item');
// console.log(items[0]);

// items[0].style.fontWeight='bold'
// items[1].style.color='green'
// items[2].textContent='Hello';
// items[3].style.backgroundColor='green'


// for(var i=0; i<items.length; i++){
//     items[i].style.fontWeight='bold'
// }


// var li=document.getElementsByTagName('li');
// console.log(li);
// for(var i=0; i<li.length; i++){
//     li[i].style.backgroundColor='yellow';
// }



//by queryselector
// var secondItem=document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor='green';

// var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.color='white';







//by queryselectorall
// var secondItem=document.querySelectorAll('li');
// secondItem[1].style.color='green'

// var odd=document.querySelectorAll('li:nth-child(odd');
// for(var i=0;i<odd.length; i++){
//     odd[i].style.backgroundColor='green'
// }




//traversing dom
var itemList=document.querySelector('#items')
// console.log(itemList.parentNode.parentNode.parentNode)
// itemList.parentNode.style.backgroundColor='yellow'

// console.log(itemList.parentElement)
// itemList.parentElement.style.backgroundColor='red'

// console.log(itemList.childNodes)
// console.log(itemList.children)
// itemList.children[1].style.backgroundColor='yellow'

// console.log(itemList.firstChild)
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.textContent='Hello'



// console.log(itemList.lastChild)
// console.log(itemList.lastElementChild)
// itemList.lastElementChild.textContent='Bye'

// console.log(itemList.nextSibling)
// console.log(itemList.nextElementSibling)

// console.log(itemList.previousElementSibling)



//ADD HELLO WORD BEFORE ITEM LISTER
var newDiv=document.createElement('div')
// newDiv.className='Hello'
// newDiv.id='hii'

// newDiv.setAttribute('title', 'hello')
var newDivText=document.createTextNode('HELLO')
newDiv.appendChild(newDivText)

var container=document.querySelector('header .container')
var h1=document.querySelector('header h1')

// console.log(newDiv)
container.insertBefore(newDiv, h1)




//ADD HELLO WORD BEFORE ITEM 1
var newli=document.createElement('li')
newli.className='list-group-item'
var newliText=document.createTextNode('Hello')
newli.appendChild(newliText)

var list=document.querySelector('ul.list-group')
var li=document.querySelector('ul.list-group li')
list.insertBefore(newliText, li)


console.log(newli)