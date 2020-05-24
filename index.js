console.log('What is actually your name');

console.log(typeof 4.5)

console.log(typeof "x")

console.log(typeof True)

console.log(3 > 20)
console.log("Archimedees" > "Zak")
console.log("raz" > "ran")
console.log(true && false)
console.log(false && false)
console.log(true && true)
console.log(8 * null)
console.log("5" - 1)
console.log("five" * 2)
console.log("5" - 1)

// writing a variable
let caught = 5 * 5;
let ten = 10;
console.log(ten * ten);
console.log(caught + 100);

// working a variable to console what has been stored
let mood = "love";
console.log(mood);
mood = "dark";
console.log(mood)

mood = "Archimedes the Software Engineer";
console.log(mood)

const  smood = "lovely";
console.log(smood);


// simple program telling you how much is left out of what someone owns u
let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);


// single let giving several variable or binding
let cool = 2; notCool = -11112;
console.log(cool,  notCool);

// the words var and const can also be used to create bindings, in similar way to let
var name = "Ayda";
const greeting = "Hello";
console.log(greeting + name);


// some keywords cannot be used as binding names and they are:
//break case export yield let for false continue debugger default do else enum export extends finally function if implements import interface in instanceof in new package private protected public return static super switch this throw true try typeof var void while with





// The environment
// The collection of bindings and their values that exitst at a given time called the environment. When a program starts up, this environment is not empty.





// Functions:A lot of the values provided in the default environment have the type
// prompt("Enter passcode");

// Executing a function is called invoking , calling or applying it. You call a function by putting parentheses after an expression that produces a function value. The values between the parentheses are given to the program inside the function. Values given to functions are called arguments. D ifferent functions might need a different number or different types of arguments.



// return values
/*console.log(Math.max(2, 4));*/


// returning values
/*console.log(Math.min(2, 4) + 200);
console.log(Math.max(233, 89) % 56* 9);*/

// control flow
//let theNumber = Number(prompt("Pick a number"));
//console.log("Your number is the square //root of " + theNumber * theNumber);



//let theNumber = Number(prompt("Pick a number "));
//if (!Number.isNaN(theNumber)) {
 //   console.log("Your numbe is the square root of //" + theNumber * theNumber);
//}

//theNext = Number(prompt("Type a number"));
//if (theNext == string) {
 //   console.log("This is not a number you have to //come clearer");
//}   else {
 //   return console.log("Your number is the square //root  this is really getting more interesting than //i thought of " + theNext * theNext );
//}


// if statement
/*let theLove = 6
let kofi = "men";
if (theLove == 6) {
    console.log(kofi);
}*/


// if statement
/*if (1 + 1 == 2); {
    console.log("It is very true");
}*/

//if statement that holds for the other conditions to be true
//let theNumbers = Number(prompt("Pick a number"));
//if (!Number.isNaN(theNumbers)) {
  //  console.log("Your number is the square root of " + theNumbers * theNumbers)
//}   else {
  //  console.log("Hey,Why didn`t you give me a number?");
//}


//let myNumberss = Number(prompt("What is your lucky number?"));
//if (myNumberss == 67) {
  //  console.log("That is  what we are interested in");
//}   else if (myNumberss == 90) {
 //   console.log("This is likely to be considered");
//}   else {
  //  console.log("You have to come the next time");
//}


// if you have more than two paths to choose from, you can chain multiple if/else pairs together.
//let num = Number(prompt("Pick a number"));

//if (num < 10) {
 //   console.log("Small");
//}   else if (num < 100) {
  //  console.log("Medium");
//}   else {
//    console.log("Large");
//}




// writing while and do loops
//let myGirl = 6;
//while (myGirl <= 12) {
 //   console.log(myGirl);
 //  myGirl = myGirl + 2
//}


// a while loop do a lot at the same time
//let result = 1;
//let counter = 0;
//while (counter < 10) {
 //   result = result * 2;
  //  counter = counter + 1;
//}
//console.log(result);


// A do loop is a control structure similar to a while loop. it differs only on one point. A do loop always executes its body at least once , and it starts testing whether it should stop only after the that first execution. The test appears after the body of the loop.

//let yourName;
//do {
  //  yourName = prompt("Who are you?");

//} while (!yourName);
//console.log(yourName);


//let coin;
//do {
  //  coin = prompt("lets go");

//} while(!coin);
//console.log(coin);
// indentation
//if (false != true) {
 //   console.log("That makes sense");
 //   if(1 < 2) {
 //       console.log("No surprise there");
 //   }
