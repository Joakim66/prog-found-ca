// LVL 2
// question 1

var counter;
for(counter = 15; counter < 26; counter++){
  if (counter % 2 > 0)continue;
  console.log(counter);
};

// divider

console.log("--------------");

// question 2

var innerFunction = function(){
  console.log("I am a function");
};
var outerFunction = function(parameter){};
outerFunction(innerFunction());