

function calculate() {
    l1 = parseFloat(document.getElementById("sideA").value);
    l2 = parseFloat(document.getElementById("sideB").value);
    l3 = parseFloat(document.getElementById("sideC").value);
    //alert(parseFloat(l1));
    let s = semiperimetru(l1, l2, l3);
    let area = Math.sqrt(s*(s-l1)*(s-l2)*(s-l3));
    if (area === 0) area = 'NaN';
    document.getElementById('result').innerHTML = 
        `Area of the triangle is: ${area}`;
}

let semiperimetru = (l1, l2, l3) => {
    return (l1 + l2 + l3) / 2;
}

