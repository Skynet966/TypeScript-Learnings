//Defination: Arrays where each element is some consistent type of values.

//Type inference on initilization of array
const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

//Type annotation on initilization of array
let carsByMake: string[][] = [];
carsByMake = [['f150'], ['corolla'], ['fortuner']];

//Help with inference when extrating values out of array
const carMake = carMakers[0];
const myCar = carMakers.pop();

//Prevent incompatable values to insert in array
carMakers.push('bmw'); //not insert any number

//Help with 'map'
carMakers.map((car: string): string => {
	return car.toUpperCase();
});

//Flexible types: only accept infred type values.
//In this case Date and string is accepted
const importantDates = [new Date(), '2030-10-10'];
importantDates.push(new Date());
importantDates.push('2050-10-10');
