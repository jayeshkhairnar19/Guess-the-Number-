let form = document.querySelector('form');
let randomNumber = parseInt(Math.random()*100)+1;
console.log(randomNumber);
let count = 10;

form.addEventListener('submit', function(e){
    e.preventDefault();
    let number = parseInt(document.getElementById('number').value);
    let msg = document.getElementById('msg');
    let remaining = document.getElementById('remaining');

    if(number<1 || number>100 || number==='' || isNaN(number)){
        msg.innerHTML = `Please enter a valid number between 1 and 100`;
    }
    else{
        // count--;
        if(count===0){
            msg.innerHTML = `Better luck next time....Try again later`;
        }
        else if(count>0 && count<=10){
            if(number===randomNumber){
                msg.innerHTML = 'Congratulations! You guessed the right number';
                remaining.innerHTML = ''; // Reset the remaining attempts message;
            }
            else{
                if(randomNumber>number){
                    msg.innerHTML = `Your number is too small!......Increase your number`;
                    count--;
                    remaining.innerHTML = `${count} attempts left`;
                }
                else if(randomNumber<number){
                    msg.innerHTML = `Your number is too large!.........Decrese your number`;
                    count--;
                    remaining.innerHTML = `${count} attempts left`;
                }
            }
        }
        
    }
})