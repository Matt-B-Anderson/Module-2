const addBtn = document.querySelector("#add");
const subBtn = document.querySelector("#subtract")
const multBtn = document.querySelector("#multiply")

addBtn.addEventListener("click", function() {
    const numOne = document.querySelector("#numOne").value;
    const numTwo = document.querySelector("#numTwo").value;
    const result = document.createElement("P");

    const newResult = parseFloat(numOne) + parseFloat(numTwo);

    result.innerText = newResult;
    document.querySelector("#addition").appendChild(result);
})

subBtn.addEventListener("click", function() {
    const numOne = document.querySelector("#numThree").value;
    const numTwo = document.querySelector("#numFour").value;
    const result = document.createElement("P");

    const newResult = (numOne - numTwo);

    result.innerText = newResult;
    document.querySelector("#subtraction").appendChild(result);
})

multBtn.addEventListener("click", function() {
    const numOne = document.querySelector("#numFive").value;
    const numTwo = document.querySelector("#numSix").value;
    const result = document.createElement("P");

    const newResult = (numOne * numTwo);

    result.innerText = newResult;
    document.querySelector("#multiplication").appendChild(result);
})