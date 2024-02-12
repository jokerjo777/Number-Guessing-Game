const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById('submitBtn').onclick = function() {
    let guess = document.getElementById('inputFild').value;
    guesses += 1;

    if(guess == answer) {
        document.getElementById('theAnswer').innerHTML = `${answer} is the number. It took you ${guesses} guesses`
    } else if(guess < answer) {
        document.getElementById('theAnswer').innerHTML = 'Too Small!!';
    } else {
        document.getElementById('theAnswer').innerHTML = 'Too Large!!';
    }
}