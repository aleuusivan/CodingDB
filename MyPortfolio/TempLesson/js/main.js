document.querySelector('#zebra').addEventListener('click', convert)

function convert() {

    const celcius = document.querySelector('#brainStorm').value;
    const tempResult = celcius * (9/5) + 32                                                
    alert(tempResult)
}