//}


// A more comprehensive way of writing for loop
//for (let number = 0; number <= 12; number = number + 2) {
 //   console.log(number);
//}

//for (let kofi = 1; kofi <= 15; kofi = kofi + 2) {
//    console.log(kofi);
//}

// An other example of comprehensive way of writing a for loop
//let counter = 1;
//for (let counter = 0; counter < 0; counter = counter + 1) {
 //   result = result * 2;
//}
//console.log(result);





// Breaking out of a loop, this program illustrates the break statement. It finds the first number that is both greater than or equal to 20 and divisible by 7.
/*for (let current =20; ; current = current + 1) {
    if (current % 7 == 0) {
        console.log(current);
        break;
    }
}*/


//updating bindings succinctly: Especially when looping, a program often needs to update a binding to hold a value based on that bindings previous value
//eg.  counter = counter + 1;

//shortcut for the above code
//counter += 1; similar ones counter -=1, counter *= 11, counter %=1 counter **=3 etc


// example in code
//for (let number = 0; number <= 12;) {
 // console.log(number);
//}


 //for counter +=1 and counter -=1; there are even shorter equivalents: counter++ and counter--
//for (let man = 0; man++;) {
//  if (man <= 10) {
//    console.log(man);
//  }
//}


// Dispatching on a value with switch: this is intended to express such a dispatch in a direct way;
//Heer is an example
//switch (prompt("What is the weather like")) {
  //  case "rainy":
   // console.log("Remember to bring an umbrella");
   // break;
   // case "sunny":
    //console.log("Dress lightly");
    //case "cloudy":
    //console.log("Go outside");
   // break;
   // default:
   // console.log("Unknown weather type");
    //break;
//}


//switch (prompt("What is ur father`s name?")) {
//  case "Archimedes":
//  console.log("His my husband");
//  break;
//  case "Sena":
//  console.log("His my uncle");
//  break;
//  default:
//  console.log("It looks like you dont your fathers name");
//  break;

//}


/* Time for exercises, write a program that uses console.log to print all
the numbers from 1 to 100 with two exceptions. For numbers divisible by 3, print
 "Fizz" instead of the number, and for numbers divisible by 5 (and not3), print
 "Buzz" instead. To be tackled later, on page 50 */


/*functions: A function definition is a regular binding where the value of the
binding is a funciton. For example, this code defines square to refer to a
function that produces the square of a given number:*/

/*const square = function(x) {
  return x * x;
}
console.log(square(12));*/






//a function without parameter
/*const ken = funtion() {
  console.log("Hello world");
}
ken();*/

// function with double parameter
/*const power = function(base, exponent) {
  let result =1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;

};
console.log(power(2,10));*/



/*Binding and scopes to looked at again on page 40 or 52 fo clearer understanding 
let x = 10;
if true (true) {
    let y = 20;
    var z = 30;
    console.log(x + y + z);
}
// 60 */



/* A binding outiside a block is known as global.
cons halve = function(n) {
  return n/2;
};

let n= 10;
console.log(halve(100));
// 50
console.log(n);
// 10 */

/*const arc = function(q) {
  return q / 7;
};

let q = 49;
console.log(arc(98));
console.log(q);*/


// Nested scope, this is blocks and functions can be created inside other blocks and functions, producing multiple degrees of locality, for example this function which outputs the ingredients needed to make a batch of hummus - has another function inside it //
/*const hummus = function(factor) {
  const ingredient = function(amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "S";
    }
    console.log("${ingredientAmount} ${unit} ${name}");
  };
  ingredient(1, "can", "chicken");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
}; */

// Reference to the above codes: The code inside the ingredient function can see the factor binding from the outer function. But its local bindings, such as unit or ingredientAmount,are not visible in the outer function. The set of bindings visible inside a block is determined by the place of that block in the program text. Each local scope can also see all the local scopes that contai it, and all scopes can see the global scope. This approach to binding visibility called *lexical scoping*








// Function as values, to be discuss later in chapter five of the book//
/*let launchMissiles = funtion() {
  missileSystem.launch("now");
};
if (safemode) {
  launchMissiles = function() {/*do nothing*/



//Declaration notation pg43 or 55//
//There is a shorter way to create a function binding. When the function keyword is used at the start of a statement, it works differently//
/*function square(x) {
  return x * x;
}
console.log(square(7));*/
//This is quite easier to write and doesnt require a semicolon after the function and that is function declaration//
/*console.log("The future says:", future());
function future() {
  return "You'll never have flying cars";
}*/

