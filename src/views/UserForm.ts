import { UserProps } from './../models/User';
import User from '../models/User';
import View from './view';

export default class UserForm extends View<User, UserProps> {
	eventsMap(): { [key: string]: () => void } {
		return {
			'click:.set-age': this.onSetAgeClick,
			'click:.set-name': this.onSetNameClick,
			'click:.save-model': this.onSaveClick
		};
	}

	onSaveClick = (): void => {
		this.model.save();
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
					<input placeholder="${this.model.get('name')}"/>
					<button class="set-name">Update Name</button>
					<button class="set-age">Set Random Age</button>
					<button class="save-model">Save User</button>
				</div>`;
	}
}