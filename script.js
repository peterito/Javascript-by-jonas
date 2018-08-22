/*
let name = "Peter";
console.log(name);    
let lastName = "Oyebamiji";
console.log(lastName);
let age = 26;
console.log(age); */

//CODING CHALLENGE 1
/*
John and a friend invented a simple game where
 the player with the highest value of his height 
 (in centimeters) plus five times his age wins. 
and also add the third player.


let heightJohn = 180;
let heightPeter = 165;
let ageJohn = 26;
let agePeter = 27;
let scoreJohn = heightJohn + 5 * ageJohn;
let scorePeter = heightPeter + 5 * agePeter;

if (scoreJohn > scorePeter) {
    console.log('John wins the game with ' + scoreJohn + ' Points!');
} else if (scorePeter > scoreJohn) {
    console.log('Peter wins the game with ' + scorePeter + ' Point!');
} else if (scoreJohn === scorePeter) {
    console.log('There is a draw.');
}

let heightMary = 120;
let ageMary = 38;
let scoreMary = heightMary + 5 * ageMary;

if (scoreJohn > scorePeter && scoreJohn > scoreMary){
        console.log('John wins the game with ' + scoreJohn + ' Points!');
} else if (scorePeter > scoreJohn && scorePeter > scoreMary){
    console.log('Peter wins the game with ' + scorePeter + ' Points!');
} else if (scoreMary > scorePeter && scoreMary > scoreJohn){
    console.log('Mary wins the game with ' + scoreMary + ' Points!');
} else {
    console.log('It\'s a draw');
}

/*
  function getPlayerDetails(player){
      const height = Number(prompt('Please Enter player\'s height in centimeters'));
      const age = Number(prompt('Please Enter player\'s age'));
      return height + 5 * age;
  }
 const player1 = getPlayerDetails('player1');
 const player2 = getPlayerDetails('player2');

 if(player1 > player2) alert('player1 wins');
 else if (player2 > player1) alert('player2 wins');
 else alert('Draw');
*/
/*
function isIsogram(str){
    var chars = str.toLowerCase().split(''), found = {};
    for (var i=0,l=chars.length; i<l; i++){
      if (typeof found[chars[i]] === 'undefined')
        found[chars[i]] = true;
      else return false;
    }
    return true;
  }
  
  console.log(isIsogram("Dermatoglyphics")+"<br>")
  console.log(isIsogram("peter")+"<br>")
  console.log(isIsogram("mouse")+"<br>")


class shoppingCart{
    constructor(){
      this.total =0
      this.items ={}
    }
    additme (itemName, quantity, price){
      this.total += price * quantity;
      this.items[itemName]= this.items[itemName]
      ? this.items[itemsName] + quantity
      :quantity;
    }
    
    removeItem (itemName, quantity, price){
      if (quantity >= this.items[itemName]){
        this.total -= price * this.items[itemName],
          delete this.items[itemName]
    } else {
      this.total -= price * quantity;
      this.itmes[itemName] -= quantity;
    }
  }
  
  checkout (cashPaid){
    if(casPaid < this.total){
      return 'cash not enough'
    }
    return cashPaid - this.total
  }
  }
  
  class Cash extends ShoppingCart{
    constructor(){
      super();
      this.quantity = 100;
    }
    removeItem(){
      this.quantiyy--;
    }
  }
  

  let name = 'Peter';
  let age = 28;
  console.log(name + ' ' + age);
   let job, isMarried;
   job = 'programmer';
   isMarried = false;
   console.log(name + ' is a ' + age + ' years old ' + job + '. is he married? ' + isMarried + '.');

   //let firstName = prompt('what is your first Name?');
  // console.log(firstName);
alert(name + ' is a ' + age + ' years old ' + job + '. is he married? ' + isMarried + '.');
 


 //OPERATORS//////////////////////////////

let birthYear = 2018;
birthYear = birthYear - 28;


let agePaul = 28;
agePeter = agePaul = (3 + 5) * 4 - 6;
console.log(agePeter);
console.log(agePaul);

agePeter *=2;
console.log(agePeter);
console.log(birthYear);


//LECTURE IF/ELSE STATEMENTS

let name = 'Peter';
let age = 28;
let isMarried = 'yes';

if (isMarried === 'yes'){
  console.log(name + ' is married!');
} else {
  console.log(name + ' will hopefully marry soon');
}

isMarried = false;
if(isMarried){
  console.log('YES');
}else{
  console.log('NO');
}

if(isMarried){
  console.log('YES!');
}
////////////////////
//BOOLEAN LOGIC AND SWITCH///////////////////////////

let age = 35;
if (age < 20) {
  console.log('John is a teenager');
}else if(age >= 20 && age < 30){
  console.log('john is a youger man.')
}
else{
  console.log('John is a man')
}

let job ='driver';
//job = prompt('what does john do?');

switch (job){
  case 'teacher':
    console.log('John teaches maths.');
    break;
  case 'driver':
    console.log('John drives a cab in lagos.');
    break;
  case 'cop':
    console.log('John helps fight crime.');
    break;
  default:
    console.log('John does somethin else.');
}


//FUNCTION////////////////////////////////////////

function calculateAge (yearOfBirth){
  let age = 2018 - yearOfBirth;
  return age;
}
 let agePeter = calculateAge()//(prompt('what\'s your birth year?'));
 let agePaul = calculateAge()//(prompt('what\'s your birth year?'));
 let ageJohn = calculateAge()//(prompt('what\'s your birth year?'));
 //console.log(ageJohn);

 //let surname = prompt('Greetings friend, may I enquire as to your surname?');
function yearsUntilRetirement(name, year){
  let age = calculateAge(year);
  let retirement = 65 - age;

  if (retirement >= 0){
    console.log(name + ' retires in ' + retirement + ' years.');
  } else{
    console.log(name + ' has already retired.');
  }
}
 yearsUntilRetirement('Peter',1990);
 yearsUntilRetirement('Paul',1980);
 yearsUntilRetirement('John',1963);

 //statement and expressions in function//////////////////////////

 function someFun(par){
   //function statement
 }

let someFun =function(par){
  //function experession
}
//expression produces outcome to a value
//E.g
3 + 4;
let x = 3;

//statements .... it doesnt produce immediate value.

if (x === 5){
  //do somthing
}

//ARRAY////////////////////////

let names = ['Peter', 'Paul', 'Mark'];
let years = new Array(1990, 1982, 1963);
console.log(names[0]);
// to change name in array, so the array 1 will change to Ben

names[1] = 'Ben';

let Peter = ['peter', 'Oyebamiji', 1990, 'Programmer', false];
Peter.push('Black'); // this add Black to the end of peter array
Peter.unshift('Mr.');// this add Mr to the beginning of an array.
Peter.pop(); //this remove the last element from the array.
Peter.shift(); // this remove the first element from the begining

console.log('oyebamiji');
//alert(Peter.indexOf('Oyebamiji')); //IT RETURS THE index number
if (Peter.indexOf('programmer') === 0){
  console.log('Peter is not programmer')
}else{alert('He\'s a programmer')};

//OBJECTS..................////////////////////////


let peter = {
  name: 'peter',
  lastName: 'oyebamiji',
  yearOfBirth: 1990,
  job: 'programmer',
  isMarried: false
};

let myName = 'job'
//console.log(peter);
//console.log(peter.lastName); first way to call an object
//console.log(peter['lastName']); 2nd .........
//console.log(alert(peter.yearOfBirth));
peter.lastName = 'aderemi';
peter.job = 'footballer';
peter.job = 'programmer';
console.log(peter[myName]);
console.log(peter);

//Another way of creating an object

let Paul = new Object();
Paul.name = 'jane';
Paul.lastName = ' lolu';
Paul['yearOfBirth'] = 1963;
Paul['job'] = 'retired';
Paul['isMarried'] = true;

console.log(Paul);

//OBJECTS & method..................////////////////////////
//V1.0 of dealing with an object
let peter = {
  name: 'peter',
  lastName: 'oyebamiji',
  yearOfBirth: 1990,
  job: 'programmer',
  isMarried: false,
  family: ['Lanre', 'Grace', 'funke'],
  //calculateAge: function(yearOfBirth){
      //return 2018 - yearOfBirth;
  //}
  calculateAge: function() {
      return 2018 - this.yearOfBirth;
  }
};

//console.log(peter.calculateAge(prompt('please enter year of birth')));
console.log(peter.calculateAge());
let age = peter.calculateAge();
peter.age = age;
console.log(peter);
 
//V2.0

let peter = {
  name: 'peter',
  lastName: 'oyebamiji',
  yearOfBirth: 1990,
  job: 'programmer',
  isMarried: false,
  family: ['Lanre', 'Grace', 'funke'],
  //calculateAge: function(yearOfBirth){
      //return 2018 - yearOfBirth;
  //}
  calculateAge: function() {
      this.age = 2018 - this.yearOfBirth;
  }
};
peter.calculateAge();
console.log(peter);

//LOOPS
for (let i = 0; i < 10; i++){
  console.log(i)
}
*/
//for Loops
let names = ['Peter', 'Jane', 'James', 'Paul']; 
//for (let i = 0; i < names.length; i++){
 // console.log(names[i]);
