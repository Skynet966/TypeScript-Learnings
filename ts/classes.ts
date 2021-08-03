//Defination: Blueprint to create an object with some fields (values) and methods (functions) to represent a 'thing'.

//Access Modifer for class is public, private and protected.
//Public: This method can be called any where, any time.
//Private: This method can only be called by other methods in this class.
//Protected: This method can be called by other methods in this class, or by other methods in child classes.

class SpaceShip {
	protected color = 'silver';
	constructor(protected isNew: boolean) {}
	public hyperDrive(): void {
		console.log('chugga chugga');
	}
	public superDrive(): void {
		console.log('beep beep');
	}
	protected repairDrive(): void {
		console.log('Drive is repaired');
	}
}

class EnterpriseShip extends SpaceShip {
	constructor(
		protected color: string,
		private length: number,
		protected isNew: boolean
	) {
		super(isNew);
	}
	public galacticDrive(): void {
		console.log('romm romm');
	}
	//Method override
	public hyperDrive(): void {
		console.log('vroom vroom');
	}
	public starTrekProps(): void {
		console.log(
			`${this.isNew ? 'Brand new' : 'Old one'} StartTrek Enterprise is of ${
				this.color
			} color and with length ${this.length} meter`
		);
	}
}

const enterpriseShip = new SpaceShip(true);
enterpriseShip.hyperDrive();
enterpriseShip.superDrive();

const startTrekShip = new EnterpriseShip('blue', 324, false);
startTrekShip.galacticDrive();
//Overriden method is going to run
startTrekShip.hyperDrive();
startTrekShip.superDrive();
startTrekShip.starTrekProps();

// Interfaces + Classes = How we get really strong code reuse in Typescript.