/*console.log("Is that all you have to say:", love());
function love() {
  return "I love you from the bottom  of my heart?";
}*/

/*let loveGo = function() {
  return "This is for the love of the game";
}
man = loveGo()
console.log(man);*/



// Arrow function: This is the third way of writing functions/, which looks very different from the others. Instead of the function keyword, it uses an arro(=>) made up of an equal sign and a greater  than character(not to be confused with the greater or equal operator, which is written >=/)
/*const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count ++) {
    result *= base;
  }
  return result;
};
console.log(power(2,10));*/
// The arrow comes after the list of parameters and is followed by the functions body. It expresses something like "this input(the parameters ) produces this result(the body)"
//Note if there is only one parameter name, you can omit the parentheses// 
//example//
//const square1 = (x) => { return x * x};//




// no parameter//
/*const horn = () => {
  console.log("Toot");
};
horn();*/



//the call stack//
/*function greet(who) {
  console.log("Hello" +  who);
}
greet("Archimedes");
console.log("Bye");

function ask(him) {
  console.log("His my friend, do you know him?");
}
ask("Archimedes");*/


// example//
/*function chicken() {
  return egg();
}
function egg() {
  return chicken();
}
console.log(chicken() + "came first.");*/






// optional arguments//
/*function square(x) {return x * x;}
console.log(square(4, true, "hedgehog"));*/



//argument bias in js//
/*function minus(a, b) {
  if (b=== undefined) return -a;
  else return a- b;
}
console.log(minus(10));
console.log(minus(10, 5));*/




//another optional argument example//
/*function power(base, exponent = 2) {
  let result = 1;
  for (let count = 0; count < exponent; count ++) {
  result *= base;
  
  }
  return result;
}

console.log(power(4));
console.log(power(2, 6));*/



// Closure//
/*function wrapValue(n) {
  let local = n ** 6;
  return () => local;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());*/


/*function archi(k) {
  let lean = k;
  let local = k + 600;
  return () => local;
}

let arch = archi(7);
let ach = archi(45);
console.log(arch());
console.log(ach());*/



// Another example//
/*function multiplier(factor) {
  return number => number * factor;

}
let twice = multiplier(2);
console.log(twice(5));*/



// Recursion//
/* It is perfectly okay for a function to call itself, as long as it doesnt do it so often that it overflows the stack. A function that calls itself is called Recursive.*/
/*function power(base, exponent) {
  if (exponent == 0) {
    return 1;
}   else {
    return base * power(base, exponent - 1);
}

}
console.log(power(2, 3)); make this code work later*/

// Recursion problem. Consider this puzzle. by starting from the number 1 and repeatedly either adding 5 or multiplying  by 3, and infinite set of numbers can be produced. How would you write a function that, given a number, tries to find a sequence of such additions and multiplications that produces that number? Example the number 13 could be reached by first multiplying by 3 and then adding 5 twice whereas the number 15 cannot be reached at all.//
/*function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, '(${history} + 5)') ||
             find(current * 3, '(${history} * 3)'); 
    }
  }
  return find(1, "1");
}

console.log(findSolution(24)); Dive deeper into recursive functions later pg 51 or 63*/




//Growing funcitons or another way of writing functions//
//Write a program that print two numbers: the numbers of cows and chickens on a farm, with the words cows and chickens after them and zeros padded before both numbers so that they are always three digits long.//
/*function printFarmInventory(cows, chickens) {
  let cowString = String(cows);
  while(cowString.length < 3) {
    cowString = "0" + cowString;
  }
  console.log('${cowString} Cows');
  while (chickenString.length<3) {
    chickenString = "0"| + chickenString;
  }
  console.log('${chickenString} Chickens');
}

printFarmInventory(7, 11);*/


//A better way of writing that code if a lot more animals are added to the list, and here is the solution, lets get coding//
/*function zeroPad(number, width) {
  let string = String(number);
  while(string.length < width) {
    string = "0" + string;
  }
  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log('${zeroPad(cows, 3)} Cows');
  console.log('${zeroPad(chickens, 3)} Chickens');
  console.log('${zeroPad(pigs, 3)} Pigs');
} */



// A summary of functions//
// Defing f to hold a function value//
/*const f = function(a) {
  console.log(a + 2);
};

// Declare g to be a function//
function g(a, b) {
  return a * b * 3.5;
}

// A less verbose function value
let h = a => a% 3;*/




