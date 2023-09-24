var header=document.querySelector('#main-header');
header.style.borderBottom='solid 3px #000';

var items=document.getElementsByClassName('list-group-item');
// console.log(items[0]);

// items[0].style.fontWeight='bold'
// items[1].style.color='green'
// items[2].textContent='Hello';
items[3].style.backgroundColor='green'


for(var i=0; i<items.length; i++){
    items[i].style.fontWeight='bold'
}