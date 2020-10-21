function collectAnimals(...animals) {
    return animals;
}
console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));

function combineFruit(fruit, sweets, vegetables) {
    return (`fruit: ${fruit} sweets: ${sweets} vegetables: ${vegetables}`)
}
console.log(combineFruit(["apple", "pear"], ["cake", "pie"], ["carrit"]));

const vacation = {
    location: "Burly Idaho",
    duration: "2 weeks"
};

function parseSentence({ location, duration }) {
    console.log(`We're going to have a good time in ${location} for ${duration}`)
}
parseSentence(vacation);

function returnFirst(items) {
    const [stuff] = firstItem;
    return firstItem
}

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr) {
    const [a, b, c] = arr;
    firstFav = arr[0];
    secondFav = arr[1];
    thirdFav = arr[2];
    return `My top three favorite activities are, ${firstFav} ${secondFav} ,and ${thirdFav} `;
}
console.log(returnFavorites(favoriteActivities));

function combineAnimals(...animals) {
    return animals;
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];
const allAnimals = [...realAnimals, ...magicalAnimals, ...mysteriousAnimals];
console.log(combineAnimals(allAnimals));

//const numbers = [a, b, c, d, e];
//const results = numbers.reduce(acc, number => acc * number, 1);

function unshift(array, ...rest) {
    return rest.concat(array);
}

function populatePeople(names) {
    return names.map(function(name) {
        name = name.split(" ");
        const { firstName, lastName } = name;
        console.log(name);
        return {
            firstName: `${ firstName }`,
            lastName: `${lastName}`
        }
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))