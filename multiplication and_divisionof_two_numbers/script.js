let multi = () => {
    let x = parseFloat(document.getElementById('first').value);
    let y = parseFloat(document.getElementById('second').value);
    let rez = x*y;
    document.getElementById('result').innerHTML = "The result is: ";
    document.getElementById('result').innerHTML += rez;
}

let divide = () => {
    let x = parseFloat(document.getElementById('first').value);
    let y = parseFloat(document.getElementById('second').value);
    let rez = x/y;
    document.getElementById('result').innerHTML = "The result is: ";
    document.getElementById('result').innerHTML += rez.toPrecision(3);
}