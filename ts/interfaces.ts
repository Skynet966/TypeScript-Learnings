// Definition: Create a new type, describing the property names and value types of a Object.

interface Vehicle {
	name: string;
	year: Date;
	broken: boolean;
	summary(): string;
}

interface Reportable {
	summary(): string;
}
//Plain simple object
const oldCivic: Vehicle = {
	name: 'civic',
	year: new Date(),
	broken: true,
	summary(): string {
		return `Name: ${this.name} Year: ${this.year} Broken?: ${this.broken}`;
	}
};

const beverage = {
	color: 'brown',
	carbonated: true,
	sugar: 40,
	summary(): string {
		return `My drink has ${this.sugar} grams of sugar.`;
	}
};
// Insted of using (vehicle:{name: string;year: number;broken: boolean;}) long defination use Interface.
const printVehicle = (vehicle: Vehicle): void => {
	console.log(vehicle.summary());
};

const printSummary = (item: Reportable): void => {
	console.log(item.summary());
};

//Call the function and pass the defined object.
printVehicle(oldCivic);

//Print summary implimented using reportable interface that have summary function that both oldCivic and beverage can satisfied
printSummary(oldCivic);
printSummary(beverage);
