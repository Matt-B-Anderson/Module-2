const name = "John"
const age = 101

function runForLoop(pets) {
    let petObjects = []
    for (var i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])

const carrots = ["bright orange", "ripe", "rotten"]

const mapVegetables = carrots.map(carrot => {
    return { type: "carrot", name: carrot }
})
console.log(mapVegetables);

const people = [{
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

const filterForFriendly = people.filter(person => person.friendly)
console.log(filterForFriendly);

//const doMathSum = (a, b => a + b);
//const produceProduct = (a, b => a * b);

let firstName = "Jane";
let lastName = "Doe";
let old = "100";
let person;

const printString = ((firstName, lastName, age) => person = "Hi " + firstName + " " + lastName + ", how does it feel to be " + age + "?")
console.log(printString("Kat", "Stark", "40"))