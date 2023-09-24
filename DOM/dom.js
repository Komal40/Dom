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
var secondItem=document.querySelectorAll('li');
secondItem[1].style.color='green'

var odd=document.querySelectorAll('li:nth-child(odd');
for(var i=0;i<odd.length; i++){
    odd[i].style.backgroundColor='green'
}


