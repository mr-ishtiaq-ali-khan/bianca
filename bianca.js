console.clear();

const murderer = {
  name: "Rusty",
  room: "kitchen",
  weapon: "candleStick",
};

const { name, weapon } = murderer;

// Destructuring Array
var [a, b, c] = [0, 1, 2];

// Omit certain values
var [d, , e] = [8, 6, 4];

// Combine with spead/rest operator
var [f, ...d] = [3, 5, 7, 8, 9];

// swap variables
var a = 1,
  b = 2;
[b, a] = [a, b];

// Objects
var { user: x } = { user: 5 };

const game = {
  suspects: [
    {
      name: "Rusty",
      color: "orange",
    },
    {
      name: "Miss Scarlet",
      color: "red",
    },
  ],
};

for (let i = 0; i < Object.keys(game).length; i++) {
  const key = Object.keys(game)[i];
  for (let suspect of game[key]) {
    // console.log(suspect.name, suspect.color);
  }
}

// For In loop for objects
for (let key in game) {
  for (let suspects of game[key]) {
    for (let leads in suspects) {
      if (suspects[leads] == "red") {
        // console.log(suspects.name);
      }
    }
  }
}

// Destructure to get nested colors
var suspects = [
  {
    name: "Rustry",
    color: "orange",
  },
  {
    name: "Mis Scarlet",
    color: "red",
  },
];

var [{ color: orange }, { color: red }] = suspects;

// method in Object without key ES6 FEATURE
var someObject = {
  zero: 0,
  something() {
    console.log("hello");
  },
};

// Create Suspects Object
function createSuspectsObject(name) {
  return {
    name: name,
    color: name.split(" ")[1],
    speak() {
      console.log("my name is" + name);
    },
  };
}

var suspects = ["Miss Scarlet", "Colonel Mustard", "Mr. White"];
var suspectsList = [];

suspects.forEach((suspect) => {
  suspectsList.push(createSuspectsObject(suspect));
});

suspectsList[0].speak;

// *********************************************Each*************************************************
const _ = {};
_.each = function (list, callback) {
  if (Array.isArray(list)) {
    // loop through array
    for (let [i, l] of list.entries()) {
      // call the callback on list
      callback(l, i, list);
    }
  } else {
    for (let l in list) {
      callback(list[l], l, list);
    }
  }
};

// _.each([0,1,2,3,4,5], (list) => console.log(list) )
// _.each({a: 0, b: 1, c: 2, d: 3}, (list, i) => console.log(list, i) )

const weapons = ["candlestick", "lead pipe", "revolver"];
const brokenWeapons = [];
_.each(weapons, (weapon, l, list) => {
  brokenWeapons.push("broken " + weapon);
});

// *********************************************Map*************************************************
_.map = (list, callback) => {
  let response = [];

  if (Array.isArray(list)) {
    for (let [i, l] of list.entries()) {
      response.push(callback(l, i, list));
    }
  } else {
    let i = 0;
    for (let l in list) {
      response.push(callback(list[l], i, list));
      i++;
    }
  }
  return response;
};

// console.log(_.map(['a','b','v','d'], function(l,i,list) {
//     return l;
// }))
// console.log(_.map({chara: 'a', charb: 'b', charc: 'v', chard: 'd'}, (l, i, list) => {
//     return l;
// }));

_.map = (list, callback) => {
  let storage = [];
  _.each(list, (l, i, allList) => {
    storage.push(callback(l, i, allList));
  });

  return storage;
};
// console.log(_.map(['a','b','v','d']))
// console.log(_.map({chara: 'a', charb: 'b', charc: 'v', chard: 'd'}, (l, i, alllist) => l ));

// *********************************************Filter*************************************************

_.filter = (list, callback) => {
  let response = [];

  if (Array.isArray(list)) {
    for (let [i, l] of list.entries()) {
      if (callback(l, i, list)) {
        response.push(callback(l, i, list));
      }
    }
  } else {
    let i = 0;
    for (let l in list) {
      if (callback(list[l], i, list)) {
        response.push(callback(list[l], i, list));
      }
      i++;
    }
  }
  return response;
};

_.filter = (list, callback) => {
  let storage = [];
  _.each(list, (l, i, allList) => {
    if (callback(l, i, allList)) {
      storage.push(callback(l, i, allList));
    }
  });

  return storage;
};
// console.log(_.map(['a','b','v','d']))
// console.log(_.map({chara: 'a', charb: 'b', charc: 'v', chard: 'd'}, (l, i, alllist) => l ));

