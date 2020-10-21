document.querySelector("form").onsubmit = (e) => {
    e.preventDefault();
    const form = document.querySelector("#marioPestControl");
    const goombaPrice = 5;
    const bobombsPrice = 7;
    const cheepCheepPrice = 11;
    const goomba = form.elements["goomba"].value;
    const bobomb = form.elements["bobomb"].value;
    const cheepCheep = form.elements["cheepCheep"].value;
    console.log(goomba);
    const goombaTotal = goombaPrice * goomba;
    const bobombTotal = bobombsPrice * bobomb;
    const cheepCheepTotal = cheepCheepPrice * cheepCheep;
    const totalPrice = parseFloat(goombaTotal) + parseFloat(bobombTotal) + parseFloat(cheepCheepTotal);
    const total = document.querySelector("#total");
    total.innerText = "Your total price: " + totalPrice;

}