//Defination: Array like structure where each element represent some property of record.

//Simple object
const drink = {
	color: 'brown',
	carbonated: true,
	sugar: 40
};

type Drink = [string, boolean, number]; //This is a type declaration.

//Diffrent type of drinks
const pepsi: Drink = ['brown', true, 40]; //This is typle defination
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

//Tuple
const carSpecs: [number, number] = [400, 3354];
// Not able to under the values meaning

//vs

//Object
const carStats = { horsepower: 400, weight: 3354 };
//We clearly see that one variable is hoursepower and another is weight of a car.