// Exercises: Write a function min that takes two arguments and return their minimum
/*function min(a,b) {
  if (a < b) {
    return a
} else if (a > b){
  return b
} else 
  return "equal"

  
}

console.log(min(10000,1000));*/



// Ex: Write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase "B" characters). Rewrite countBs to make use of this new function. //
/*function countChar(string, ch) {
  let counted = 0;
  for (let i = 0;  i < string.length; i++) {
    if (string[i] == ch ) {
      counted += 1;
    }
  }
  return counted;

}

function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));*/


//EX: Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive , whole number) and return a Boolean. Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this? //

//Recursion exercise//
/*function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if ( n < 0) return isEven(-n);
  else return isEven(n - 2);
}*/

//console.log(isEven(50));//
/*console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(0))
console.log(isEven(-2334))*/


//Personal recursion//
/*function arch(a) {
  if (a == 4) return true;
  else if (a == 7) return false;
  else if (a < 2) return arch(-a);
  else return arch(a - 2);
}

console.log(arch(6));*/



/*function age(x) {
  if (x == 30) return "You are still young";
  else if (x == 50) return " You are getting closer to retirement";
  else if (x < 30) return true;
  else return age(x - 2);
 

}


console.log(age(-3));*/



//Topic: Data structures//
/*let e = [ 2, 4, 6, 8, 10]
console.log(e[1]);*/


//Methods//
/*let doh = "doh";
console.log(typeof doh.toUpperCase);
console.log(doh.toUpperCase());

e.push(8);
e.push(11)

console.log(e)
console.log(e.pop());
console.log(e);
console.log(e.shift(3))
console.log(e);
console.log(e.unshift(2));
console.log(e); 
Stack in programming is a data structure that allow s you to push values into it and pop them out again in the opposite order so that the thing that was added last is removed first. These are the commonn programming- you might remember the function call stack from the previous chapter, which is an instance of the same idea*/

// Example//
/*let words = ["kofi", "ken", "kene"];
words.push("k");*/



//objects//

/*let notified = {love: "hate", dad: "mama"}
console.log(notified.dad);
console.log(notified.love)
delete notified.dad;
console.log(notified.keys({love: "hate", dad: "mama"}))*/


//The assign property//
/*let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA)*/




/*let k = {x: 4, y:22, z: 56};
Object.assign(k, {y:67, p:66, t:21});
console.log(k)*/


//Arrays are kind of object specialized for storing sequences of things. if you evaluate typeof [], it produces "object". 

/*let nice = { neat: 23};
nice.neat = 24;
console.log(nice);
nice.neat1 = 45;
console.log(nice);
nice.neat2 = 85;
console.log(nice)*/


// Thw Lycanthrope`s log//
/*let acid = []
function chemicals(x, y) {
  acid.push(x)
}

chemicals(["hcl", "co2", "mg", "Na", "cacl2"], false);
console.log(acid);*/

// Correlation is a measure of dependence between statistical variables. A statistical variable is not quite the same as a programming variable.//



// phi correlation calculation//
/*function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}


console.log(phi([53, 6, 7, 8]));*/


//To extract a two-by-two table for a specific event from the journal,we must loop over all the entries and tally how amny times the event occurs in relation to squirrel transformations//
/*function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (i = 0; i < journal.length; i++) {
    let entry = journal[i], index = 0;
    if (entry.events.includes(event)) index +=1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

console.log(tableFor("pizza", JOURNAL));*/


//objects//
/*let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"] };

console.log(day1.squirrel);
console.log(day1.events);
console.log(day1.wolf);


let descriptions = {
  work: "Went to work",
  "touched tree": "Touched a tree"
};
console.log(descriptions.work)
console.log(descriptions["touched tree"])




let country = {
  food: "rice",
  soup: "palm nut",
};

console.log(country.food);
console.log(country.soup);



let corn = "mine";
function fantastic(food1, soup1) {
  if (corn == "mine") {
    console.log("I like banku than you think")
  }
};*/




/*let anObject = {left: 1, right: 2};
console.log(anObject.left);
delete anObject.left;
console.log(anObject.left);
console.log(anObject.right);
console.log("right" in anObject);


const score = { visitors: 0, home: 0};
score.visitors = 1;
score.home = 12;
console.log(score);*/


/*const nice = { lap: 13, top: 75};
nice.lap = 90;
nice.top = 8;
console.log(nice);*/




