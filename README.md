## Git Workflow

**Fork the Repository**

1. Click the "Fork" button near the top right part of the screen.
2. In the popup box, select your Github profile to copy the repository from the TelegraphPrep Github profile to your profile.

**Clone the Repository**

3. Once the repository is on your Github profile, navigate to your fork of that repository on Github's website.  
4. Click the "Copy to clipboard" button to copy the Git link for the repository.  
5. In your terminal, navigate to the folder you want to copy the repository into.  
6. In your terminal, type git clone [pasteTheLinkYouJustCopiedHere] then hit enter to clone the repository from Github to your local machine.  

**Open the Repository on Your Local Machine**

In your terminal, navigate to the repository.
View the location of that repository in your finder by typing open . into the terminal.  
To open the repository in Sublime, drag the repository folder over the Sublime icon in your Dock (at the bottom of the screen). All of the files within the repository should now be viewable in the sidebar in Sublime.

**More information on [Git Workflow](https://github.com/TelegraphPrep/PrepPlus-Wiki/blob/master/gitWorkflow.md)

## Pair Programming Dynamics
See the following document on [Pairing Dynamics Workflow](https://github.com/TelegraphPrep/PrepPlus-Wiki)

## About the Sprint


## Important Information:

This sprint is based on a part of a previous challenge you were faced with in week 3 - CarFax.com. You will be working with a database filled with cars and building out functionality allowing future users to search through your database with ease. 

A couple of things you should note:

### toolbelt:

Your `toolbelt` is an object that contains a the `loop` and `transform` functions you'll be using to solve each prompt. In engineering terms we have set the `loop` and `transform` functions on our `toolbelt` as ***methods***.  

These methods can be called in your `carfax.js` file like so:  

		`toolbelt.loop`  
		`toolbelt.transform`  

You will not be able to call the functions without that syntax, so be aware as you go along not to forget that. 

You will also be tasked to add things to your tool belt; what we mean by this is that we want you to create a function and store them inside of your `toolbelt` object.  

You can do that like so:  

```javascript

	toolbelt.printValue = function(someValue){
		console.log(someValue);  
	};

```

You do not need the usual `var` statement since we're setting our functions as `methods` on our `toolbelt` which is already ***instantiated***.   

It also means you can invoke `toolbelt.printValue` anywhere in your code since `printValue` is being stored in an object that has already been created.  

```javascript

// invoking printValue above its declaration:  

toolbelt.printValue('this is being called');
// this is being called



toolbelt.printValue = function(someValue){
	console.log(someValue);
};


```

### database

The `database.js` file is creating and storing all of our car data. We have already made the important parts available to you in `carfax.js` -- they are named `carData` and `database` respectively. 

`database` is an object that holds the state of all of your data.
`carData` is an array that contains each car in your database.

Periodically you will be saving information in your `database` object by setting up a key value pair, like so:

```javascript

// saving a collection of car buyers to our database:
database.carBuyers = ['Albrey', 'Jon', 'Kmack', 'Alex']


```


Do not tinker with any of the code inside of `database.js` as you may break your only access to the car database. 


### Car Object Property Key:

Each `car` has 6 properties:

`color`: blue, red, black, white, silver, and champagne.  
`id`: starts at 100 and goes increments up from there.  
`make`: make of the car depends on the model.   
`model`: Toyota, Ford, BMW, Nissan.  
`price`: ranges between 20,000 and 50,000.  
`year`: ranges between 1991 to 2016.  




## CarFax.com Sprint:


## Getting Started

### Test `toolbelt.loop` & `toolbelt.transform`
	
	Let's make sure our tools are working correctly. 

	* [ ] Have your `toolbelt.loop` log each value in a test array to the console.

	* [ ] Have your `toolbelt.transform` multiply each number in a testArray by 5.
	

## Back-End Data Parsers:

### priceParser

The first thing our engineering manager would like us to do is some internal data collection. 

Our customers always ask about the price of our cars so we'd like to have access to a collection containing the prices in our inventory separate from the `carData` collection that already exists.


Let's first build out our function, `priceParser`, that will traverse the `carData` and return a new `list` containing the price of each car. 

* [ ] Create a model that illustrates what our target `list` data looks like.
* [ ] Create a model that illustrates the expected inputs and outputs of our `priceParser`.
* [ ] Pseudocode the step-by-step directions you'll have to take to turn your inputs into the expected output.
* [ ] Identify the `tools` in your `toolbelt` that best fit what you need to solve for the solution. 
* [ ] Build `priceParser` using one or more `tools` in your `toolbelt`.
* [ ] Use `priceParser` on our `carData` collection and save our new price collection as a value in our `database` object at the key `currentPrices`.


### yearParser

Our manager is SO impressed with our `priceParser` that they would like us to fix a similar piece of internal functionality - `yearParser`. 

Our customers also frequently inquire about the age of our inventory, so let's figure out how to calculate that.

Let's first build out our function, `yearParser`, that will traverse the `carData` and return a new `list` containing the year of each car. 

* [ ] Create a model that illustrates what our target `list` data looks like.
* [ ] Create a model that illustrates the expected inputs and outputs of our `yearParser`.
* [ ] Pseudocode the step-by-step directions you'll have to take to turn your inputs into the expected output.
* [ ] Identify the `tools` in your `toolbelt` that best fit what you need to solve for the solution. 
* [ ] Build `yearParser` using one or more `tools` in your `toolbelt`.
* [ ] Use `yearParser` on our `carData` collection and save our new price collection as a value in our `database` object at the key `currentYears`.


### averageAgeCalculator

Now that we have a list of all of the years, we can use the info to get an average ***age*** of our inventory.

Let's build `averageYearCalculator` which traverses through a `list` and returns the average ***age*** of our inventory. 

* [ ] Create a model that illustrates what our target `list` data
* [ ] Create a model that illustrates the expected inputs and outputs of our `yearParser`.
* [ ] Pseudocode the step-by-step directions you'll have to take to turn your inputs into the expected output.
* [ ] Identify the `tools` in your `toolbelt` that best fit what you need to solve for the solution.
* [ ] Build `averageAgeCalculator` using one or more `tools` in your `toolbelt`.
* [ ] Use `averageAgeCalculator` on our list of `currentyears` and save our average year to our `database` at the key `currentAverageAge`.

## Front End Filters:

Wow, you fixed our issues fast! Our engineering manager is very excited to have you on the team. We want to upgrade you from data collection to external functionality.

### filterByColor 

Currently, our site doesn't allow our users to filter cars easily. You've been tasked with building out our first filter: `filterByColor`.

`filterByColor` takes a list of cars, and an `inputColor` and returns a new list containing each car whose color matches the `inputColor`.

* [ ] Create a model that illustrates what our target `list` data
* [ ] Create a model that illustrates the expected inputs and outputs of our `filterByColor`.
* [ ] Pseudocode the step-by-step directions you'll have to take to turn your inputs into the expected output.
* [ ] Identify the `tools` in your `toolbelt` that best fit what you need to solve for the solution.
* [ ] Build `filterByColor` using one or more `tools` in your `toolbelt`.
* [ ] Use `filterByColor` on our list of `carData` and save our new list of cars to our database.


### Year Filters

 * [ ] Build `filterAboveYear` which is very similar to `filterByColor`. It will take two parameters, a list of cars and a year, and return a new list containing each car above that year.


 * [ ] Build `filterBelowYear` which is also very similar to `filterByColor`. It will take two parameters, a list of cars and a year, and return a new list containing each car below that year.



### filterBy:


As you can see, our filter functionality is very, very similar to each other. Being the intelligent, amazing, engineers, we know that if we recognize a pattern in our code we should build a `tool` that takes care of it for us.

Our tool is `filterBy`, which takes a list and a ***predicate*** (more on this in a minute) and returns a new list containing each element that passes the ***predicates*** test.


***predicates** are just callback functions that check an element for a condition and return true or false. That's it. No really, that's it.

Example with named function:

```javascript

// testing if a number is true or false
var isEvenPredicate = function(val){
	return val % 2 === 0;
};



var numbers = [1, 2, 3, 4, 5];
								// passed into filterBy
var onlyEvens = filterBy(numbers, isEvenPredicate);

console.log(onlyEvens)
// [2, 4]

```


Example with anonymous function passed in:

```javascript


var numbers = [1, 2, 3, 4, 5];
								// passed into filterBy
var onlyEvens = filterBy(numbers, function(number){
	return number % 2 === 0;
});

console.log(onlyEvens)
// [2, 4]


```

Take a look at your individual filtering functions and figure out the pattern. Use it to build a `filterBy` function that can replace all (or most) of the functionality in each of your filtering functions.


* [ ] Build `filterBy` and add it to our `toolbelt` object.
* [ ] Use `filterBy` to check whether each value in a `testList` is odd.
* [ ] Identify the `tools` in your `toolbelt` that best fit what you need to solve for the solutions and use them to build your functions. 


### Year Filters (continued)

* [ ] refactor `filterAboveYear` to use `filterBy` instead of whichever tool you're using now.
* [ ] refactor `filterBelowYear` to use `filterBy` instead of whichever tool you're using now
* [ ] Use `filterBy` to build `filterBetweenYears`. Much like your previous filters, `filterBetweenYears` takes a collection of cars and `startYear` and `endYear`.  It then returns a new list of car objects whose years fall between the `statYear` and `endYear`.

## Pricing Data

A recent survey suggested that our users would appreciate better access to our pricing data. Our product team isn't too thrilled about this since our prices are a typically higher than competitors but our engineering manager has decided to build it anyway. Let's build out some internal functions that will allow us to know:

1. The average price of a car in our inventory.
2. The most expensive car in our inventory.
3. The least expensive car in our inventory.

### averagePriceCalculator

Now that we have a list of all of the prices, we can use the info to get an average price of our inventory.

Let's build `averagePriceCalculator` which traverses through a `list` of prices and returns the average price of all of our inventory.

* [ ] Create a model that illustrates what our target `list` data
* [ ] Create a model that illustrates the expected inputs and outputs of our `averagePriceCalculator`.
* [ ] Pseudocode the step-by-step directions you'll have to take to turn your inputs into the expected output.
* [ ] Identify the `tools` in your `toolbelt` that best fit what you need to solve for the solution.
* [ ] Build `averagePriceCalculator` using one or more `tools` in your `toolbelt`.
* [ ] Use `averagePriceCalculator` on our list of `currentPrices` and save our average price to our `database` at the key `currentAveragePrice`.


### mostExpensiveCar

`mostExpensiveCar` will traverse through a list of cars and return the car object that is most expensive. 

* [ ] Identify the `tools` in your `toolbelt` that best fit what you need to solve for the solution and use them to build your function. 
* [ ] Use `mostExpensiveCar` on our `carData` list and save the object in our `database` at the key `mostExpensiveCar`.

### leastExpensiveCar

`leastExpensiveCar` will traverse through a list of cars and return the car object that is least expensive. 

* [ ] Identify the `tools` in your `toolbelt` that best fit what you need to solve for the solution and use them to build your function. 

* [ ] Use `leastExpensiveCar` on our `carData` list and save the object in our `database` at the key `leastExpensiveCar`.


### distill detour

As you have probably noticed, each of the 3 functions we just built take very similar steps to get an expected output.

`mostExpensiveCar` goes through a collection and ***distills*** it down to a single value, the most expensive car.

`leastExpensiveCar` goes through a collection and ***distills*** it down to a single value, the least expensive car.

`averagePriceCalculator` goes through a collection and ***distills*** it down to a single value, the average price of all the cars.


I think you're catching on here! Our next tool to be added is named `distill`.

`distill` takes a `collection`, a `callback`, and a `startValue`. `distill` iterates through the `collection` and on each iteration updates the `startValue` to whatever the `callback` evaluates to. After iterating through the `collection` it returns the updated `startValue` to the user.


This sounds really confusing, so here are a couple of examples. We can use `distill` for a multitude of things - it's one of the most flexible tools in our toolbelt functions:

Adding up all of the numbers in an array:


```javascript

	var numbers = [59, 72, 21, 16]

	var numbersSummed = toolbelt.distill(numbers, function(sum, currentNumber){
		return sum + currentNumber;
	}, 0);

```


Finding the Largest Number in an Array:

```javascript
	
	var numbers = [59, 72, 21, 16];
	var largestNumber = distill(numbers, function(largestNumber, currentNumber){
		if (largestNumber < currentNumber){
			return currentNumber;
		} else {
			return largestNumber;
		}
	}, 0);

	console.log(largestNumber)
	// 72
```


Checking if All the Numbers are Even:

```javascript

	var numbers = [59, 72, 21, 16]
	var areAllOfTheseEven = distill(numbers, function(state, currentNumber){
		if (currentNumber % 2 === 1){
			return false;
		} else {
			return state;
		}
	}, true);

	console.log(areAllOfTheseEven)
	// false
```


Copy an array:

```javascript

	var numbers = [59, 72, 21, 16]
	var copyNumbers = distill(numbers, function(newArray, currentNumber){
		return newArray.push(currentNumber);
	}, []);

``` 


* [ ] Build `distill` and add it to our `toolbelt`
* [ ] Refactor `averagePriceCalculator` replacing all (or most) of its code with `distill`.
* [ ] Refactor `mostExpensiveCar` replacing all (or most) of its code with `distill`.
* [ ] Refactor `lestExpensiveCar` replacing all (or most) of its code with `distill`.



## Extra Credit: Data Modeling

### Refactor your filters

Refactor your filters to user `distill` instead of `filterBy`.

### makeAndModelMatrix

`makeAndModelMatrix` takes a list of cars and returns a new list containing arrays containing the `make` and `model` of each car in our car list.

* [ ] Use one ore more of the `tools` in your `toolbelt` to accomplish this.

example:

```javascript

var sampleCarList = [

{
    id: 100,
    year: 1991,
    make: Toyota,
    model: Camry,
    color: blue,
    price: 29847
}, 
  {
    id: 101,
    year: 2005,
    make: Nissan,
    model: Altima,
    color: black,
    price: 34829
  }

];

var carMatrix = makeAndModelMatrix(sampleCarList);
console.log(carMatrix);
// [["Toyota", "Camry"], ["Nissan", "Altima"]]

```


### calculateTotalCarsByMake

`calculateTotalCarsByMake` takes a list of cars and returns an object containing the total number of each make.

Keep in mind: there are 4 different `makes` in our carDataBase:

	Toyota  
	BMW  
	Nissan
	Ford  

They should all have have a corresponding number representing how many cars in the list are their make.

* [ ] Use one ore more of the `tools` in your `toolbelt` to accomplish this.

Example:

```javascript

var sampleCarList = [

{
    id: 100,
    year: 1991,
    make: Toyota,
    model: Camry,
    color: blue,
    price: 29847
}, 
  {
    id: 101,
    year: 2005,
    make: Nissan,
    model: Altima,
    color: black,
    price: 34829
  },

  {
    id: 102,
    year: 2009,
    make: BMW,
    model: 4 Series,
    color: red,
    price: 34192
  },

  {
    id: 103,
    year: 1994,
    make: Ford,
    model: Fiesta,
    color: black,
    price: 14829
  }

];

var totalCarsByMake = calculateTotalCarsByMake(sampleCarList);
console.log(totalCarsByMake);
/* {
 Ford: 1,
 BMW: 1,
 Toyota: 1,
 Nissan: 1;
};

*/

```


## FIN

Congratulations, you have finished your projects for the week and your engineering manager is ecstatic. You also built more tools other engineers will use in the future to make better more efficient software and save the company millions.

Keep pushing, and see you in the next sprint.









