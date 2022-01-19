
var scores, roundScore, activePlayer, gamePlaying;

init();


document.querySelector('.btn-lancer').addEventListener('click', function() {
    if(gamePlaying) {
       
        var de = Math.floor(Math.random() * 6) + 1;

      
        var deDOM = document.querySelector('.de');
        deDOM.style.display = 'block';
        deDOM.src = 'de-' + de + '.png';


        
        if (de !== 1) {
          
            roundScore += de;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }    
});


document.querySelector('.btn-retenir').addEventListener('click', function() {
    if (gamePlaying) {
       
        scores[activePlayer] += roundScore;

   
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

       
        if (scores[activePlayer] >= 100) {
            document.querySelector('#nom-' + activePlayer).textContent = 'gagnant!';
            document.querySelector('.de').style.display = 'none';
            document.querySelector('.joueur-' + activePlayer + '-panel').classList.add('gagnant');
            document.querySelector('.joueur-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
          
            nextPlayer();
        }
    }
});


function nextPlayer() {
  
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.joueur-0-panel').classList.toggle('active');
    document.querySelector('.joueur-1-panel').classList.toggle('active');

   

    document.querySelector('.de').style.display = 'none';
}

document.querySelector('.btn-nouveau').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    
    document.querySelector('.de').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('nom-0').textContent = 'Joueur 1';
    document.getElementById('nom-1').textContent = 'Joueur 2';
    document.querySelector('.joueur-0-panel').classList.remove('gagnant');
    document.querySelector('.joueur-1-panel').classList.remove('gagnant');
    document.querySelector('.joueur-0-panel').classList.remove('active');
    document.querySelector('.joueur-1-panel').classList.remove('active');
    document.querySelector('.joueur-0-panel').classList.add('active');
}










