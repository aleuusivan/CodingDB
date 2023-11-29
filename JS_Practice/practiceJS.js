   
   const startButton = document.querySelector('#buttonStart')
   const hitMeButton = document.querySelector('#buttonOne')
   const stayButton = document.querySelector('#buttonTwo')
   const popupBust = document.querySelector('#popupBust')

   //BET//
   
     
   
                           /* When Player clicks "START" */
 document.querySelector('#buttonStart').addEventListener('click', startGame)
    
    let total  = 0
    let count = 0
    let click = 0
    
    hitMeButton.disabled=true
    stayButton.disabled = true

      function startGame() {
        
        count++;
        if(count== 1){

        hitMeButton.disabled=false
        stayButton.disabled = false
        startButton.style.display = 'none';

        // Dealer's Cards://


        dealerCardOne = Math.floor(Math.random()*10 + 1)
        document.querySelector('#card7').innerText = ( dealerCardOne )

            const card1 = Math.floor(Math.random()*10 + 1)
            document.querySelector ('#card1').innerText =(card1)
            document.querySelector('#score').innerText = ( total+=card1 )

            const card2 = Math.floor(Math.random()*10)
            document.querySelector ('#card2').innerText =(card2)
            document.querySelector('#score').innerText = ( total+=card2 )
            startButton.classList.add('hidden')
        }
        
       if (total > 21){
        document.querySelector('#score').innerText = ('Bust!')

       }else if (total < 21){
        document.querySelector('#score').innerText = (total)
       }

       }
    



               /* When Player clicks "Hit Me" */
 document.querySelector('#buttonOne').addEventListener('click', hitMe)



function hitMe() {
    
    click++;
    if(click == 1){
       const card3 = Math.floor(Math.random()*10 + 1)
        document.querySelector('#card3').innerText=(card3)
        document.querySelector('#score').innerText = ( total+=card3 )
        
    }
    else if(click == 2){
        const card4 = Math.floor(Math.random()*10 + 1)
        document.querySelector('#card4').innerText=(card4)
        document.querySelector('#score').innerText = ( total+=card4 )
        

    }else if (click == 3){
        const card5 = Math.floor(Math.random()*10 + 1)
        document.querySelector('#card5').innerText=(card5)
        document.querySelector('#score').innerText = ( total+=card5 )
    
    }else if (click == 4){
        const card6 = Math.floor(Math.random()*10 + 1)
        document.querySelector('#card6').innerText=(card6)
        document.querySelector('#score').innerText = ( total+=card6 )
    } if (total > 21){
        document.querySelector('#score').innerText = ('Bust!')
          /* Turn off the button 'HitMe' and 'Stay' if busted. Also turn on 
          pop up "Busted"*/
        hitMeButton.disabled=true
        stayButton.disabled = true
        popupBust.classList.toggle("hidden");



       }else if (total < 21){
        document.querySelector('#score').innerText = (total)
             /* THIS IS THE LINE FOR NATURAL BLACKJACK */
       }else 
       document.querySelector('#score').innerText = ('BlackJack!')
   
}


               /* When Player clicks "Stay" */
document.querySelector('#buttonTwo').addEventListener('click', stay)

  function stay(){
    const dealerCardTwo = Math.floor(Math.random()* 10 + 1);
    document.querySelector('#card8').innerText = ( dealerCardTwo )
    const dealersHand = (dealerCardOne + dealerCardTwo);

    
    if (dealersHand < 21 && dealersHand > total){
      document.querySelector('#score').innerText = (' Dealer Wins!')
    }else if(dealersHand > 21) {
      document.querySelector('#score').innerText = ('Dealer Busts you WIN!')
    }else if(dealersHand < total) {
      document.querySelector('#score').innerText = ('You WIN!') 
  }
}
            