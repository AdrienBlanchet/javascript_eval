const tab = [1, 2, 3, 4, 5, 6];

//Fonction tirage aléatoire
let play = () => Math.round(Math.random() * tab.length);
//////////////////////////


const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
    button.addEventListener('click', (e) =>{
        
        switch (e.target.innerHTML) {
            case "New Game":
              alert('new');
              break;
            case "Roll Dice":
              alert('roll');
              break;
            case "Hold":
              alert('hold');
              break;
            default:
              null;
          }
    })
})
    


