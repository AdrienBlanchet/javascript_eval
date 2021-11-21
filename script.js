const buttons = document.querySelectorAll('.btn');
const icon = document.querySelector('.des')
const scoreRound1 = document.querySelector('.scoreRound1')
const scoreGlobal1 = document.querySelector('.scoreGlobal1')
const tab = [1, 2, 3, 4, 5, 6];
let result = 0;
let somme = 0;
console.log(scoreRound1);

//Fonction tirage aléatoire


let play = () => {
 result =  Math.floor(Math.random() * tab.length+1);
 //console.log(result); 
      switch (result) {
        case 1:
          icon.setAttribute('src', 'images/one.png'); 
          score1(result);
          alert('tour suivant');
          break;
        case 2:
          icon.setAttribute('src', 'images/two.png'); 
          score1(result);
          break;
        case 3:
          icon.setAttribute('src', 'images/three.png');
          score1(result);
          break;
        case 4:
          icon.setAttribute('src', 'images/four.png');
          score1(result);
          break;
        case 5:
          icon.setAttribute('src', 'images/five.png'); 
          score1(result);
          break;
        case 6:
          icon.setAttribute('src', 'images/six.png'); 
          score1(result);
          break;
        default:
          null;
      }
};


let score1 = (res) => {
  
  if(res == 1){
    scoreRound1.innerHTML = 0; 
    
  }else{
    somme += res  
    scoreRound1.innerHTML = somme;
  }
}

let scoreSave = (somme) => {
scoreGlobal1.innerHTML = somme;
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
              scoreSave(somme);
              break;
            default:
              null;
          }
    })
})
    


