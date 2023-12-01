var dealerTotal = 0
var yourTotal = 0 
var deck
var count = 0
var bet = 0

const startButton = document.querySelector('#buttonStart')
const hitMeButton = document.querySelector('#buttonOne')
const stayButton = document.querySelector('#buttonTwo')
const popupBust = document.querySelector('#popupBust')


hitMeButton.disabled=true
stayButton.disabled =true 


window.onload = function(){
     Cards();

}


function Cards(face, value){
    this.face = face
    this.value = value
    
  
  }
  
  
  //////////Hearts -10-
  let AceOfHearts = new Cards("img/Cards/11.png ", 11)
  let TwoOfHearts = new Cards("img/Cards/2.png", 2)
  let ThreeOfHearts =  new Cards("img/Cards/3.png", 3)
  let FourOfHearts = new Cards("img/Cards/4.png", 4)
  let FiveOfHearts = new Cards("img/Cards/5.png", 5)
  let SixOfHearts = new Cards("img/Cards/6.png", 6)
  let SevenOfHearts = new Cards("img/Cards/7.png", 7)
  let EightOfHearts = new Cards("img/Cards/8.png", 8)
  let NineOfHearts = new Cards("img/Cards/9.png", 9)
  let TenOfHearts = new Cards("img/Cards/10.png", 10)
  let KingOfHearts = new Cards("img/Cards/10.png", 10)
  let QueenOfHearts = new Cards("img/Cards/10.png", 10)
  let JackOfHearts = new Cards("img/Cards/10.png", 10)

  
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
  let KingOfSpades = new Cards("img/Cards/10.png", 10)
  let QueenOfSpades = new Cards("img/Cards/10.png", 10)
  let JackOfSpades = new Cards("img/Cards/10.png", 10)
  
  
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
  let TenOfClubs = new Cards("img/Cards/10.png>", 10)
  let KingOfClubs = new Cards("img/Cards/10.png", 10)
  let QueenOfClubs = new Cards("img/Cards/10.png", 10)
  let JackOfClubs = new Cards("img/Cards/10.png", 10)
  
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
  let KingOfDiamnonds= new Cards("img/Cards/10.png", 10)
  let QueenOfDiamnonds = new Cards("img/Cards/10.png", 10)
  let JackOfDiamnonds = new Cards("img/Cards/10.png", 10)
  
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

  console.log(deckOfCards)


document.querySelector('#buttonStart').addEventListener('click', startGame)


function startGame() {
  
  count++;
  if(count== 1){

  hitMeButton.disabled=false
  stayButton.disabled = false
  startButton.style.display = 'none';

  // Dealer's First Card://
  let dealerCardOne = Math.floor(Math.random()*deckOfCards.length + 1)
  var  image1 = document.getElementById('card7');
  image1.src = deckOfCards[dealerCardOne].face


  /* 
  document.querySelector('#card7').innerText = (deckOfCards[dealerCardOne].face ) */


  //////Your first two cards//////////

  //////////////  Your Card1   ////////////////////
      let card1 = Math.floor(Math.random()*deckOfCards.length + 1)
      var  image2 = document.getElementById('card1');      
      image2.src = deckOfCards[card1].face


      //////////////  Your Card 2  ////////////////////
      let card2 = Math.floor(Math.random()*deckOfCards.length + 1 )
      var  image3 = document.getElementById('card2');
      image3.src = deckOfCards[card2].face
      let yourTotal = (deckOfCards[card1].value + deckOfCards[card2].value)

      /* document.createElement ('#card1').innerText =(deckOfCards[card1].face) */
      
      document.querySelector('#score').innerText = ( yourTotal )
      
      /* document.querySelector ('#card2').innerText =(deckOfCards[card2].face) */
     
     
     /*  document.querySelector('#score').innerText = ( yourTotal+=deckOfCards[card2].value ) */
      /////Hide the start button after being pressed/////
      startButton.classList.add('hidden')
  }
}