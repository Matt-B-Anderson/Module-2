const nums = [1, 3, 5, 2, 90, 20];
nums.sort((a, b) => a - b);
console.log(nums);

const nums1 = [1, 3, 5, 2, 90, 20];
nums1.sort((a, b) => b - a);
console.log(nums1);

const words = ["dog", "wolf", "by", "family", "eaten"];
words.sort((a, b) => a.length - b.length);
console.log(words);

const words1 = ["dog", "wolf", "by", "family", "eaten"];
words1.sort((a, b) => a < b ? -1 : a > b);
console.log(words1);

const age = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
];
age.sort((a, b) => a.age - b.age);
console.log(age);