//Array loop//
/*for (let i = 0; i<journal.length; i++) {
  let entry = journal[i];
}

for (let entry of journal) {
  console.log('${entry.events.length} events.');
}*/

/* When a for loop looks like this, with the word of after a variable definition, it will loop over the elements of the value given after of. This works not only for arrays but also for strings and some other data structures*/




// work on page 80 and arrayology//


// other forms of object//
/*let todoList = []
function remember(task) {
  todoList.push(task);
}

function getTask() {
  return todoList.shift();
}
function rememberUrgently(task) {
  todoList.unshift(task);
}*/

//concat//
/*function remove(array, index) {
  return array.slice(0, index)
  .concat(array.slice(index + 1));

}
console.log(remove(["a", "b", "c", "d", "e"], 2));*/

// If you pass concat an argument that is not an array, that value will be added to the new array as if it were a one-element array.//


//page 85//


//the split and join usage//
/*let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
console.log(words.join(". "));

//the use of repeat//
console.log("Archimedes".repeat(3));
console.log("6".repeat(5))*/

// rest parameters: this works on the number of arguments given to it and it does not matter the number of arguments//
/*function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}

console.log(max(4, 123457, 1,9,-2, 5,6, 890, 52, 4567, 8952))*/





/*function max(...numbers) {
  let result = -Infinity;
  for (number of numbers) {
    if (number > result) result = number;
  }
  return result;
}

console.log(max(55, 45, 9999999999967,332,78,1111111111118))*/


// ...in termsof strings//
/*let words = ["never", "fully"];
console.log(["will", ...words, "under fire"]);*/




// Math object//
/*funtion ran(radius) {
  let angle = Math.random() *2 * Math.PI;
  return{x : radius * Math.cos(angle),
    y:randius * Math.sin(angle)};
  }



console.log(randomPointOnCircle(2))*/




// Rest parameter//
/*function max(...numbers) {
  let result = -Infinity
  for (number of numbers) {
    if (number < result) result = number;
  }
  return result;
}

console.log(max(5, 6, 7, 8, 8,753));*/

//for loop//
/*long = [4, 56, 6, 78, 23]
for (num of long) {
  if (num > 4) {

console.log("This is what i want to do")
  }

}*/


//Destructing: reread page 89//
/*let {age} = {myname:"Archimedes", age: 23};
console.log(age);*/


// Read more on JSON page 90//


//chapter 4 exercises to be looked at pag90s//
// Exercise: Write a range function that takes two arguments, start and end and returns an array containing all the numbers from start up to ( and including) end. Next write a sum function that takes an array of numbers and returns the sumb of these numbers. Run the example program and see whether it does indeed return 55.//

// As a bonus assignment, modify your range function to take an optional third argument that indicates the step value used when building the array. If no step is given the elements go up by increments of one, corresponding to the old behaviour.  The function call range (1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2]





//CHAPTER 5: HIGHER-ORDER FUNCTIONS//
/*let total = 0, count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);*/

// A simpler form of that code//
//console.log(sum(range(1, 10)));//




//Abstraction: Abstraction hide details and give us the ability to talk about problems at a higher (or more abstract) level.//

//EXAMPLES A program doing something a number of times//
/*for (let i = 0; i < 10; i++) {
  console.log(i);
}*/
/*
for (let i = 0; i < 11; i++) {
  console.log(i);
}*/


/*for (let kofi = 80; kofi < 100; kofi++) {
  console.log(kofi);
}*/



//Doing something N times as a function//
/*function repeatLog(n) {
  for (let i = 0; i < n; i ++) {
    console.log(i)
  }
}

repeatLog(7)*/






//passing an action as a function value//
/*function repeat(n, man) {
  for (let i = 0; i < n; i++) {
    man(i)
  }
}

repeat(4, console.log);*/


/*function sel(bad, sold) {
  for (let i =61;i < bad; i++) {
    sold(i)

  }
}

sel(67, console.log)



function kill(police,soldier) {
  for (let i = 0; i < soldier; i++) {
    police(i)
  }
}


kill(console.log, 7)



function alpha(q, r) { 
  for (let a = 0; a < r; a++) {
    q(a)
  }
}
alpha(console.log, 8)*/



//We dont have to pass a predefined to repeat. Often, it is easier to create a function value on spot instead//

/*let label = [];
repeat(5, i => {
  label.push('Unit ${ i = 1}');
});

console.log(label) problem with this code*/



