document.querySelector("form").onsubmit = (e) => {
    e.preventDefault();
    var form = document.querySelector("#airline-form");
    var firstName = form.elements["first-name"].value;
    var lastName = form.elements["last-name"].value;
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["location"].value;
    var diet = [];

    if (form.elements["vegan"].checked && form.elements["gluten"].checked && document.querySelector("#carnivore").value) {
        diet.push(document.querySelector("#vegan").value + ", " + document.querySelector("#gluten").value + ", " + document.querySelector("#carnivore").value);
    } else if (form.elements["vegan"].checked && form.elements["gluten"].checked) {
        diet.push(document.querySelector("#vegan").value + ", " + document.querySelector("#gluten").value);
    } else if (form.elements["vegan"].checked && form.elements["carnivore"].checked) {
        diet.push(document.querySelector("#vegan").value + ", " + document.querySelector("#carnivore").value);
    } else if (form.elements["gluten"].checked && form.elements["carnivore"].checked) {
        diet.push(document.querySelector("#gluten").value + ", " + document.querySelector("#carnivore").value);
    } else if (form.elements["vegan"].checked) {
        diet.push(document.querySelector("#vegan").value);
    } else if (form.elements["gluten"].checked) {
        diet.push(document.querySelector("#gluten").value);
    } else if (form.elements["carnivore"].checked) {
        diet.push(document.querySelector("#carnivore").value);
    } else { diet.push("") }



    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nLocation: " + location + "\nDietary restrictions: " + diet);


}