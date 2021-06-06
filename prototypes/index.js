const { kitties } = require('./datasets/kitties'); // done
const { clubs } = require('./datasets/clubs');
const { mods } = require('./datasets/mods');  // done
const { cakes } = require('./datasets/cakes');  // done
const { classrooms } = require('./datasets/classrooms');  // done
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');  // done
const { books } = require('./datasets/books');  // done
const { weather } = require('./datasets/weather');  // done
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');






// SINGLE DATASETS
// =================================================================



// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {

    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']

    // Input: an array of objects with 3 properties
    // Output: array with strings as elements

    // Find the kitties that are orange
    // filter to return everything that meets condition
    // condition:   color: orange
    // Map...return only the names


    const result = kitties.filter(kitty => kitty.color === 'orange').map(kitty => kitty.name)
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  sortByAge() {
    // Sort the kitties by their age

    const result = kitties.sort((a, b) => b.age - a.age);
    return result;

    // Annotation:
    // input: array of objects
    // output: array of objects

    // sort by:
    // age key, ascending order

  },

  growUp() {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    const result = this.sortByAge().map(kitty => ({
      ...kitty, age: kitty.age + 2
    }));
    return result;
  }

  // input: array of objects
  // output: array of objects

  // We want to mutate ALL age properties in array
  // Objects in array are sorted by age property
  // Sort first...call sortByAge()
  // Use .map() to increment age property by 2
  // .map() only return numbers in an array
  // Needed whole object so had to build object out again

};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    const result = mods.map(inning => ({
      mod: inning.mod, studentsPerInstructor: (inning.students / inning.instructors)
    }));
    return result;

    // Annotation:
    // Input: array of Objects
    // Output: array of objects

    // New array will have two keys
    // mod with value of number
    // studentsPerInstructor with value of number
    // this key equal (inning.students / inning.instructors)

  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    const result = cakes.map(cake => ({
      flavor: cake.cakeFlavor, inStock: cake.inStock
    }));
    return result;

    // Annotation:
    // Input: an array of objects
    // Output: an array of objects

    // Output in each object: flavor & inStock
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    const result = cakes.filter(cake => cake.inStock);
    return result;
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    const result = cakes.reduce((acc, curr) => {
      acc += curr.inStock;
      return acc;
    }, 0);
    return result;

  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    // ***Works with filter***

    // const result = cakes.map(cake => cake.toppings).flat().filter((topping, i, array) => array.indexOf(topping) === i);

    // ***This works with the Set object***

    // const result1 = cakes.map(cake => cake.toppings).flat()
    // const result = [...new Set(result1)]


    // ***works w/ reduce and ternary***

    const result = cakes.map(cake => cake.toppings).flat().reduce((acc, curr) => {
      // !acc.includes(curr) ? acc.push(curr): null;
      !acc.includes(curr) && acc.push(curr);
      return acc;
    }, []);

    // ***Andrew's solution***:

    // const result = cakes.reduce((acc, curr) => {
    //   curr.toppings.forEach(topping => {
    //     if (!acc.includes(topping)) {
    //       acc.push(topping);
    //     }
    //   })
    //   return acc;
    // }, []);

    return result;

    // Annotation:
    // Write your annotation here as a comment
    // Store all toppings in an array
    // Map???
    // Then iterate over that array and push unique values to an array
    // Evaluate on each iteration if that element is already included
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }

    const result = cakes.reduce((acc, curr) => {
      curr.toppings.forEach(topping => {
        acc[topping] ? acc[topping] += 1 : acc[topping] = 1;
      })
      return acc;
    }, {})
    return result;

    // Annotation:
    // Input: Array of Objects
    // output: object
    // This means I need to use reduce
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    const result = classrooms.filter(room => room.program === 'FE');
    return result;

    // Annotation:
    // Input: An array of Objects
    // Output: An array of objects
    // Need to just grab the objects that have 'FE' as value for program property
    // Filter will evaluate a condition and return the whole object
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    const result = classrooms.reduce((acc, curr) => {
      if (curr.program === 'FE') {
        acc.feCapacity ? acc.feCapacity += curr.capacity : acc.feCapacity = curr.capacity;
      } else {
        acc.beCapacity ? acc.beCapacity += curr.capacity : acc.beCapacity = curr.capacity;
      }
      return acc;
    }, {});
    return result;

    // Annotation:
    // Input: Array of objects
    // Output: Object
    // This means I need to use reduce
    // keys are something that I Create
    // Values are sum of all capacity values for each program
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const result = classrooms.sort((a, b) => a.capacity - b.capacity);
    return result;

    // Annotation:
    // Input: Array of Objects
    // Output: Array of objects
    // Objects sorted by capacity, ascending order
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence() {
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']


    const result = books.filter(book => book.genre !== "Horror" && book.genre !== "True Crime").map(book => book.title);
    return result;

    // Annotation:
    // Input: Array of Objects
    // Output: Array of strings
    // book titles NOT horror or true crime

  },
  getNewBooks() {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    const result = books.filter(book => book.published > 1989).map(book => ({
      title: book.title, year: book.published
    }));
    return result;

    // Annotation:
    // Input: Array of Objects
    // Output: Array of objects
    // ALL books published in 90's and 00's
    // condition will be book.published > 1989
  }

};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

    // Can I not use .map() here??? I couldn't get it to work.
    const result = weather.reduce((acc, curr) => {
      acc.push((curr.temperature.high + curr.temperature.low) / 2);
      return acc;
    }, []);
    return result;

    // Annotation:
    // Input: Array of objects, objects contain 4 prop...one is an object
    // Output: Array of numbers
    // Need to access the object in the object
    // get average of the high and low
    // high + low / 2
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

    const result = weather.filter(condition => condition.type === 'sunny' || condition.type === 'mostly sunny').map(place => `${place.location} is ${place.type}.`);


    // Works with reduce too
    // const result1 = weather.reduce((acc, curr) => {
    //   if (curr.type === 'sunny' || curr.type === 'mostly sunny') {
    //     acc.push(`${curr.location} is ${curr.type}.`)
    //   }
    //   return acc;
    // }, []);

    // Annotation:
    // Input: Array of objects...object inside of object
    // Output: Array of strings
    // locations that are sunny and mostly sunny
    // Interpolate or concatenate to make a sentence
  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }


    // This works with reduce:
    // const result = weather.reduce((acc, curr) => {
    //   return (acc.humidity > curr.humidity) ? acc : curr;
    // }, {});
    // // console.log(result);
    // return result;

    const sortedWeather = weather.sort((a, b) => b.humidity - a.humidity);
    const result = sortedWeather[0];
    return result;

    // Annotation:
    // Input: Array of objects...object inside of each object
    // Output: Return one object
    // Only one object...find()

  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}
    // const parksVisited = nationalParks.filter(park => park.visited).map(park => park.name);
    // const parksNotVisited = nationalParks.filter(park => !park.visited).map(park => park.name);

    const result = nationalParks.reduce((accObject, current) => {
      if (current.visited) {
        if (!accObject.parksVisited) {
          accObject.parksVisited = [current.name];
        } else {
          accObject.parksVisited.push(current.name)
        }
      } else {
        if (!accObject.parksToVisit) {
          accObject.parksToVisit = [current.name];
        } else {
          accObject.parksToVisit.push(current.name)
        }
      }
      return accObject;
    }, {});
    return result;

    // Annotation:
    // Iput: Array of objects
    // one of the objects properties is an array of strings
    // Output: object with two properties that hold strings

  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]


    const result = nationalParks.map(park => ({
      [park.location]: park.name
    }));
    return result;


    // const result = mods.map(inning => ({
    //   mod: inning.mod, studentsPerInstructor: (inning.students / inning.instructors)
    // }));
    // return result;

    // Annotation:
    // Input: array of Objects
    // four properties...one property is an array of strings
    // Output: array of objects
    // make the key the location value of each object
    // make the value the name value of each object

    // access nationalParks array
    // iterate over each object
    // restructure object with new key value pair
    // map???
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    const result = nationalParks.map(park => park.activities).flat().filter((activity, i, array) => array.indexOf(activity) === i);
    return result;

    // ***This works with the Set object***

    // const result1 = nationalParks.map(park => park.activities).flat()
    // return result = [...new Set(result1)]



    // Annotation:
    // Input: array of Objects
    // four properties...one property is an array of strings
    // Output: array of strings...no duplicates
    // access the property activities
    // an array of strings
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    const result = breweries.reduce((acc, brewery) => {
      acc += brewery.beers.length;
      return acc;
    }, 0);
    return result;

    // Annotation:
    // Input: Array of objects
    // Three key value pairs in each Object
    // One property holds an array of objects
    // Output: number

    // Return total beer count all beers for each object
    // Access beers key on each object in array
    // beers holds an array of beer info
    // get array length for each objects beer property
    // return sum
    // REDUCE???
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    const result = breweries.map(brewery => ({
      name: brewery.name, beerCount: brewery.beers.length
    }));
    return result;

    // Annotation:
    // Input: array of objects
    // Output: array of objects
    // each object in array will have two properties
    // name & beerCount
    // beerCount will be beers.length
    // MAP???
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    // Sort every list of beers so that index 0 holds the beer with the highest abv
    // Can I do this with forEach and then push to another array?
    const sortedBreweries = []

    breweries.forEach(brewery => {
      brewery.beers.sort((a, b) => b.abv - a.abv);
      sortedBreweries.push(brewery);
    })

    const result1 = sortedBreweries.sort((a, b) => b.beers[0].abv - a.beers[0].abv);
    console.log(result1);
    const result2 = result1[0].beers[0];
    return result2;


    // Annotation:
    // Input: Array of objects
    // Output: object
    // Find beer that has the highest abv of all beers
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    const result = instructors.reduce((acc, curr) => {
      let matches;
      cohorts.forEach(cohort => {
        if (cohort.module === curr.module) {
          matches = { name: curr.name, studentCount: cohort.studentCount };
        }
      });
      acc.push(matches);
      return acc;
    }, []);
    return result;


    // object.key and object.value methods

    // Annotation:
    // Input: two arrays of Objects
    // Output: an array of objects
    // two properties
    // name: instructors name, studentCount
    // access 1st key in instructos array
    // access 3rd key in cohorts array
    // iterate over each of these arrays and make an object
    // The thing they have in common is module
    // match module up
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    const result = cohorts.reduce((acc, curr) => {
      let mod1;
      let mod2;
      let mod3;
      let mod4;
      instructors.forEach(instructor => {
        if (instructor.module === 1) {
          mod1++;
        } else if (instructor.module === 2) {
          mod2++;
        } else if (instructor.module === 3) {
          mod3++;
        } else {
          mod4++;
        }
      })
      console.log(mod1, mod2, mod3, mod4);
      if (curr.module === 1) {
        acc[`cohort${curr.cohort}`] = curr.studentCount / mod1;
      } else if (curr.module === 2) {
        acc[`cohort${curr.cohort}`] = curr.studentCount / mod2;
      } else if (curr.module === 3) {
        acc[`cohort${curr.cohort}`] = curr.studentCount / mod3;
      } else {
        acc[`cohort${curr.cohort}`] = curr.studentCount / mod4;
      }
      return acc;
    }, {})

    return result;


    // Another solution

    // const result = cohorts.reduce((obj, cohort) => {
    //   let teacherTotal = instructors.reduce((sum, instructor) => {
    //     if(instructor.module === cohort.module){
    //       sum += 1
    //     }
    //     return sum
    //   }, 0)
    //   obj[`cohort${cohort.cohort}`] = cohort.studentCount / teacherTotal
    //   return obj
    // },{});
    // return result;

    // Annotation:
    // input: two arrays of objects
    // output: object
    // students / teachers in each module
    // access teacher count by matching module #s in instructors array
    // rebuild a new object that tallies the amount of teachers per module:
    // I also want to add the module number in this object, since this is
    // what will be used to compare the objects in each array
    // access studentCount in cohorts array
    // key is the value of cohort in cohorts array
    // Compare modules to pair up the correct teachers with students
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    // const result = instructors.reduce((object, instructor) => {
    //   let instructorMods = instructor.teaches.reduce((array, skill) => {
    //     cohorts.forEach(cohort => {
    //       // console.log('COHORT', cohort);
    //       if (cohort.curriculum.includes(skill) && !array.includes(cohort.module)) {
    //         array.push(cohort.module);
    //       }
    //     })
    //     return array;
    //   }, [])
    //   object[instructor.name] = instructorMods;
    //   return object;
    // }, {});
    // return result;

    const result = instructors.reduce((object, instructor) => {
      let instructorMods = cohorts.reduce((array, cohort) => {
        instructor.teaches.forEach(skill => {
          if (cohort.curriculum.includes(skill) && !array.includes(cohort.module)) {
            array.push(cohort.module);
          }
        })
        return array;
      }, [])
      object[instructor.name] = instructorMods;
      return object;
    }, {});
    return result;

    // Annotation:
    // Input: two arrays of objects
    // Output: an object
    // Properties all hold arrays
    // Teacher names are the property names
    // property values are the mods they can teach
    // Match instructor skills with curriculum

    // Iterate over Instructors
    // Inside of reduce, iterate over instructors.teaches array
    // inside of this, iterate over cohorts and use .includes
    // if cohorts[i].curriculum.includes(skill)
    //
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    const result = cohorts.reduce((object, cohort) => {
      cohort.curriculum.forEach(tech => {
        object[tech] = [];
        instructors.forEach(instructor => {
          if (instructor.teaches.includes(tech)) {
            object[tech].push(instructor.name);
          }
        })
      })
      return object;
    }, {});
    // console.log(Object.keys(result).map(key => {
    //   result[key].push('THISSSSSSS')
    // }));
    return result;


    // Annotation:
    // Input: two arrays of objects
    // Output: an object
    // each key will be a curriculum topic ...from cohorts.curriculum
    // each value will be an array of instructor names who teach that topic
    // Iterate over cohorts with reduce...acc initial value is object
    // Iterate over intructors with reduce...acc initial value is array
    // forEach, iterate over instructors.teaches
    // check if each skill is included in cohort.curriculum
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]


    const result = Object.values(bosses).reduce((acc, boss) => {
      // declare an object...
      let bossDetails = { bossName: boss.name, sidekickLoyalty: 0 }
      sidekicks.forEach(sidekick => {
        if (sidekick.boss === boss.name) {
          bossDetails.sidekickLoyalty += sidekick.loyaltyToBoss;
        }
      })
      acc.push(bossDetails);
      return acc;
    }, [])

    // const result = Object.values(bosses).map(boss => ({
    //   bossName: boss.name, sidekickLoyalty: 0
    // }))
    //
    // const sideKickResult = result.forEach(boss => {
    //   sidekicks.forEach(sideKick => {
    //     // let totalLoyalty;
    //     if (sideKick.boss === boss.bossName) {
    //       // console.log("HI");
    //       // totalLoyalty += sideKick.loyaltyToBoss;
    //       boss.sidekickLoyalty+= sideKick.loyaltyToBoss;
    //     }
    //   })
    // })


    return result;

    // Annotation:
    // Input: object and an array
    // Output: an array
    // objects
    // sum loyalty of all their sidekicks
    // property with be boss name
    // total all loyalty values to that boss

    // Iterate over bosses object
    // get boss name
    // Iterate over sideKicks array
    // match each sideKicks element with boss value to boss name
    // if they are equal then add loyaltyToBoss value to counter
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]

    const result = Object.values(constellations).reduce((acc, constellation) => {
      stars.forEach(star => constellation.stars.includes(star.name) && acc.push(star))
      return acc;
    }, []);
    return result;

    // Annotation:
    // Input: object and array
    // Output: array
    // objects

  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    const result = stars.reduce((acc, star) => {
      if (acc[star.color]) {
        acc[star.color].push(star)
      } else {
        acc[star.color] = [star];
      }
      return acc;
    }, {});
    return result;

    // Annotation:
    // Input: object and array
    // Output: object
    // keys are colors of stars
    // star.color
    // values are arrays of the star objects that match (color)
    // iterate over stars array
    // use reduce to set up new key values from the color property
    // 1st: set up what you want your key to look like
    // 2nd: figure out how you're pushing to that array
    // assign an array to an object and push to it.

  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.

    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]


    const result = stars.map(star => star.constellation);
    return result;

    // Annotation:
    // Input: an object and an array
    // Output:  an array of strings
    // strings are names of constellations (this is the object)
    // that the brightest stars are part of

  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    const result = characters.reduce((sum, character) => {
      character.weapons.forEach(weapon => {
        sum += weapons[weapon].damage;
      })
      return sum;
    }, 0);
    return result;

    // Annotation:
    // Input: array of objects and an object
    // Output: number
    // sum of damage for all weapons that characters CAN use

    // Iterate over array of objects
    // iterate over each characters array of weapons
    // for each weapon name
    // check that weapons damage value and add it to sum
    // Can I use dynamic object name to get object.values???

    // Use reduce to sum
    // Reduce makes sense because of the accumulator


  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    // const result = characters.reduce((array, character) => {
    //   let damageSum;
    //   let rangeSum;
    //   character.weapons.forEach(weapon => {
    //     damageSum += weapons[weapon].damage;
    //     rangeSum += weapons[weapon].range;
    //   })
    //   array.push({[character.name]: { damage: damageSum, range: rangeSum }})
    //   return array;
    // }, []);
    // return result;


    const result = characters.reduce((array, character) => {
      let characterDetails = { damage: 0, range: 0 }
      character.weapons.forEach(weapon => {
        characterDetails.damage += weapons[weapon].damage;
        characterDetails.range += weapons[weapon].range;
      })
      array.push({ [character.name]: characterDetails })
      return array;
    }, []);
    return result;

    // Annotation:
    // Input: an array and an object
    // Output: an array of objects

    // return an array with objects that have a property of each character
    // each property has a value of an object with two properties
    // damage and range
    // each of these properties will have a sum total of damage and range
    // gathered from weapons object

    // Iterate over characters array
    // Iterate over each weapon in the weapons array of each character
    // match that weapon up to the weapons object to get damage and range values
    // return an object with name of character and these sums
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }
    const result = movies.reduce((object, movie) => {
      let counter = 0;
      movie.dinos.forEach(dino => {
        if (dinosaurs[dino].isAwesome) {
          counter++;
        }
      })
      object[movie.title] = counter;
      return object;
    }, {})
    return result;

    // Annotation:
    // Input: two objects and one array
    // Output: object
    // each key is movie title
    // value is a number
    // This number is how many dinosaurs are in each movie
    // Iterate over movies array
    // use movie.title as key
    // and movie.dinos.length as property value
    // only use the dinos that are awesome
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    const result = movies.reduce((object, movie) => {

      let totalAge = 0;

      movie.cast.forEach(castMember => {
        totalAge += movie.yearReleased - humans[castMember].yearBorn;
      })

      let averageAge = Math.floor(totalAge/movie.cast.length)
      console.log(averageAge);

      if (object[movie.director]) {
          object[movie.director][movie.title] = averageAge;
      } else {
        object[movie.director] = {[movie.title]: averageAge}
      }

      return object;

    }, {});
    return result;

    // Annotation:

    // Input: Two objects and an array
    // Output: an object
    // the object holds other objects that have properties that are the director's name
    // value is an object that has a property
    // keys are movie titles (directed by this director)
    // values are average age of actors on movies release year

      // Iterate over movies array
      // Use reduce because output is an object
      // Need to make movie.director the key
      // Find each movie this director directed and make these properties of object
        // for each movie use logic to see if key already exists for that director
        // if it does then add a property to that key's object

      // Iterate over movie.cast
        // for each castMember, check in the humans object and match them up
        // Subtract: movie.yearReleased - humans[castMember].yearBorn
        // Add this to a totalAge variable
        // Divide this totatAge variable by movie.cast.length
      // for each value of the movie title key
      //

  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been
    cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating.
    The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    const allCastMembers = Object.keys(humans);
    const castedActors = movies.map(movie => movie.cast).flat();
    let unSorted = [];

    allCastMembers.forEach(castMember => {
        if (!castedActors.includes(castMember)) {
          unSorted.push({name: castMember, nationality: humans[castMember].nationality, imdbStarMeterRating: humans[castMember].imdbStarMeterRating});
        }
    })

    let sorted = unSorted.sort((a, b) => {
      if (a.nationality < b.nationality) {
          return -1;
      }
      if (b.nationality < a.nationality) {
          return 1;
      }
      return 0;
    })

    console.log(sorted);

    return sorted;

    // Annotation:
    // Input: two objects and an array
    // Output: an array
      // objects...keys are uncast actor
    // iterate over humans array
    // iterate over human.castMember
    // I need all the cast members in humans objects
      // object.keys gives an array of humans names
      // check if object.keys includes each human.castMember
      // if castMember is not included then use that name to access that humans key
      // and push that humans object to an array

    // Then sort by nationality, alphabetically
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts
};