// Higher order functions are functions that operate on other functions, either by taking them as arguments or by returning them, are called higher order functions. //
// functions that create new functions//
/*function greaterThan(n) {
  return m => m > n;
}

let great = greaterThan(4);
console.log(great(123))


function now(s) {
  return y => s > y
  }

let gone =  now(599);
console.log(gone(55))*/


// pgm97//
// functions that change other functions//
/*function noisy(f) {
  return(...args) =>  {
    console.log("Calling with", args);
    let result = f(...args);
    console.log("Called with", args, ", returned", result);
    return result;
  };
}

noisy(Math.min)(3, 2, 1); I dont understand*/




// Functions that provide new types of control flow//
/*function unless(test, then) {
  if (!test) then();
  }
    repeat(3, n => {
      unless(n % 2 == 1, () => {
      console.log(n, "is even");
    });
    }); Not clear*/


// In built array method like forEach, that provides something like a for/of loop as a higher order function//
//["A", "B"].forEach(1 => console.log(1)); this is code did not work//






// filtering array page 100//
//To be looked at later with rapt attention perhaps watch a video on it//
/*function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}

console.log(filter(SCRIPTS, script => script.living));*/



// Transforming with map page 100 to be looked at later with respect to codes in the book`s sandbox//







// summarizing with reduce//
/*function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0)); To be looked at age*/






//composability workon this later or watch videos on it page 102//






// Recognizing text//
/*function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
  } else {
    counts[known].count++;
  }
  }
  return counts;
  }
  console.log(countBy([1, 2, 3, 4, 5], n => n > 2));*/




/*var ice = 4;
while (ice> 0, ice++ ) {
  console.log("This is it")
}



function nu(n) {
  if (n % 2 ==0) {
    return "this is an even number"
} else {
  return "it is an odd number"
}
}

console.log(nu(6));*/



// JAVASCRIPT FROM CALEB A NINE HOUR TUTORIAL//
//VARIABLES
var arc = "sex";
console.log(arc);
var arc = 5;
console.log(arc)
var arch = arc + arc
console.log(arch * 4)


var age = 5;
var newAge = age;
console.log(age);


var message = "newAge = " + newAge;
console.log(message);


//FUNCTIONS
/*function come(){
  var age = 5565;

}
let seat;
seat = "neat";
console.log(seat);

let people = {
  name: 'Caleb',
  age: 93,
  favFood: 'Pizza...Obviously',
  fun: function (){
    console.log("Yay");
  }
}
people.fun();


let now = new Date();
console.log(now)
 

let grades = [3, 4, 6]
console.log(grades);  

let myName = "archimedes";
myName = myName.toUpperCase();

let yourName = new String("Clear");
let age = new Number();

console.log(typeof(myName));
console.log(typeof(yourName));*/




// Number data type
/*let x = 9007199256868686868;
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.isSafeInteger(x));*/


let babies = 9004505505054943;
//console.log(Math.pow(babies, 200));//
//console.log(Math.pow(-babies, 300));//
 //console.log(console.log() + 2)
//console.log(1/0);



// OPERATORS, PRECEDENCE AND ASSOCIATIIVTY, ARITHMETIC
/*var slicePizza = 10;
console.log(slicePizza % 2)

var calculate = 56 + 45 * 4 + 4- 6 / 7;
var calculate1 =  567 / 45 * 34 - 45;
console.log(calculate, calculate1);*/


var increments = 45;
increments++;
console.log(increments);


//INCREMENT, DECREMENT, ASSIGNMNENT
{
  let men = 545;
men = men - 4000;
console.log(men);

let schoolFees = 200;
schoolFees++; // post fixed decrement and increment
 console.log(schoolFees);

let schoolFeesLeft = schoolFees;
let leftOver = schoolFeesLeft - 120;
 console.log(leftOver);


// prefixed
let gold = 45;
console.log(gold);
let silver = ++gold
let diamond = gold++;
console.log(diamond);
console.log(silver)
}
// increment and decrement
/*let numberOfDiamond = 456;
numberOfDiamond /= 2;
console.log(numberOfDiamond);*/


// ParseInt and ParseFloat
let q = 34;
let k = "98";
let e = Number.parseInt(k)
console.log(q + e);



let books = 4;
let pens = "45";
let penInt = Number.parseInt(pens);
console.log(books + penInt)

