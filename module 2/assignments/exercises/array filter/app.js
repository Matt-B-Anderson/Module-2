const nums = [3, 6, 8, 2];

const greaterNums = nums.filter(function greaterOnly(greater) {
    return greater > 5;
})
console.log(greaterNums);

const evenNums = nums.filter(even => even % 2 === 0);
console.log(evenNums);

const words = ["dog", "wolf", "by", "family", "eaten", "camping"];
const fiveOrLess = words.filter(stuff => stuff.length <= 5);
console.log(fiveOrLess);

const club = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
];
const belongs = club.filter(status => status.member === true);
console.log(belongs);

const matrix = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
];
const ofAge = matrix.filter(age => age.age > 18);
console.log(ofAge);