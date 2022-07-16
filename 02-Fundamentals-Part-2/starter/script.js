'use strict';

// function logger() {
//   console.log('My name is Jonas');
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const applejuice = fruitProcessor(5, 0);
// console.log(applejuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeuice);

// //Function declaration
// const age1 = calAge1(1991);

// function calAge1(birthYeah) {
//   return 2037 - birthYeah;
// }


// //Function expression
// const calAge2 = function(birthYeah) {
//   return 2037 - birthYeah;
// }
// const age2 = calAge2(1991);

// console.log(age1, age2);

// Arrow Function
// const calAge3 = birthYeah => 2037 - birthYeah;
// const age3 = calAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYeah, firstName) => {
//     const age = 2037 - birthYeah;
//     const retirement = 65 - age;
//     //   return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));

// function cutFruitPieces(fruit) {
//     return fruit * 4;
//   }
  
//   function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
  
//     const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
//     return juice;
//   }
//   console.log(fruitProcessor(2, 3));

//  function cortarFrutas(fruta) {
//     return fruta * 4;
//  }
//     function processarFruta(maca, laranja){
//         const pedacosMaca = cortarFrutas(maca);
//         const pedacosLaranja = cortarFrutas(laranja);

//         const suco = `Suco com ${pedacosMaca} pedaços de maça e ${pedacosLaranja} pedaços de laranja.`;
//         return suco;
//     }

// console.log(processarFruta(2, 3))

// const calcAge = function (birthYeah) {
//     return 2037 - birthYeah;
//   }
  
//   const yearsUntilRetirement = function (birthYeah, firstName) {
//     const age = calcAge(birthYeah);
//     const retirement = 65 - age;
  
//     if (retirement > 0) {
//       console.log(`${firstName} retires in ${retirement} years`);
//       return retirement;
//     } else {
//       console.log(`${firstName} has already retired 🎉`);
//       return -1;
//     }
//   }
  
//   console.log(yearsUntilRetirement(1991, 'Jonas'));
//   console.log(yearsUntilRetirement(1950, 'Mike'));

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

//1

// const calcAverage = (a, b ,c) => (a, b, c) / 3;
// console.log(calcAverage(3, 4, 5));


// let scoreDolphins = calcAverage(44, 23,71);
// let scoreKoalas = calcAverage(65, 54, 27);
// console.log(scoreDolphins, scoreKoalas);


// const checkWinner = function (avgDolhins, avgKoalas) {
//     if(avgDolhins >= 2 * avgKoalas){
//         console.log(`Dolphins win (${avgDolhins} vs ${avgKoalas})`);
//     }
//     else if(avgKoalas >= 2 * avgDolhins){
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolhins})`);
//     }
//     else{
//         console.log('No team wins...');
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';


// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2028);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length -1]);

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'Jonas';
// const jonas = [firstName, 'Shmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);

// // Exercise
// const calcAge = function (birthYeah) {
//     return 2037 - birthYeah;
//   }
//   const years = [1990, 1967, 2002, 2010, 2018];
  
//   const age1 = calcAge(years[0]);
//   const age2 = calcAge(years[1]);
//   const age3 = calcAge(years[years.length - 1]);
//   console.log(age1, age2, age3);
  
//   const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
//   console.log(ages);

// const friends = ['Michael', 'Steven', 'Peter'];

// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// friends.pop();
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);


///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 
*/

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;  
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totals);

// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
//   ];
  
//   const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann', 
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
//   };