// ParseFloat
/*let c = 65;
let g = Number.parseFloat("4.444");
h = c + g;
h = Number.parseInt(h)
console.log(c * g)
console.log(h)*/


 /*Conversion
var input = prompt("Put in a number");
console.log(input);
console.log("Decimal  :", input);
console.log("Binary  :", Number.parseInt(input, 2));
console.log("Octal  :", Number.parseInt(input, 8));
console.log("Hex  :", Number.parseInt(input, 16));
console.log("Base Nine  :", Number.parseInt(input, 9));
console.log("Base eleven  :", Number.parseInt(input, 11));
console.log("Base five  :", Number.parseInt(input, 5));
console.log("Base six  :", Number.parseInt(input, 6));*/



/* converting from decimal to other bases
var input = Number(prompt("Put in a DECIMAL number"));
console.log(input  +  "in decimal to decimal:", input);
console.log(input, "in decimal to binary:", input.toString(2));
console.log(input, "in decimal to octal:", input.toString(8));
console.log(input, "in decimal to hex:", input.toString(16));*/


/*function sell() {
  let i = 10;
  let j =10;
  if(i < j) {
    console.log("This is what I have been talking about")
  
  }if(i == j){
    console.log("I know why  I am doing this.")
  }
}


sell()*/




/*let x = 585858586;
console.log("$" + x.toLocaleString())

console.log(x.toFixed(2))

let b = 12;
console.log(typeof(b))*/


/*{
var abs = Math.abs(-36);//36
var goUp = Math.cell(.00000001);//1
var goDown = Math.floor(.99999);//0
var powerUp = Math.pow(3, 2);//9
let roundUp = Math.round(4.9);//5
var roundDown = Math.round(5.1)//5
var isPositive = Math.sign(-Infinity);// -1 (false)
var getInt = Math.trunc(4.999999); //4
}*/



let school = "Sense";
console.log(school[4]);


// concatenating
let myName = "Sena";
console.log("My name is  " + myName + "!")

// A simple way of writing the same thing
//console.log(`My name is ${myName}!`)

let schoolOne = 5;
console.log(`The number of schools are: ${schoolOne}`);

console.log(`I thought there are only ${schoolOne} schools in Ghana`);

let schoolTwo = "The good and mercy of\ the Lord will always be with us from the begining to the end, and God will not forget us from\ now till thy kingdom come. I will always worship\ God and nothing will stop me from doing that."
console.log(schoolTwo);



//Property on strings or string methods
{
  var favFood = "tacos";
  console.log(favFood.charAt(2)) //get the position
}
 {
   console.log(favFood.concat("is my favorite food")) //concat appends a statement to a string or strins
 }


var theLaw = "What is the first law in the Bible? ";
console.log(theLaw.concat("Love your neighbour as yourself."))

console.log(school.concat(" is common to the people who love it else, most people dislike it likewise my friends"));



// Finding a string within another string using includes
{
  let content = "Today we`ll be talking about string methods  my head and how fun they  are";
  let search1 = "string";
  let search2 = "my head";
  console.log(content.includes(search2))
  console.log(content.indexOf(search2))
  // A search inside a search
  console.log(content.indexOf(search2.indexOf(search2) + 1));
  // Search from the end
  console.log(content.lastIndexOf(search1) - 1)

}

/*{
let level = ["l", "b", "c", "f"];
let nowOne = "t";
console.log(level.indexOf(nowOne));

}*/


// More on substrings
// substrings= it basically produces a string out of strings
let content1 = "She is the love of my life";
console.log(content1.substring(1, 10))
console.log(content1.substr(2, 5))

// slice works similar to substring

// how to moddify a string
let content2 = "      \t\nToday we will be talking about string methods and how fun they are \t\n";
console.log(content2.trim());

// repetiting string or numbers
let adjoa = "tick tock";
console.log(adjoa.repeat(4));
 
// the use of search , split, replace
let contentFour;
contentFour = "Neatness is next to goddliness";
console.log(contentFour.split(" ")); 
console.log(content1.split(" "));
console.log(content1.replace("She", "He"))
console.log(content2.replace("Today", "Tomorrow"));
console.log(content2.search("a"))



let kofi1 = "Sell the tomatoes and give me the change and let us know how to handle the rest of the issue. The love of the Lord should be ur utmost";
console.log(kofi1.includes("how"))
console.log(kofi1.indexOf("how"))


// Functions and objects 
// objects can also functions in them
function neat() {
  let love = 345;
  let sex = 44;
  if(love < sex) {
    return love * sex / love;
  }else
  return "it is normal";
}
console.log(neat())



let hovr = {nam: "one", aga: "name"};
console.log(hovr.nam);
console.log(hovr.nam.replace("one", "thirty"))



