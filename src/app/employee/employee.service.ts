import { Employee } from './Employee';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class EmployeeService {
	constructor(private _http: Http) {}

	create(employee: Employee) {
		return this._http
			.post('/employees', employee)
			.pipe(map((data) => data.json()))
			.toPromise();
	}

	// delete data from users
	detroy(employee: Employee) {
		return this._http
			.delete('/employees/' + employee._id)
			.pipe(map((data) => data.json()))
			.toPromise();
	}

	update(employee: Employee) {
		return this._http
			.put('/employees/' + employee._id, employee)
			.pipe(map((data) => data.json()))
			.toPromise();
	}

	getEmployees() {
		return this._http.get('/employess').pipe(map((data) => data.json())).toPromise();
	}

	getEmployee(employee: Employee) {
		return this._http
			.get('/employess/' + employee._id)
			.pipe(map((data) => data.json()))
			.toPromise();
	}
}
