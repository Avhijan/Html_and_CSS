// console.log(document)
// document.title= "DOM";
// document.body.style.backgroundColor ='red';
// document.getElementById('header').style.color='white';
// document.getElementById('header').textContent="AbC";

// document.getElementsByClassName('anchor')[0].style.color='white';


// document.querySelector('#header').style.color="blue"
// document.querySelector('.anchor').style.color='white';

// console.log(document.querySelectorAll('.anchor'))

// document.querySelector('#abc').textContent ="hallo guest";
// document.querySelector('.xyz').innerHTML= '<a href = "#"> LInk </a>';

// isToggle= false;
// function sayHi()
// {
//     if(isToggle){
//         document.querySelector('#header').textContent="Hallo";
//     }else
// {
//         document.querySelector('#header').textContent="Hi!";
//     }
//     isToggle=!isToggle;

// }

// newButton = document.createElement('button');
// newButton.innerText = 'CLick';
// document.querySelector('body').appendChild(newButton)

// newlink = document.createElement('a');
// newlink.innerText='naya link';
// newlink.href='#'
// document.querySelector('body').appendChild(newlink);

let count = 0;

document.getElementById("plus").addEventListener("click", function () {
    count++;
    document.getElementById("count").textContent = count;
});

document.getElementById("minus").addEventListener("click", function () {
    count--;
    document.getElementById("count").textContent = count;
});