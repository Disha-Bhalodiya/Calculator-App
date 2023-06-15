//display value in input box
function display(val) {
    document.getElementById("textbox").value += val;
}

//calculate operations
function calculate() {
    let store = document.getElementById("textbox").value;

    //eval method used  used to evaluate the expression.like :- eval(3-2) -> it's return 1 as result.
    let calc = eval(store);
    document.getElementById("textbox").value = calc;
}

//delete one digit from last of input box
function Delete() {
    let x = document.getElementById("textbox").value;

    let y = x.toString().slice(0, -1);
    document.getElementById("textbox").value = y;
}

//for clear input box
function clr() {
    document.getElementById("textbox").value = "";
}