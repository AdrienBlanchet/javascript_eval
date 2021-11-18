const button = document.querySelector('.button')
const player1 = document.querySelector('.player1')

const tab = [1, 2, 3, 4, 5, 6];

//Fonction tirage aléatoire
let play = () => Math.round(Math.random() * tab.length);
//////////////////////////

button.addEventListener('click', () => {

    player1.innerHTML  = play();

})

console.log(button);