//}
/*
for (let i = names.length - 1; i >= 0; i--){ //reverse version starting from paul
  console.log(names[i]);
}



//While Loops
let i = 0;
while(i < names.length){
  console.log(names[i]);
  i++;
} 

for (let i = 0; i <= 5; i++){
  console.log(i);
  if (i === 3){ //this will print no 1-3 and stop
    break;
  }
}

for (let i = 0; i <= 5; i++){
  if (i === 3){ //this will skip no 3 and continue from 4
  continue;
  }
  console.log(i);
}
*/

//CHALLENGE 2
//1. Create an array with some years where persons were born
//2. Creat an empty array
//3.Use a loop to fill the array with ages of the person
//4. use a loop to log into the console whether each person is fukk age or not as well as their age
//5. finally, create a function called printFullAge which receives the array of
//years as and augment, executes the step 2
//3 and 4. and returns an array of true/false, whether the person is of full age or not
//6 call the function with 2 different array and store the result in two variables:full_1 and full_2

/*
let birthYear = [1992, 1995, 2000, 2008, 1965];
let ages = [];

for (let i = 0; i < birthYear.length; i++){
  ages[i] = 2018 - birthYear[i];
}

for (i = 0; i < ages.length; i++){
  if(ages[i] >= 18){
    console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' Years old, and is full age.');
  }else{
    console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' Years old, and is Not of fulll age.');
  }
}
*/


function printFullAge(birthYear){
  let ages = [];
  let fullAges = [];

for (let i = 0; i < birthYear.length; i++){
  ages[i] = 2018 - birthYear[i];
}

for (i = 0; i < ages.length; i++){
  if(ages[i] >= 18){
    console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' Years old, and is full age.');
    fullAges.push(true);
  }else{
    console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' Years old, and is Not of fulll age.');
    fullAges.push(false);
    }
  }
  return fullAges;
}
let birthYear = [1992, 1995, 2000, 2008, 1965];
let full_1 = printFullAge(birthYear);
let full_2 = printFullAge(2012, 2018, 1990);





































































































