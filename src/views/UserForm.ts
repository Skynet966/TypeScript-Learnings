import User from '../models/User';

export default class UserForm {
	constructor(public parent: Element, public model: User) {
		this.bindModel();
	}

	bindModel(): void {
		this.model.on('change', () => {
			this.render();
		});
	}

	eventsMap(): { [key: string]: () => void } {
		return {
			'click:.set-age': this.onSetAgeClick,
			'click:.set-name': this.onSetNameClick,
			'click:.set-data': this.onSetDataClick
		};
	}
	onSetDataClick = (): void => {
		console.log('Save button clicked!');
	};
	onSetNameClick = (): void => {
		const input = this.parent.querySelector('input');
		const name = input?.value;
		if (name) {
			this.model.set({ name });
		}
	};
	onSetAgeClick = (): void => {
		this.model.setRandomAge();
	};
	template(): string {
		return `<div>
					<h1>User Form</h1>
					<div>User's name :: ${this.model.get('name')}</div>
					<div>User's age :: ${this.model.get('age')}</div>
					<input/>
					<button class="set-name">Update Name</button>
					<button class="set-age">Set Random Age</button>
					<button class="set-data">Save</button>
				</div>`;
	}
	bindEvents(fragment: DocumentFragment): void {
		const eventsMap = this.eventsMap();
		for (let eventKey in eventsMap) {
			const [eventName, selector] = eventKey.split(':');
			fragment.querySelectorAll(selector).forEach((element: Element): void => {
				element.addEventListener(eventName, eventsMap[eventKey]);
			});
		}
	}
	render(): void {
		this.parent.innerHTML = '';
		const templateElement = document.createElement('template');
		templateElement.innerHTML = this.template();
		this.bindEvents(templateElement.content);
		this.parent.append(templateElement.content);
	}
}
