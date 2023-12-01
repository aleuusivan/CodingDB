   

////////Deck of Cards///////////////////



function Cards(face, numValue){
     this.face = face
     this.numValue = numValue
     
   
   }
   
   
   //////////Hearts -10-
   let AceOfHearts = new Cards("img/Cards/11.png", 11)
   let TwoOfHearts = new Cards("img/Cards/2.png", 2)
   let ThreeOfHearts = new Cards("img/Cards/3.png", 3)
   let FourOfHearts = new Cards("img/Cards/4.png", 4)
   let FiveOfHearts = new Cards("img/Cards/5.png", 5)
   let SixOfHearts = new Cards("img/Cards/6.png", 6)
   let SevenOfHearts = new Cards("img/Cards/7.png", 7)
   let EightOfHearts = new Cards("img/Cards/8.png", 8)
   let NineOfHearts = new Cards("img/Cards/9.png", 9)
   let TenOfHearts = new Cards("img/Cards/10.png", 10)
   
   //////////Spades -10-
   let AceOfSpades = new Cards("img/Cards/11.png", 11)
   let TwoOfSpades = new Cards("img/Cards/2.png", 2)
   let ThreeOfSpades = new Cards("img/Cards/3.png", 3)
   let FourOfSpades = new Cards("img/Cards/4.png", 4)
   let FiveOfSpades = new Cards("img/Cards/5.png", 5)
   let SixOfSpades = new Cards("img/Cards/6.png", 6)
   let SevenOfSpades = new Cards("img/Cards/7.png", 7)
   let EightOfSpades = new Cards("img/Cards/8.png", 8)
   let NineOfSpades = new Cards("img/Cards/9.png", 9)
   let TenOfSpades = new Cards("img/Cards/10.png", 10)
   
   
   //////////Clubs -10-
   let AceOfClubs = new Cards("img/Cards/11.png", 11)
   let TwoOfClubs = new Cards("img/Cards/2.png", 2)
   let ThreeOfClubs = new Cards("img/Cards/3.png", 3)
   let FourOfClubs = new Cards("img/Cards/4.png", 4)
   let FiveOfClubs = new Cards("img/Cards/5.png", 5)
   let SixOfClubs = new Cards("img/Cards/6.png", 6)
   let SevenOfClubs = new Cards("img/Cards/7.png", 7)
   let EightOfClubs = new Cards("img/Cards/8.png", 8)
   let NineOfClubs = new Cards("img/Cards/9.png", 9)
   let TenOfClubs = new Cards("img/Cards/10.png", 10)
   
   //////////Diamonds -10-
   let AceOfDiamonds = new Cards("img/Cards/11.png", 11)
   let TwoOfDiamonds = new Cards("img/Cards/2.png", 2)
   let ThreeOfDiamonds = new Cards("img/Cards/3.png", 3)
   let FourOfDiamonds = new Cards("img/Cards/4.png", 4)
   let FiveOfDiamonds = new Cards("img/Cards/5.png", 5)
   let SixOfDiamonds = new Cards("img/Cards/6.png", 6)
   let SevenOfDiamonds = new Cards("img/Cards/7.png", 7)
   let EightOfDiamonds = new Cards("img/Cards/8.png", 8)
   let NineOfDiamonds = new Cards("img/Cards/9.png", 9)
   let TenOfDiamonds = new Cards("img/Cards/10.png", 10)
   
   const deckOfCards = [
     
   AceOfHearts,
   TwoOfHearts,
   ThreeOfHearts,
   FourOfHearts, 
   FiveOfHearts, 
   SixOfHearts, 
   SevenOfHearts, 
   EightOfHearts, 
   NineOfHearts, 
   TenOfHearts, 
   AceOfSpades, 
   TwoOfSpades, 
   ThreeOfSpades,
   FourOfSpades, 
   FiveOfSpades,
   SixOfSpades,
   SevenOfSpades,
   EightOfSpades, 
   NineOfSpades, 
   TenOfSpades,
   AceOfClubs, 
   TwoOfClubs, 
   ThreeOfClubs,
   FourOfClubs, 
   FiveOfClubs, 
   SixOfClubs, 
   SevenOfClubs, 
   EightOfClubs,
   NineOfClubs, 
   TenOfClubs, 
   TwoOfDiamonds,
   ThreeOfDiamonds, 
   FourOfDiamonds,
   FiveOfDiamonds, 
   SixOfDiamonds, 
   SevenOfDiamonds, 
   EightOfDiamonds, 
   NineOfDiamonds, 
   TenOfDiamonds,
   ]
   
   
   
   
   
   
    //////////////////////////////////////////////////////////////////////////////////////////////  
    //////////////////////////////////////////////////////////////////////////////////////////////  
    //////////////////////////////////////////////////////////////////////////////////////////////  
    //////////////////////////////////////////////////////////////////////////////////////////////  
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
           let total = 0
           count++;
           if(count== 1){
   
           hitMeButton.disabled=false
           stayButton.disabled = false
           startButton.style.display = 'none';
   
           // Dealer's First Card://
           let dealerCardOne = Math.floor(Math.random()*52 + 1)
           var  image1 = document.getElementById('card7');
           image1.src = deckOfCards[dealerCardOne].face
   
   
           /* 
           document.querySelector('#card7').innerText = (deckOfCards[dealerCardOne].face ) */
   
   
           //////Your first two cards//////////
               let card1 = Math.floor(Math.random()*52 + 1)
               var  image2 = document.getElementById('card1');
               image2.src = deckOfCards[card1].face
               let card2 = Math.floor(Math.random()*52 + 1 )
               var  image3 = document.getElementById('card2');
               image3.src = deckOfCards[card2].face
   
               /* document.createElement ('#card1').innerText =(deckOfCards[card1].face) */
               document.querySelector('#score').innerText = ( total+=deckOfCards[card1].numValue )
               
               /* document.querySelector ('#card2').innerText =(deckOfCards[card2].face) */
              
              
               document.querySelector('#score').innerText = ( total+=deckOfCards[card2].numValue )
               /////Hide the start button after being pressed/////
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
          let card3 = Math.floor(Math.random()*50 + 1)
          var  image4 = document.getElementById('card3');
          image4.src = deckOfCards[card3].face
          /*  document.querySelector('#card3').innerText=(deckOfCards[card3].face) */
           document.querySelector('#score').innerText = ( total+=deckOfCards[card3].numValue )
           
       }
       else if(click == 2){
           let card4 = Math.floor(Math.random()*50 + 1)
           var image5 = document.getElementById('card4');
           image5.src = deckOfCards[card4].face
          /*  document.querySelector('#card4').innerText=(deckOfCards[card4].face) */
           document.querySelector('#score').innerText = ( total+=deckOfCards[card4].numValue )
           
   
       }else if (click == 3){
           let card5 = Math.floor(Math.random()*50 + 1)
           var image6 = document.getElementById('card5');
           image6.src = deckOfCards[card5].face
           /* document.querySelector('#card5').innerText=(deckOfCards[card5].face) */
           document.getElementById('#score').innerText = ( total+=deckOfCards[card5].numValue )
       
       }else if (click == 4){
           let card6 = Math.floor(Math.random()*50 + 1)
           var image7 = document.getElementById('card6');
           image7.src = deckOfCards[card6].face
           
   
           /* document.querySelector('#card6').innerText=(deckOfCards[card6].face) */
           document.querySelector('#score').innerText = ( total+=deckOfCardsCards[card6].numValue )
       } if (total > 21){
           document.querySelector('#score').innerText = ('Bust!')
             //// Turn off the button 'HitMe' and 'Stay' if busted. Also turn on pop up "Busted"///
           hitMeButton.disabled=true
           stayButton.disabled = true
           popupBust.classList.toggle("hidden");
   
   
   
          }else if (total < 21){
           document.querySelector('#score').innerText = (total)
                ///* THIS IS THE LINE FOR NATURAL BLACKJACK *////
          }else 
          document.querySelector('#score').innerText = ('BlackJack!')
      
   }
   
   
                  /* When Player clicks "Stay" */
   document.querySelector('#buttonTwo').addEventListener('click', stay)
   
     function stay(){
       const dealerCardTwo = Math.floor(Math.random()* 52 + 1);
       var  image8 = document.getElementById('card8');
       image8.src = deckOfCards[dealerCardTwo].face
   
       const dealersHand = (deckOfCards[dealerCardOne].numValue + deckOfCards[dealerCardTwo].numValue);
   
   
      /*  document.querySelector('#card8').innerText = ( deckOfCards[dealerCardTwo] )
       
    */
           
       if (dealersHand < 21 && dealersHand > total){
         document.querySelector('#score').innerText = (' Dealer Wins!')
       }else if(dealersHand > 21) {
         document.querySelector('#score').innerText = ('Dealer Busts you WIN!')
       }else if(dealersHand < total) {
         document.querySelector('#score').innerText = ('You WIN!') 
     }
   }
               