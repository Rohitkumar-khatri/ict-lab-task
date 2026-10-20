for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

let num = 1;
let sum = 0;
while (num <= 100) {
  sum = sum + num;
  num++;
}
console.log("Sum = " + sum);

let count = 10;
do {
  console.log(count);
  count--;
} while (count >= 1);

const languages = ["HTML", "CSS", "JavaScript"];
for (const item of languages) {
  console.log(item);
}

const person = {
  name: "rohit",
  age: 19,
  city: "karachi"
};
for (const key in person) {
  console.log(key + ": " + person[key]);
}
