/////////////////////Create a function that take in an array. If the first number, is less than the last number, alert "Hi". 
//If the first number is greater th a the last number, 
//alert "Bye". If they're equal, alret "We close in an hour"


function arrArg(arr){
    if(arr[0] < arr[arr.length-1]){
        alert('Hi!');
    }else if (arr[0] > arr[arr.length-1]){
        alert('Bye!')
    }else{
        alert('We close in an hour')
    }
    
}

let bestColors = ['red','blue','lightBlue','pink']

for (let i=0; i < bestColors.length; i++){
    console.log(bestColors[i])
}


//OR//


let bestColors = ['red','blue','lightBlue','pink']

bestColors.forEach ((x,i)=> console.log(x))


/////////Create a function that takes in an array of numbers. Multiply each number together and alert the product.

function multiArray(arr){
    let product = 1
    for (let i =0; i < arr.length; i++){
        product = product * arr[i]
        console.log(product)
    }

}

multiArray([2,2,2,2])



//////// Or//////////////




function multiArray(arr){
    let product = 1

    
    arr.forEach((item, i)=> {
        product *=item
    });
    console.log(product)

}

multiArray([2,2,2,2])


////Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (don't use .map or filter)

function reArray(arr){
    let newArr = []
    for(let i=0; i < arr.length; i++){
        if(arr[i]  % 2 === 0){
        newArr.push(arr[i])
      } 
    };
    return newArr
}
    

console.log(reArray([1,2,3,4,5,6]))


//// Short hand syntax of the above: ////



function reArray(arr){
    let newArr = []
    arr.forEach((item,i) => {

        if (item % 2 ===0){
            newArr.push(item)
        }

    })
    return newArr
}

console.log(reArray([1,2,3,4,5,6,7,8,9,10,11,12]))




