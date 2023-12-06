var dealerTotal = 0
var yourTotal = 0 
var deck
var count = 0
var betAmount = 0
var click = 0
var money = localStorage.getItem('money') || 20
var win = false
var yourAces = 0
var dealerAces = 0


const startButton = document.querySelector('#buttonStart')
const hitMeButton = document.querySelector('#buttonOne')
const stayButton = document.querySelector('#buttonTwo')
const popupBust = document.querySelector('#popupBust')
const popupWin = document.querySelector('#popupWin')
const popupLose = document.querySelector('#popupLose')
const popupPush = document.querySelector('#popupPush')
document.querySelector('#monies').innerText = ('Money: $' + money )




hitMeButton.disabled=true
stayButton.disabled =true 


window.onload = function(){

     Cards();

}


function Cards(face, value, ace){
    this.face = face
    this.value = value
    this.ace = ace

    
    
  
  }
  
  
  //////////Hearts -10-
  let AceOfHearts = new Cards("img/Cards/11.png ", 11, 1)
  let TwoOfHearts = new Cards("img/Cards/2.png", 2, 0)
  let ThreeOfHearts =  new Cards("img/Cards/3.png", 3, 0)
  let FourOfHearts = new Cards("img/Cards/4.png", 4, 0)
  let FiveOfHearts = new Cards("img/Cards/5.png", 5, 0)
  let SixOfHearts = new Cards("img/Cards/6.png", 6, 0)
  let SevenOfHearts = new Cards("img/Cards/7.png", 7, 0)
  let EightOfHearts = new Cards("img/Cards/8.png", 8, 0)
  let NineOfHearts = new Cards("img/Cards/9.png", 9, 0)
  let TenOfHearts = new Cards("img/Cards/10.png", 10, 0)
  let KingOfHearts = new Cards("img/Cards/10.png", 10, 0)
  let QueenOfHearts = new Cards("img/Cards/10.png", 10, 0)
  let JackOfHearts = new Cards("img/Cards/10.png", 10, 0)

  
  //////////Spades -10-
  let AceOfSpades = new Cards("img/Cards/11.png", 11)
  let TwoOfSpades = new Cards("img/Cards/2.png", 2, 0)
  let ThreeOfSpades = new Cards("img/Cards/3.png", 3, 0)
  let FourOfSpades = new Cards("img/Cards/4.png", 4, 0)
  let FiveOfSpades = new Cards("img/Cards/5.png", 5, 0)
  let SixOfSpades = new Cards("img/Cards/6.png", 6, 0)
  let SevenOfSpades = new Cards("img/Cards/7.png", 7, 0)
  let EightOfSpades = new Cards("img/Cards/8.png", 8, 0)
  let NineOfSpades = new Cards("img/Cards/9.png", 9, 0)
  let TenOfSpades = new Cards("img/Cards/10.png", 10, 0)
  let KingOfSpades = new Cards("img/Cards/10.png", 10, 0)
  let QueenOfSpades = new Cards("img/Cards/10.png", 10, 0)
  let JackOfSpades = new Cards("img/Cards/10.png", 10, 0)

  
  //////////Clubs -10-
  let AceOfClubs = new Cards("img/Cards/11.png", 11, 1)
  let TwoOfClubs = new Cards("img/Cards/2.png", 2, 0)
  let ThreeOfClubs = new Cards("img/Cards/3.png", 3, 0)
  let FourOfClubs = new Cards("img/Cards/4.png", 4, 0)
  let FiveOfClubs = new Cards("img/Cards/5.png", 5, 0)
  let SixOfClubs = new Cards("img/Cards/6.png", 6, 0)
  let SevenOfClubs = new Cards("img/Cards/7.png", 7, 0)
  let EightOfClubs = new Cards("img/Cards/8.png", 8, 0)
  let NineOfClubs = new Cards("img/Cards/9.png", 9, 0)
  let TenOfClubs = new Cards("img/Cards/10.png", 10, 0)
  let KingOfClubs = new Cards("img/Cards/10.png", 10, 0)
  let QueenOfClubs = new Cards("img/Cards/10.png", 10, 0)
  let JackOfClubs = new Cards("img/Cards/10.png", 10, 0)
  
  //////////Diamonds -10-
  let AceOfDiamonds = new Cards("img/Cards/11.png", 11, 1)
  let TwoOfDiamonds = new Cards("img/Cards/2.png", 2, 0)
  let ThreeOfDiamonds = new Cards("img/Cards/3.png", 3, 0)
  let FourOfDiamonds = new Cards("img/Cards/4.png", 4, 0)
  let FiveOfDiamonds = new Cards("img/Cards/5.png", 5, 0)
  let SixOfDiamonds = new Cards("img/Cards/6.png", 6, 0)
  let SevenOfDiamonds = new Cards("img/Cards/7.png", 7, 0)
  let EightOfDiamonds = new Cards("img/Cards/8.png", 8, 0)
  let NineOfDiamonds = new Cards("img/Cards/9.png", 9, 0)
  let TenOfDiamonds = new Cards("img/Cards/10.png", 10, 0)
  let KingOfDiamnonds= new Cards("img/Cards/10.png", 10, 0)
  let QueenOfDiamnonds = new Cards("img/Cards/10.png", 10, 0)
  let JackOfDiamnonds = new Cards("img/Cards/10.png", 10, 0)
  
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
  KingOfHearts,
  QueenOfHearts,
  JackOfHearts, 
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
  KingOfSpades,
  QueenOfSpades,
  JackOfSpades,
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
  KingOfClubs,
  QueenOfClubs,
  JackOfClubs,
  AceOfDiamonds,
  TwoOfDiamonds,
  ThreeOfDiamonds, 
  FourOfDiamonds,
  FiveOfDiamonds, 
  SixOfDiamonds, 
  SevenOfDiamonds, 
  EightOfDiamonds, 
  NineOfDiamonds, 
  TenOfDiamonds,
  KingOfDiamnonds,
  QueenOfDiamnonds,
  JackOfDiamnonds,
  ]

  


