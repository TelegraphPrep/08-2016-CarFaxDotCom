window.database = {};

database.carMaker = function(id, year, make, model, color, price){
  return {
    id: id,
    year: year,
    make: make,
    model: model,
    color: color,
    price: price
  }
};


database.carData = { 
  years: [1991, 1992, 1993, 1994,1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  makes: ['Toyota', 'Ford', 'BMW', 'Nissan'],
  makeAndModel: {
    Toyota: {
      models: ['Camry', 'Corolla', 'Prius', 'Rav4']
    }, 
    Ford: {
      models: ['Fiesta', 'Focus', 'Everest', 'Mustang']
    },
    
    BMW: {
      models: ['M3', '3 Series', '4 Series', '6 Series']
    },
    Nissan: {
      models: ['Altima', 'Pathfinder', 'Leaf', 'Juke']
    }
  },
  colors: ['blue', 'red', 'black', 'white', 'silver', 'champagne'],
};


database.carFactory = function(carData, carMaker, numberOfCars){
  var cars = [];
  for (var i = 0; i <= numberOfCars; i++){
    var id = 100 + i;
    var randomYear = carData.years[Math.floor(Math.random() * carData.years.length)]
    var randomColor = carData.colors[Math.floor(Math.random() * carData.colors.length)];
    var randomMake = carData.makes[Math.floor(Math.random() * carData.makes.length)];
    var randomModel = carData.makeAndModel[randomMake] ? carData.makeAndModel[randomMake]['models'][Math.floor(Math.random() * carData.makeAndModel[randomMake]['models'].length)] : alert("make does not exist in database");
    var randomPrice = Math.floor(Math.random() * 20000 + 29000)
    cars.push(carMaker(id, randomYear, randomMake, randomModel, randomColor, randomPrice));
  }

  return cars;
};

var carData = database.carFactory(database.carData, database.carMaker, 100);

database.carDataBase = {carData: carData};

console.log(database.carDataBase)