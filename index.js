// LVL 1
// question 1

var name = "Joakim";

// question 2

var person = {
  age: 23,
  favoriteFood: "pizza"
};

// question 3

var outOfStock = true;
if(outOfStock = true){
  console.log("Out of stock");
}
else{
  console.log("In stock");
};

// divider

console.log("--------------");

// question 4

var numbersArray = [10, 15, 20, 25, 30];
var iNumbers;
for(iNumbers = 0; iNumbers < numbersArray.length; iNumbers++){
  console.log(numbersArray[iNumbers]);
};

// divider

console.log("--------------");

// question 5

var counter;
for(counter = 15; counter < 26; counter++){
  console.log(counter);
};

// divider

console.log("--------------");

// question 6

for(counter = 15; counter < 26; counter++){
  if(counter === 20){
    console.log(counter);
  };
};

// divider

console.log("--------------");

// question 7

var fruit = [
{
  type: "orange",
  amount: 2,
  ripe: true 
},
{
  type: "apple",
  amount: 3,
  ripe: false 
}
];

var iFruit;
for(iFruit = 0; iFruit < fruit.length; iFruit++){
  console.log(fruit[iFruit].amount);
  console.log(fruit[iFruit].ripe);
};

// divider

console.log("--------------");

// question 8

var whatIDontLike = function(thingIDontLike){
  console.log("I don't like " + thingIDontLike);
};
whatIDontLike("giraffes");

// divider

console.log("--------------");

// question 9

var subtracts = function(a, b){
  var difference = a - b;
  console.log(difference);
};
subtracts(5, 2);

// divider

console.log("--------------");

// question 10

var itemList = [];
var addItemToList = function(item){
  itemList.push(item);
};
addItemToList("computer");
addItemToList("keyboard");
console.log(itemList);

