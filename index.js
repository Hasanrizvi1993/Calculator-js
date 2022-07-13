console.log("sanity check");
//Addition functionality
function addition() {
	let a = document.getElementById("firstNumber").value;
	let b = document.getElementById("secondNumber").value;

	let sum = parseFloat(a) + parseFloat(b);
	document.getElementById("Result").value = sum;


}
//subtraction functionality
function subtraction() {
	let x = document.getElementById("firstNumberSub").value;
	let y = document.getElementById("secondNumberSub").value;

	let diff = parseFloat(x) - parseFloat(y);

	document.getElementById("Result").value = diff;
}
//multiplication functionality
function multiply(){
    let x = document.getElementById("firstNumberMult").value;
    let y = document.getElementById("secondNumberMult").value;

    let product = parseFloat(x) * parseFloat(y);
    document.getElementById("Result").value = product;
}
//division functionality
function division(){
    let a = document.getElementById("firstNumberDivide").value;
    let b = document.getElementById("secondNumberDivide").value;

    let divide = parseFloat(a) / parseFloat(b)
    document.getElementById("Result").value = divide
}

//this is to reset the whole application values
// function reset(){
//     document.getElementById("Calculator").reset();
//     console.log("button works")
// }