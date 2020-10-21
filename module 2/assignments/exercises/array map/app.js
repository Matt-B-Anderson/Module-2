const arr = [2, 5, 100];
const result = arr.map(function doubleNumbers(num) {
    return num * 2;

})
console.log(result);

const string = arr.map(function newString(num) {
    return num.toString();

})
console.log(string);

const names = ["john", "JACOB", "jinGleHeimer", "schmidt"];

const capitals = names.map(function capitalNames(letters) {
    return letters.toUpperCase();
})
console.log(capitals);

const onlyNames = [{
    name: "Angelina Jolie",
    age: 80
}, {
    name: "Eric Jones",
    age: 2
}, {
    name: "Paris Hilton",
    age: 5
}, {
    name: "Kayne West",
    age: 16
}, {
    name: "Bob Ziroll",
    age: 100
}];
const namesOnly = onlyNames.map(function names(name) {
    return name.name;
})
console.log(namesOnly);

const strings = onlyNames.map(function yesMaxtrix(age) {
    if (age.age >= 80) {
        return age.name + " can go to The Matrix";
    } else {
        return age.name + " is under age!!";
    }
})
console.log(strings);

const hs = onlyNames.map(function h1H2(data) {
    return "<h1>" + data.name + "</h1>" + "<h2>" + data.age + "</h2>";
})
console.log(hs);