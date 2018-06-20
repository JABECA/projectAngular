import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from './user';
import 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	constructor(private _http: Http) {}

	create(user: User) {
		return this._http
			.post('/users', user)
			.pipe(map((data) => data.json()))
			.toPromise();
	}

	// delete data from users
	detroy(user: User) {
		return this._http
			.delete('/users/' + user._id)
			.pipe(map((data) => data.json()))
			.toPromise();
	}

	update(user: User) {
		return this._http
			.put('/users/' + user._id, user)
			.pipe(map((data) => data.json()))
			.toPromise();
	}

	getUsers() {
		return this._http.get('/users').pipe(map((data) => data.json())).toPromise();
	}

	getUser(user: User) {
		return this._http
			.get('/users/' + user._id)
			.pipe(map((data) => data.json()))
			.toPromise();
	}
}
