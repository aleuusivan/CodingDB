var dealerTotal = 0;
var yourTotal = 0; 

var deck;

window.onload = function(){
     Cards();

}

function Cards(face, value){
    this.face = face
    this.value = value
    
  
  }
  
  
  //////////Hearts -10-
  let AceOfHearts = new Cards("img/Cards/11.png >", 11)
  let TwoOfHearts = new Cards("img/Cards/2.png>", 2)
  let ThreeOfHearts =  new Cards("img/Cards/3.png>", 3)
  let FourOfHearts = new Cards("img/Cards/4.png>", 4)
  let FiveOfHearts = new Cards("img/Cards/5.png>", 5)
  let SixOfHearts = new Cards("img/Cards/6.png>", 6)
  let SevenOfHearts = new Cards("img/Cards/7.png>", 7)
  let EightOfHearts = new Cards("img/Cards/8.png>", 8)
  let NineOfHearts = new Cards("img/Cards/9.png>", 9)
  let TenOfHearts = new Cards("img/Cards/10.png>", 10)
  
  //////////Spades -10-
  let AceOfSpades = new Cards("img/Cards/10.png>", 10)
  let TwoOfSpades = new Cards("img/Cards/10.png>", 2)
  let ThreeOfSpades = new Cards("img/Cards/10.png>", 3)
  let FourOfSpades = new Cards("img/Cards/10.png>", 4)
  let FiveOfSpades = new Cards("img/Cards/10.png>", 5)
  let SixOfSpades = new Cards("img/Cards/10.png>", 6)
  let SevenOfSpades = new Cards("img/Cards/10.png>", 7)
  let EightOfSpades = new Cards("img/Cards/10.png>", 8)
  let NineOfSpades = new Cards("img/Cards/10.png>", 9)
  let TenOfSpades = new Cards("img/Cards/10.png>", 10)
  
  
  //////////Clubs -10-
  let AceOfClubs = new Cards("img/Cards/10.png>", 11)
  let TwoOfClubs = new Cards("img/Cards/10.png>", 2)
   let ThreeOfClubs = new Cards("img/Cards/10.png>", 3)
   let FourOfClubs = new Cards("img/Cards/10.png>", 4)
   let FiveOfClubs = new Cards("img/Cards/10.png>", 5)
   let SixOfClubs = new Cards("img/Cards/10.png>", 6)
   let SevenOfClubs = new Cards("img/Cards/10.png>", 7)
   let EightOfClubs = new Cards("img/Cards/10.png>", 8)
   let NineOfClubs = new Cards("img/Cards/10.png>", 9)
   let TenOfClubs = new Cards("img/Cards/10.png>", 10)
  
  //////////Diamonds -10-
  let AceOfDiamonds = new Cards("img/Cards/10.png>", 11)
  let TwoOfDiamonds = new Cards("img/Cards/10.png>", 2)
  let ThreeOfDiamonds = new Cards("img/Cards/10.png>", 3)
  let FourOfDiamonds = new Cards("img/Cards/10.png>", 4)
  let FiveOfDiamonds = new Cards("img/Cards/10.png>", 5)
  let SixOfDiamonds = new Cards("img/Cards/10.png>", 6)
  let SevenOfDiamonds = new Cards("img/Cards/10.png>", 7)
  let EightOfDiamonds = new Cards("img/Cards/10.png>", 8)
  let NineOfDiamonds = new Cards("img/Cards/10.png>", 9)
  let TenOfDiamonds = new Cards("img/Cards/10.png>", 10)
  
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

  console.log(deckOfCards)