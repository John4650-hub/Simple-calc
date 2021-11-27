// alert('This calculator may not appear as it should if your runnning it in an old browser version');
// Numbers and keys
const num1 = document.getElementById('num1').value;
const num2 = document.getElementById('num2').value;
const num3 = document.getElementById('num3').value;
const num4 = document.getElementById('num4').value;
const num5 = document.getElementById('num5').value;
const num6 = document.getElementById('num6').value;
const num7 = document.getElementById('num7').value;
const num8 = document.getElementById('num8').value;
const num9 = document.getElementById('num9').value;
const num0 = document.getElementById('num0').value;

// Mathematical symbols and key
const equals = document.getElementById('equals').value;
const plus = document.getElementById('plus').value;
const minus = document.getElementById('minus').value;
const divide = document.getElementById('divbtn').value;
const multiply = document.getElementById('multiply').value;
const curlsbtn = document.getElementById('curlsbtn').value;
const modulus = document.getElementById('perc').value;
const point = document.getElementById('point').value;

// Input for displaying numbers
var entry = document.getElementById('entry');



function get(element)
{
    entry.value += element;
}

let usr = '';

function getAns()
{
    usr += entry.value
    
}
