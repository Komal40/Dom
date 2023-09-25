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
// var itemList=document.querySelector('#items')
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



// //ADD HELLO WORD BEFORE ITEM LISTER
// var newDiv=document.createElement('div')
// // newDiv.className='Hello'
// // newDiv.id='hii'

// // newDiv.setAttribute('title', 'hello')
// var newDivText=document.createTextNode('HELLO')
// newDiv.appendChild(newDivText)

// var container=document.querySelector('header .container')
// var h1=document.querySelector('header h1')

// // console.log(newDiv)
// container.insertBefore(newDiv, h1)




//ADD HELLO WORD BEFORE ITEM 1
// var newli=document.createElement('li')
// newli.className='list-group-item'
// var newliText=document.createTextNode('Hello')
// newli.appendChild(newliText)

// var list=document.querySelector('ul.list-group')
// var li=document.querySelector('ul.list-group li')
// list.insertBefore(newliText, li)


// console.log(newli)











//FILTERING ELEMENTS:

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');


var filter=document.getElementById('filter')

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);

function addItem(e){
    e.preventDefault();
    var newItem=document.getElementById('item').value
    var newItem2=document.getElementById('item2').value
    var li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(newItem2));


    //delete btn
    var deleteBtn=document.createElement('button');
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);
    itemList.appendChild(li);


    //edit btn
    var editBtn=document.createElement('button');
    editBtn.className='btn btn-secondary btn-sm float-right';
    editBtn.appendChild(document.createTextNode('EDIT'));
    li.appendChild(editBtn);
    itemList.appendChild(li);

}


function removeItem(e){
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}


function filterItems(e){
    var text=e.target.value.toLowerCase();
    var items=itemList.getElementsByTagName('li');

    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1 ){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    })
}