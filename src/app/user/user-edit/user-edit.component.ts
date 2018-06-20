import {
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output
	} from '@angular/core';
import { User } from '../user';
@Component({
	selector: 'app-user-edit',
	templateUrl: './user-edit.component.html',
	styleUrls: [ './user-edit.component.css' ],
})
export class UserEditComponent implements OnInit {
	@Input() user: User;
	@Output() updateUserEvent = new EventEmitter();
	editUser: User = new User();

	constructor() {}

	ngOnInit() {
		Object.assign(this.editUser, this.user);
	}

	update() {
		this.editUser.editable = false;
		this.updateUserEvent.emit({
			original: this.user,
			edited: this.editUser,
		});
	}
}
