import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: [ './user.component.css' ],
})
export class UserComponent implements OnInit {
	users: User[] = [
		new User(1, 'Alejo', 'alcatara', '22', '30 May', 'red', 'Angular'),
		new User(2, 'Aleja', 'MyM', '23', '29 May', 'Blue', 'PHP'),
		new User(2, 'Frank', 'Gobernacion', '24', '10 Oct', 'Yellow', 'JavaScript'),
	];
	constructor(private _userService: UserService) {}

	// ejecuta codigo apenas el componente se genere
	ngOnInit() {
		// this.getUsers();
	}

	getUsers() {
		this._userService
			.getUsers()
			.then((users) => (this.users = users))
			.catch((err) => console.log(err));
	}

	create(user: User) {
		console.log(user);
		this.users.push(user);
		// this._userService
		// 	.create(user)
		// 	.then((status) => this.getUsers())
		// 	.catch((err) => console.log(err));
	}

	destroy(user: User) {
		const i = this.users.indexOf(user);
		this.users.splice(i, 1);
		// this._userService
		// 	.detroy(user)
		// 	.then((status) => this.getUsers())
		// 	.catch((err) => console.log(err));
	}

	update(users) {
		console.log(users);
		const i = this.users.indexOf(users.original);
		this.users[i] = users.edited;
		// this._userService
		// 	.update(user)
		// 	.then((status) => this.getUsers())
		// 	.catch((err) => console.log(err));
	}
}
