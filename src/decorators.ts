/* A Decorator is a special kind of declaration that can be attached
 to a class declaration, method, accessor, property, or parameter.
 Decorators use the form @expression, where expression must evaluate
 to a function that will be called at runtime with information about
 the decorated declaration.*/

// To get the descriptor of an object property :- Object.getOwnPropertyDescriptor
// To set the descriptor of an object property :- Object.defineProperty
@classDecorator
class Boat {
	@propertyDecorator
	color: string = 'red';

	@accessorDecorator
	get formattedColor(): string {
		return `This boat color is ${this.color}`;
	}

	@logError('Oops! the boat is sinked!')
	@methodDecorator
	pilot(@parameterDecorator1 @parameterDecorator2 pilotName: string): void {
		console.log(pilotName);
	}
}
// targetPrototype : Holds the prototype of method's class.
// key : It hold the name of the Property/method/constructor on which decorator called.
// desc : It have the descriptor object which is related to the key.
// Class Decorator
function classDecorator(constructor: typeof Boat): void {
	console.log(constructor);
}
// Accessor Decorator
function accessorDecorator(
	targetPrototype: any,
	key: string,
	desc: PropertyDescriptor
): void {
	console.log(targetPrototype, key, desc);
}
// Property Decorator
function propertyDecorator(targetPrototype: any, key: string): void {
	console.log(targetPrototype, key);
}
// Method Decorator
function methodDecorator(
	target: any,
	key: string,
	desc: PropertyDescriptor
): void {
	console.log(target, key, desc);
}
// Parameter Decorator1
function parameterDecorator1(target: any, key: string, index: number): void {
	console.log(target, key, index);
}
// Parameter Decorator2
function parameterDecorator2(target: any, key: string, index: number): void {
	console.log(target, key, index);
}
// Generic function Decorators which can take message and return inner Decorators function.
function logError(errorMessage: string) {
	return function (target: any, key: string, desc: PropertyDescriptor): void {
		const preMethod = desc.value;
		desc.value = function () {
			try {
				preMethod();
			} catch (e) {
				console.log(errorMessage);
			}
		};
	};
}