document.querySelector('#buttonStart').addEventListener('click', startGame)
document.querySelector('#buttonOne').addEventListener('click', hitMe)
document.querySelector('#buttonTwo').addEventListener('click', stay)
document.querySelector('#buttonBet').addEventListener('click', bet)


function bet(){
  betInput = parseInt(document.querySelector('#betInput').value)  
  money = (money-parseFloat(betInput))
  document.querySelector('#monies').innerText = ('Money: $' + money)  
  betAmount = parseFloat(betAmount) + parseFloat(betInput)

}
   
  





function startGame() {
  
  hitMeButton.disabled=false
  stayButton.disabled = false
  startButton.style.display = 'none'
  document.querySelector('#monies').innerText ='Money $'+ (money)

  ////////  Dealer's First Card: ///////////////////
  let dealerCardOne = Math.floor(Math.random()*deckOfCards.length + 1)
  var  image1 = document.getElementById('card7')
  image1.src = deckOfCards[dealerCardOne].face
  dealerTotal = deckOfCards[dealerCardOne].value
  dealerAces = dealerAces + deckOfCards[dealerCardOne].ace
  


 


  //////Your first two cards//////////

  //////////////  Your Card 1   ////////////////////
    let card1 = Math.floor(Math.random()*deckOfCards.length + 1)
    var  image2 = document.getElementById('card1');      
    image2.src = deckOfCards[card1].face
    yourAces = yourAces + deckOfCards[card1].ace


      //////////////  Your Card 2  ////////////////////
    let card2 = Math.floor(Math.random()*deckOfCards.length + 1 )
    var  image3 = document.getElementById('card2');
    image3.src = deckOfCards[card2].face
    yourTotal = (deckOfCards[card1].value + deckOfCards[card2].value)      
    document.querySelector('#score').innerText = ( yourTotal )
    yourAces = yourAces + deckOfCards[card2].ace

    if(yourTotal === 21)

      
     
     /////Hide the start button after being pressed/////
    startButton.classList.add('hidden')
  return yourTotal

  }
  function winner(){
    betAmount = betAmount*2
    money = (parseFloat(money) + parseFloat(betAmount))
    document.querySelector('#monies').innerText = ('Money: $' + money )
    localStorage.setItem('money', money)
    
  }

  function loser(){
    money = parseFloat(money)-parseFloat(betAmount)
    document.querySelector('#monies').innerText = ('Money: $' + money )
    localStorage.setItem('money', money)
    
  }

