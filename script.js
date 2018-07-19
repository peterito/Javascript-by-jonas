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
 


 //OPERATORS

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
//BOOLEAN LOGIC AND SWITCH

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
*/

//FUNCTION//////////////

function calculateAge (yearOfBirth){
  let age = 2018 - yearOfBirth;
  return age;
}
 let agePeter = prompt(('input your birth year') + calculateAge());
 let agePaul = prompt(('input your birth year') + calculateAge());
 let ageJohn = prompt(('input your birth year') + calculateAge());
 console.log(agePaul);










































































