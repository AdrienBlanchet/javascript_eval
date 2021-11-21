const buttons = document.querySelectorAll('.btn');
const icon = document.querySelector('.des')
const title_player1 = document.querySelector('.round1 > h2')
const title_player2 = document.querySelector('.round2 > h2')

const scoreRound1 = document.querySelector('.scoreRound1')
const scoreGlobal1 = document.querySelector('.scoreGlobal1')

const scoreRound2 = document.querySelector('.scoreRound2')
const scoreGlobal2 = document.querySelector('.scoreGlobal2')

const tab = [1, 2, 3, 4, 5, 6];
let tirage = 0;
let scoreR1 = 0;
let scoreG1 = 0;
let scoreR2 = 0;
let scoreG2 = 0;


//Fonction tirage aléatoire / Affichage /appel des fonctions
let play = () => {
 tirage =  Math.floor(Math.random() * tab.length+1);
  
      switch (tirage) {
        case 1:
          icon.setAttribute('src', 'images/one.png'); 
          changePlayerAndReset();
          break;
        case 2:
          icon.setAttribute('src', 'images/two.png'); 
          addScoreRound();
          break;
        case 3:
          icon.setAttribute('src', 'images/three.png');
          addScoreRound();
          break;
        case 4:
          icon.setAttribute('src', 'images/four.png');
          addScoreRound();
          break;
        case 5:
          icon.setAttribute('src', 'images/five.png'); 
          addScoreRound();
          break;
        case 6:
          icon.setAttribute('src', 'images/six.png'); 
          addScoreRound();
          break;
        default:
          null;
      }
};


let addScoreRound = () => {
  if (title_player1.classList.value == 'underline'){
    scoreR1 += tirage;
    scoreRound1.innerHTML = scoreR1;
  }else{
    scoreR2 += tirage;
    scoreRound2.innerHTML = scoreR2;
  }
}

let changePlayerAndReset = () => {
  if (title_player1.classList.value == 'underline'){
    scoreR1 = 0;
    scoreRound1.innerHTML = scoreR1;
  }else{
    scoreR2 = 0;
    scoreRound2.innerHTML = scoreR2;
  }
  title_player1.classList.toggle('underline');
  title_player2.classList.toggle('underline');
}


let scoreSave = () => {
  if (title_player1.classList.value == 'underline'){
    scoreG1 += scoreR1;
    scoreGlobal1.innerHTML = scoreG1;
    changePlayer();
  } else{
    scoreG2 += scoreR2;
    scoreGlobal2.innerHTML = scoreG2;
    changePlayer();
  }

}

let changePlayer = () => {
  title_player1.classList.toggle('underline');
  title_player2.classList.toggle('underline');
}


buttons.forEach((button) => {
    button.addEventListener('click', (e) =>{
        
        switch (e.target.innerHTML) {
            case "New Game":
              alert('new');
              break;
            case "Roll Dice":
              play()
              break;
            case "Hold":
              scoreSave();
              break;
            default:
              null;
          }
    })
})
    


