const people = [{
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
];

const over18 = people.filter(age => age.age >= 18);
console.log(over18);

const alphabetical = over18.sort((a, b) => a.lastName < b.lastName ? -1 : a.lastName > b.lastName);
console.log(alphabetical);

const li = alphabetical.map((data) => "<li>" + data.firstName + " " + data.lastName + " is " + data.age + "</li>");
console.log(li)