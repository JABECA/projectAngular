import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Project } from './Project';
import 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ProjectService {
	constructor(private _http: Http) {}

	create(project: Project) {
		console.log('servicio activado');
		return this._http
			.post('/projects', project)
			.pipe(map((data) => data.json()))
			.toPromise();
	}

	detroy(project: Project) {
		return this._http
			.delete('/projects/' + project._id)
			.pipe(map((data) => data.json()))
			.toPromise();
	}

	update(project: Project) {
		return this._http
			.put('/projects/' + project._id, project)
			.pipe(map((data) => data.json()))
			.toPromise();
	}

	getProjects() {
		return this._http.get('/projects').pipe(map((data) => data.json())).toPromise();
	}

	getProject(project: Project) {
		return this._http
			.get('/projects/' + project._id)
			.pipe(map((data) => data.json()))
			.toPromise();
	}
}
