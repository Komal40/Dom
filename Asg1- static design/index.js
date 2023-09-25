// function submitInfo(event) {
//     event.preventDefault();
//     console.log(document.getElementById('fname').value);
//     console.log(document.getElementById('email').value);
//     console.log(document.getElementById('tel').value);
//     console.log(document.getElementById('date').value);
//     console.log(document.getElementById('time').value);

// }


// const ul=document.querySelector('.items');

// ul.firstElementChild.textContent='Hello';
// ul.firstElementChild.style.color='green';

// ul.children[2].style.background='yellow';





const form=document.querySelector('#my-form');
const nameInp=document.querySelector('#fname');
const email=document.querySelector('#email');
const phn=document.querySelector('#tel');
const date=document.querySelector('#date');
const time=document.querySelector('#time');
const msg=document.querySelector('.msg');
const btn=document.querySelector('#btn');


form.addEventListener('submit', onSubmit);
// btn.addEventListener('mouseover', onSubmit);
// btn.addEventListener('mouseout', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInp.value=='' || email.value=='' || phn.value==''){
        msg.innerHTML='<h4>Please Enter feilds...</h4>';
        setTimeout(()=>msg.remove(), 3000);
    }
    else{
        console.log(nameInp.value+", "+email.value+", "+phn.value+", "+date.value+", "+time.value);
        localStorage.setItem('name', nameInp.value)
        localStorage.setItem('email', email.value)
        localStorage.setItem('phone',phn.value )
        localStorage.setItem('Date', date.value)
        localStorage.setItem('Time', time.value)
    }
}


