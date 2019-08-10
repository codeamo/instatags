// function createCounter () {
//   let counter = 0;
//   const myFunction = function () {
//     counter = counter + 1;
//     return counter;
//   };
//   return myFunction;
// }
// const increment = createCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();
// console.log('example increment', c1, c2, c3);



// // let name = 'John';

// // function sayHi () {
// //   console.log('Hi, ' + name);
// // }

// // name = 'Pete';

// // sayHi();

// // let a = 3;
// // function addTwo (x) {
// //   let ret = x + 2;
// //   return ret;
// // }
// // let b = addTwo(a);
// // console.log(b);

// // let val = 7;
// // function createAdder () {
// //   function addNumbers (a, b) {
// //     let ret = a + b;
// //     return ret;
// //   }
// //   return addNumbers;
// // }
// // let adder = createAdder();
// // let sum = adder(val, 8);
// // console.log('example of function returning a function: ', sum);


// // function pow (x, n) {
// //   if (n == 1) {
// //     return x;
// //   } else {
// //     return x * pow(x, n - 1);
// //   }
// // }

// // alert( pow(2, 3) ); // 8

// // function factorial (n) {
// //   if (n === 0) {
// //     return 1;
// //   } else {
// //     return n * factorial(n-1);
// //   }
// // }

// // console.log(factorial(3));

// function min (a,b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// console.log(min(5,2));


// function isEven (number) {
//   if (number < 0) {
//     return isEven(-number);
//   } else if (number == 1) {
//     return false;
//   } else if  (number == 0) {
//     return true;
//   } else {
//     return isEven(number - 2);
//   }
// }

// console.log(isEven(50)); // true
// console.log(isEven(75)); // false
// console.log(isEven(-1)); // false


// function countBs (str) {
//   let findBs = str.match(/B/g);
//   let counter = findBs.length;
//   return counter;
// }

// function countChar (str, char) {
//   let counter = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
// //       counter++;
// //     } else {
// //       continue;
// //     }
// //   }
// //   return counter;
// // }

// // console.log(countChar('i abm a BoBy', 'B'));

// // const robotFactory = (model, mobile) => {
// //   return {
// //     model: model,
// //     mobile: mobile,
// //     beep () {
// //       console.log('Beep Boop');
// //     }
// //   };
// // };

// // const tinCan = robotFactory('P-500', true);
// // console.log(tinCan.model);

// const menu = {
//   _courses: {
//     appetizers: [],
//     mains: [],
//     desserts: []
//   },
  
//   get appetizers () {
//     return this._courses.appetizers;
//   },
  
//   set appetizers (appetizerIn) {
//     this._courses.appetizers = appetizerIn;
//   }, 
  
//   get mains () {
//     return this._courses.mains;
//   },
  
//   set mains (mainsIn) {
//     this._courses.mains = mainsIn;
//   }, 
  
//   get desserts () {
//     return this._courses.desserts;
//   },

//   set desserts (dessertsIn) {
//     this._courses.desserts = dessertsIn;
//   },

//   get courses () {
//     return {
//       appetizers: this.appetizers,
//       mains: this.mains,
//       desserts: this.desserts
//     };
//   },
//   addDishToCourse (courseName, dishName, dishPrice) {
//     const dish = {
//       name: dishName,
//       price: dishPrice,
//     };
//     return this._courses[courseName].push(dish);
//   },
//   getRandomDishFromCourse (courseName) {
//     let dishes = this._courses[courseName];
//     let randomIndex = Math.floor(Math.random() * dishes.length);
//     return dishes[randomIndex];
//   },
//   generateRandomMeal () {
//     let apptizer = this.getRandomDishFromCourse('appetizers');
//     let main = this.getRandomDishFromCourse('mains');
//     let dessert = this.getRandomDishFromCourse('dessert');
//     let totalPrice = apprizer.price + main.price + dessert.price;
//     return `Your meal is ${apptizer.name} ${main.name} ${dessert.name} The price is ${totalPrice} `;
//   }
// };

// menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
// menu.addDishToCourse('appetizers', 'Caesar', 4);
// menu.addDishToCourse('appetizers', 'Salad', 2.25);

// menu.addDishToCourse('mains', 'sanbuse', 3.25);
// menu.addDishToCourse('mains', 'cake', 2.25);
// menu.addDishToCourse('mains', 'tibs', 5.25);

// menu.addDishToCourse('desserts', 'white forest', 4);
// menu.addDishToCourse('desserts', 'black forest', 6);
// menu.addDishToCourse('desserts', 'coffee', 2);

// const meal = menu.generateRandomMeal();
// console.log(meal);
// //console.log(menu._courses)

// function sum2 (num) {
//   let res = num +2;
//   return res;
// }

// console.log(sum2(2));

var tagFrequency = {
  'zmin': 22,
  'yttoga': 23,
  'xaaji': 21,
  'amin': 13,
  'ayu': 24,
};
var tags = Object.keys(tagFrequency).map(function (tagId) {
  return {
    id: tagId,
    frequency: tagFrequency[tagId]
  };
});
 
//console.log(tags);

// function sortTagsByFrequencyDesc (tags) {
//   let arr = [];
//   tags.forEach(function (tag) {
//     for (let key in tag) {
//       if (typeof tag[key] === 'number') {
//         arr.push(tag[key]);
//       } else {
//         continue;
//       }
//     }
//   });
//   return arr;
// }

// console.log(sortTagsByFrequencyDesc(tags));

function sortTagsByFrequencyDesc (tags) {
  var res = tags.sort((a, b) => (a.frequency < b.frequency) ? 1 : -1);
  return res;
}

var sortedTags = sortTagsByFrequencyDesc(tags);

console.log(sortTagsByFrequencyDesc(tags));

function filteredTags (sortedTags, minFrequency) {
  let arr = [];
  sortedTags.forEach(function (obj) {
    for (let key in obj) {
      if (typeof obj[key] === 'number') {
        if (obj[key] > minFrequency) {
          arr.push(obj);
        }
      }
    }
  });
  return arr;
}


console.log(filteredTags(tags, 16));