let tea = {
  milk: 12,
  milo: 14,
  nido: 20,
 
  powder: function(){
    if(`${this.milk}` < `${this.milo}`){
      console.log("I knew this government is here to misuse our funds")
    }
}
  }

tea.powder();


// nested objects
// myObject: {sweetProperty:"Hello Friends"}
//way of calling say position.myObject.sweetProperty





//JSON - Javascript notation similar or same to objects


//conditional statement
//>comparision operators(=, ==, ===, !==,<=, =>)
//logical operators (NOT!, AND&&, OR||)
// NOT 
//AND = BOTH MUST BE TRUE, read on this
// You can use multiple logical opeators together but it is advisable to do that in nested conditional statement
// Boolean algebra is a good book for that




/*Switch statement

/*let user = prompt("What did you eat today?");

switch(user) {
  case "fufu":
    console.log("My favorite");
    break;

  case "banku":
    console.log("I hate the delicacy");
    break;
  
  case "mango":
    console.log("Is that also called food")
    break;
  default:
    console.log("I guess you are not here")
     break;

}*/




/* switch statements
let soldiers = prompt("Are you a soldier?");
let rs = soldiers;
let now = rs.toLocaleUpperCase();


switch(now) {
  case "YES":
    console.log("You are too weak to be a soldier")
    break;
  case "NO":
    console.log("No wonder you are soft and weak")
    break;

  default:
    console.log("Go home and eat for your parents are waiting for you")
    break;
}
console.log(soldiers)*/



/*let x = [ 1, 2, 3];
x[10] = 11;
console.log(x);*/

/* A single line if statement
let man = prompt("Are u here?");
if(man == "yes"){console.log("Then stop fooling")}
else {console.log("You are good to go")};*/


/*TERNARY OPERATOR
let goodies = prompt("What is my favorite color?");
let answer = goodies === "red" ?  20 : 5;
console.log(answer);


goodies === "yes" ? console.log("10") : console.log("0");*/
//if statement can be used for this as well
/*
let male = prompt("Do u like kenkey");
answer1 = male === "maybe" ? console.log("U just won 10 bugs") : console.log("U won for urself nothing");*/



/* Loops writing of loops comes with the acronym ICU 
Types: while, do while and for
let cover = 10; initialization
while (cover < 15){  
  console.log(cover);
  cover++ update
}*/


let i = 1000;//initialization
do{
  console.log(i); // code
  i++ //update
} while(i < 10);// condition


for(let i = 0; i < 10; i++) {
  console.log(i)
}

for(let kofi = 10; kofi < 20; kofi++){
  console.log(kofi);
}
  
/* More examples on loops
 do while loop do something ones
{
let password;
do {
    password = prompt("What is the password?");

} while(password.toLowerCase() !== "let me in");

}*/

/* for loop*/
{
  for (let i = 0; i < 10; i++){
    console.log(i)
  }
}

{
  let list = [1, 3, 6, 7, 8, 0];
  for (let i = 0; i < list.length; i++){
    console.log(list[3])
  }
}


let fun = [1, 3, 5, 7, 'King', 'men'];
for(let c = 0; c < fun.length; c++){
  console.log(fun[4])
}


/*let myString = "Search this string baby";
let charToSearch = "c";
for(let i = 0; i< myString.length; i++){
  if(myString[i] === charToSearch){
    console.log(myString[i] + " is found at index " + i);
  }
}*/


// break and continue keywords
// break breaks whatever line or function we are in
// continue do otherwise

/*let myString1 = "Search this is c c string c c c baby  c c c";
let charToSearch1 = "c";
for (let i = 0; i < myString1.length; i++){
  if(myString1 === 'a' || myString1 === 'i' || myString1[i] === 'e'){
    continue;
  }
  console.log(myString1[i]);
}*/

//Nested loops
/*{
  for(let i = 10; i > 0; i--){
    for(let j = 0; j < 10; j++){
      console.log(j, i)
    }
  }*/


let d = document.getElementById("destination");
for(let i = 0; i< 10; i++){
  for(let k = i; k >= 0; k--){
    d.append(k + " ");
  }
  var br = document.createElement("br");
  d.appendChild(br);
}



//ARRAYS
let gee = [3, 5, 6, "neat", 56, "meen", [4, 5, 6, 6],  67];
console.log(gee.length - 1);
gee[100] = 12;
console.log(gee)
console.log(gee[100])


















































































































































































































































