function hitMe(){
/////////////////////////////// Your Card 3 ///////////////////////////////// 
  
  count++

  if(count === 1){
    let card3 = Math.floor(Math.random()*deckOfCards.length + 1 )
    var  image5 = document.getElementById('card3');
    image5.src = deckOfCards[card3].face
    yourTotal = yourTotal + deckOfCards[card3].value
    yourAces = yourAces + deckOfCards[card3].ace
    document.querySelector('#score').innerText = ( yourTotal)

  }
  if(count === 2){
    let card4 = Math.floor(Math.random()*deckOfCards.length + 1)
    var image6 = document.getElementById('card4')
    image6.src = deckOfCards[card4].face     
    yourTotal  =  yourTotal + deckOfCards[card4].value
    yourAces = yourAces + deckOfCards[card4].ace
    document.querySelector('#score').innerText = ( yourTotal)
  }
  if(count === 3){
    let card5 = Math.floor(Math.random()*deckOfCards.length + 1)
    var image7 = document.getElementById('card5')
    image7.src =  deckOfCards[card5].face 
    yourTotal  =  yourTotal + deckOfCards[card5].value
    yourAces = yourAces + deckOfCards[card5].ace
    document.querySelector('#score').innerText = ( yourTotal)
  }
  if(count === 4){
    let card6 = Math.floor(Math.random()*deckOfCards.length + 1)
    var image8 = document.getElementById('card5')
    image8.src =  deckOfCards[card6].face 
    yourTotal  =  yourTotal + deckOfCards[card6].value
    yourAces = yourAces + deckOfCards[card6].ace
    document.querySelector('#score').innerText = ( yourTotal)
  }
  if(yourTotal  > 21 && yourAces > 0){
    yourTotal = yourTotal - (10 * yourAces)
    document.querySelector('#score').innerText = (yourTotal)
    }else if(yourTotal  > 21 && yourAces === 0){
        document.querySelector('#score').innerText = ('Bust!')
         hitMeButton.disabled=true
        stayButton.disabled = true
        popupBust.classList.toggle("hidden")
        loser()
  }
}
if(yourTotal === 21){
    document.querySelector('#score').innerText = ('BlackJack you Win!')
    hitMeButton.disabled=true
    stayButton.disabled = true
    stay()
    
    document.querySelector('#score').innerText = ('Dealer Busts You Win!')
    hitMeButton.disabled=true
    stayButton.disabled = true
    popupWin.classList.toggle("hidden")
    winner()

  }if(21-yourTotal > 21-dealerTotal){document.querySelector('#score').innerText = ('Dealer Wins!')
  hitMeButton.disabled=true
  stayButton.disabled = true
  popupLose.classList.toggle("hidden")
  loser()
 }



//////////////          Player hits Stay              /////////////////////////
function stay(){
  click++
  ////////  Dealer's Second Card: ///////////////////
  if (click === 1){
  let dealerCardTwo = Math.floor(Math.random()*deckOfCards.length + 1)
  var  image9 = document.getElementById('card8')
  image9.src = deckOfCards[dealerCardTwo].face
  dealerTotal = dealerTotal+deckOfCards[dealerCardTwo].value
  dealerAces = dealerAces + deckOfCards[dealerCardTwo].ace
  }
   if(dealerTotal < 17){
    let dealerCardThree = Math.floor(Math.random()*deckOfCards.length + 1)
    var  image10 = document.getElementById('card9')
    image10.src = deckOfCards[dealerCardThree].face
    dealerTotal = dealerTotal+deckOfCards[dealerCardThree].value
    dealerAces = dealerAces + deckOfCards[dealerCardThree].ace
    }if(dealerTotal > 21 ){
      document.querySelector('#score').innerText = ('Dealer Busts, You Win!')
      hitMeButton.disabled=true
      stayButton.disabled = true
      popupWin.classList.toggle("hidden")
      winner()

}else if(dealerTotal === yourTotal){
    document.querySelector('#score').innerText = ('Push!')
    hitMeButton.disabled=true
    stayButton.disabled = true
    popupDraw.classList.toggle("hidden")

}else if(dealerTotal === 21){
      document.querySelector('#score').innerText = ('Dealer Wins!')
      hitMeButton.disabled=true
      stayButton.disabled = true
      popupLose.classList.toggle("hidden")
      loser()

}else if( dealerTotal <  yourTotal){
      document.querySelector('#score').innerText = ('You Win!')
      hitMeButton.disabled=true
      stayButton.disabled = true
      popupWin.classList.toggle("hidden")
      winner()

}
else if(dealerTotal > yourTotal){
      document.querySelector('#score').innerText = ('Dealer Wins!')
      hitMeButton.disabled=true
      stayButton.disabled = true
      popupLose.classList.toggle("hidden")
      loser()


}else if(21-yourTotal > 21-dealerTotal){
  document.querySelector('#score').innerText = ('Dealer Wins!')
    hitMeButton.disabled=true
    stayButton.disabled = true
    popupLose.classList.toggle("hidden")
    loser()
   }

  }