// Filter Data Excercise
const videoData = [
  {
    name: "Miss Scarlet",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Mrs. White",
    present: false,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Reverend Green",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Rusty",
    present: false,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Colonel Mustard",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Professor Plum",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
];

const suspectsPresent = _.filter(videoData, function (item, iteration, list) {
  if (item.present) {
    return item;
  }
  return false;
});

// console.log(suspectsPresent)

// *********************************************Project / Projecting *************************************************
const suspectsProject = _.filter(
  videoData,
  function (suspect, iteration, list) {
    if (suspect.present) {
      return suspect.name;
    }
  }
);

// console.log(suspectsProject);

// ********************************************* Spread *************************************************
let createTuple = (a, b, c, d) => {
  return [
    [a, c],
    [b, d],
  ];
};
// console.log( createTuple ('It', 'be', 'could', 'anyone', 'no one'));

createTuple = (a, b, c, ...d) => {
  return [
    [a, c],
    [b, ...d],
  ];
};
// console.log( createTuple ('It', 'be', 'could', 'anyone', 'no one'));

// ********************************************* Arguments keyword *************************************************
createTuple = function () {
  console.log(arguments);
};

// createTuple ('It', 'be', 'could', 'anyone', 'no one')

// ********************************************* Default Value *************************************************
const createDeaultValue = function (a, b = 2) {
  console.log(arguments);
  console.log(a, b);
};
// createDeaultValue(12)

// ********************************************* Exercise *************************************************
// How to set default parameter without es6
let defaultParaOld = function (a, b) {
  if (typeof b == "undefined") {
    b = 2;
  }

  return [a, b];
};

// console.log( defaultParaOld(12) )

defaultParaOld = function (a, b) {
  b = b || 2;
  return [a, b];
};

// console.log( defaultParaOld(12) )

// ********************************************* Array like Object *************************************************
function arrayLikeObject() {
  const params = Array.prototype.slice.call(arguments);
  params.push("the billiards room?");
  return params.join(" ");
}
// console.log( arrayLikeObject ('was', 'it' ,'like') );

function aloToarr(alo) {
  const arr = _.map(alo, function (item, iteration, list) {
    return item;
  });

  return arr;
}

function arrayLikeObject() {
  console.log(aloToarr(arguments));
}

// arrayLikeObject('was', 'it' ,'like');

// ********************************************* CallBacks *************************************************
const ifElse = (condition, isTrue, isFalse) => {
  return condition ? isTrue() : isFalse();
};

// ifElse(true,
//     () => console.log(true),
//     () => console.log(false),
//     );

const increment = (n) => n + 1;
const square = (n) => n * n;
const doMathSoIDontHaveTo = (n, func) => func(n);

doMathSoIDontHaveTo(5, increment);
doMathSoIDontHaveTo(5, square);

// ********************************************* reduce *************************************************
const sumCollection = [1, 2, 3, 4, 5, 5];
const sum = sumCollection.reduce((sum, n, initial) => {
  return n + sum;
}, 0);

_.reduce = function (list, cb, initial) {
  var holder = initial;

  for (var i = 0; i < list.length; i++) {
    if (i === 0 && holder === undefined) {
      holder = list[0];
    } else {
      holder = cb(list[i], holder);
    }
  }

  return holder;
};

_.reduce(
  [2, 3, 5],
  function (val, sum) {
    return val + sum;
  },
  0
);

// 1) Turn an array of numbers into a total of all the numbers
var numsArr = [2, 4, 5, 2, 6, 7];
var sumOfNums = numsArr.reduce((accumulator, currentVal) => {
  return accumulator + currentVal;
}, 0);

// 2) Turn an array of numbers into a long string of all those numbers.
var numsArr = [2, 4, 5, 2, 6, 7];

var stringOfNums = numsArr.reduce((accumulator, currentVal) => {
  return (accumulator += currentVal);
}, "");

// 3) Turn an array of voter objects into a count of how many people voted
var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

var votersCount = voters.reduce((accumulator, currentVal) => {
  if (currentVal.voted) {
    return ++accumulator;
  } else {
    return accumulator;
  }
}, 0);

//  4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
var wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

var wishlistCost = wishlist.reduce((accumulator, currentVal) => {
  return accumulator + currentVal.price;
}, 0);

// 5) Given an array of arrays, flatten them into a single array
var arrays = [["1", "2", "3"], [true], [4, 5, 6]];

var flattenArray = arrays.reduce((accumulator, currentVal) => {
  return (accumulator = [...accumulator, ...currentVal]);
}, []);

// 6) Given an array of potential voters, return an object representing the results of the vote
var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

var votersAgeGroup = voters.reduce((accumulator, currentVal) => {
  var votersTempHolder = {
    numYoungVotes: accumulator.numYoungVotes || 0,
    numYoungPeople: accumulator.numYoungPeople || 0,
    numMidVotesPeople: accumulator.numMidVotesPeople || 0,
    numMidsPeople: accumulator.numMidsPeople || 0,
    numOldVotesPeople: accumulator.numOldVotesPeople || 0,
    numOldsPeople: accumulator.numOldsPeople || 0,
  };

  // age range of 18-25
  if (currentVal.age >= 18 && currentVal.age <= 25) {
    votersTempHolder.numYoungPeople++;
    currentVal.voted && votersTempHolder.numYoungVotes++;
  }
  // age range of 26-35
  else if (currentVal.age >= 26 && currentVal.age <= 35) {
    currentVal.voted && votersTempHolder.numMidVotesPeople++;
    votersTempHolder.numMidsPeople++;
  }
  // age range of 36-55
  else if (currentVal.age >= 36 && currentVal.age <= 55) {
    currentVal.voted && votersTempHolder.numOldsPeople++;
    votersTempHolder.numOldVotesPeople++;
  }

  return (accumulator = votersTempHolder);
}, {});
// console.log(votersAgeGroup)

// Write a function that takes a string and returns an object representing the character
// count for each letter. Use .reduce to build this object.
// ex. countLetters('abbcccddddeeeee') // => {a:1, b:2, c:3, d:4, e:5}
var countLetters = function (string) {
  const characters = string.split("");
  const charCount = characters.reduce((accumulator, currentVal) => {
    let accumulatedVals = { ...accumulator };

    accumulatedVals[currentVal] == undefined &&
      (accumulatedVals[currentVal] = 0);

    ++accumulatedVals[currentVal];

    return accumulatedVals;
  }, {});

  return charCount;
};
countLetters("abbcccddddeeeee");

// Write a function that takes a string and a target, and returns true or false if the target is present in the string. Use
// .reduce to acomplish this.
// ex. isPresent('abcd', 'b') // => true
// ex. isPresent('efghi', 'a') // => false
var isPresent = function (string, target) {
  // convert string into array
  var stringArr = string.split("");
  var stringPresent = stringArr.reduce(
    (accumulator, currentVal, iteration, array) => {
      var isPresentInStringSet = accumulator;
      if (currentVal == target) {
        isPresentInStringSet = true;
      }

      return isPresentInStringSet;
    },
    false
  );

  return stringPresent;
};

isPresent("abcd", "a");

// Creating closure
const myLogger = () => {
    const logMsg = 'log something i dont care ';
    let count = 0;
    const logger = () => {
        console.log(logMsg + (++count));
    }

    return logger;
}

const fnAlert = myLogger();
const fnAlert2 = myLogger();
console.log(fnAlert)
fnAlert();
fnAlert();
fnAlert();
fnAlert2();


// Bianca Exercise
// Find a place where no one was in.
const newDevelopment = [
  {
    name: "Miss Scarlet",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: true },
      { "dining room": true },
      { "billiard room": false },
      { library: true },
    ],
  },
  {
    name: "Reverend Green",
    present: true,
    rooms: [
      { kitchen: true },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": true },
      { library: false },
    ],
  },
  {
    name: "Colonel Mustard",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: true },
      { "dining room": false },
      { "billiard room": true },
      { library: false },
    ],
  },
  {
    name: "Professor Plum",
    present: true,
    rooms: [
      { kitchen: true },
      { ballroom: false },
      { conservatory: false },
      { "dining room": true },
      { "billiard room": false },
      { library: false },
    ],
  },
];

// loop through the suspects list
newDevelopment.reduce(( accumulator, suspect) => {
    // console.log(suspect)

    suspect.rooms.reduce((roomAccumulator, room) => {
        var roomHolder = roomAccumulator;
        var roomKey = Object.keys(room)[0];

        room[roomKey];
        
        return room;
    }, [])


    return accumulator;
}, [])
    // loop through rooms array 


