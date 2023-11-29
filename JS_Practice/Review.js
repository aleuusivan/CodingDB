let favHolidays = "CHRISTMAS"
console.log(favHolidays)

//////////

let stringVar = 'letterinstring'
alert( stringVar.slice(11))
///////////////////////


function fivenum(num1,num2,num3,num4,num5){
   let value = 100-num1-num2-num3-num4-num5;
   alert(value); 
}

fivenum(20,30,12,50,45)
///////////////////////////// Creat func that makes heads of tails:


function headTails(){
   let chance =Math.floor(Math.random()*10+1);
   if (chance % 2 ===0){
    console.log('Heads');
    console.log(`the random num was ${chance}`)

   }else{
    console.log('Tails!');
    console.log(`the random num was ${chance}`)

   }
}

//////////////////////////////////////// make  a func that runs above heads/tails func 'x' amount of times:


function headsOrTails(x){
    for(i=0;i<x;i++){
    headTails()
    console.log(i)
    }
}

headsOrTails(8)

///////////////////////////////////////////////////////////////Make fav tv show array:

let tvShow =['Fargo','Castlevania','Rick&Morty']

tvShow.forEach((item, i)=>{
    console.log(item)

})

