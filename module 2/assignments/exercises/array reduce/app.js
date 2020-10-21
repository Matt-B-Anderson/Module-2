const nums = [1, 2, 3];

const total = nums.reduce(function(final, num) {
    final += num;
    return final;
})
console.log(total);

const str = nums.toString()
console.log(str);

const voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
]

const didVote = voters.reduce(function(final, voter) {
    if (voter.voted) {
        final++
    }
    return final;
}, 0)
console.log(didVote);

const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]

const cost = wishlist.reduce(function(final, price) {
    final += price.price
    return final;
}, 0)
console.log(cost);

const arrs = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

const arr = arrs.reduce(function(final, array) {
    return final.concat(array);
})
console.log(arr);

const newVoters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];

const results = newVoters.reduce(function(final, voter) {

    if (voter.age <= 25 && voter.voted === true) {
        final.numYoungVotes++
    }

    if (voter.age <= 25) {
        final.numYoungPeople++
    }
    if (voter.voted === true && voter.age >= 26 && voter.age <= 35) {
        final.numMidVotes++
    }
    if (voter.age >= 26 && voter.age <= 35) {
        final.numMidPeople++
    }
    if (voter.voted === true && voter.age >= 36 && voter.age <= 55) {
        final.numOldVotes++
    }
    if (voter.age >= 36 && voter.age <= 55) {
        final.numOldPeople++
    }
    return final
}, {
    numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotes: 0,
    numMidPeople: 0,
    numOldVotes: 0,
    numOldPeople: 0
})
console.log(results)