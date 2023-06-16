'use strict';
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Guess the Number';
document.querySelector('.check').textContent = 'click!';
document.querySelector('.number').textContent ='??';
document.querySelector('.score').textContent =10;
document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess)

    if(!guess)
    {
        document.querySelector('.message').textContent = 'No number ! ';
    }
});
