import { Component, OnInit } from '@angular/core';
import { Project } from './project';
import { ProjectService } from './project.service';

@Component({
	selector: 'app-project',
	templateUrl: './project.component.html',
	styleUrls: [ './project.component.css' ],
})
export class ProjectComponent implements OnInit {
	projects: Project[] = [
		new Project(1, 'Angular', 5, 'Mariscal'),
		new Project(2, 'PHP', 3, 'Surtifamiliar'),
		new Project(3, 'JavaScript', 6, 'Construpili'),
	];

	constructor(private _projectService: ProjectService) {}

	ngOnInit() {
		// this.getProjects();
	}

	getProjects() {
		this._projectService
			.getProjects()
			.then((projects) => (this.projects = projects))
			.catch((err) => console.log(err));
	}

	create(project: Project) {
		console.log(project);
		console.log('que pasa');
		this.projects.push(project);
		// this._employeeService
		// 	.create(employee)
		// 	.then((status) => this.getEmployees())
		// 	.catch((err) => console.log(err));
	}

	destroy(project: Project) {
		const i = this.projects.indexOf(project);
		this.projects.splice(i, 1);
		// this._employeeService
		// 	.detroy(employee)
		// 	.then((status) => this.getEmployees())
		// 	.catch((err) => console.log(err));
	}

	update(projects) {
		console.log(projects);
		const i = this.projects.indexOf(projects.original);
		this.projects[i] = projects.edited;
		// this._employeeService
		// 	.update(employee)
		// 	.then((status) => this.getEmployees())
		// 	.catch((err) => console.log(err));
	}
}
