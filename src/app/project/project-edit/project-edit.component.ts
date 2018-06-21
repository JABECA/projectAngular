import {
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output
	} from '@angular/core';
import { Project } from '../project';

@Component({
	selector: 'app-project-edit',
	templateUrl: './project-edit.component.html',
	styleUrls: [ './project-edit.component.css' ],
})
export class ProjectEditComponent implements OnInit {
	@Input() project: Project;
	@Output() updateProjectEvent = new EventEmitter();
	editProject: Project = new Project();

	constructor() {}

	ngOnInit() {
		Object.assign(this.editProject, this.project);
	}

	update() {
		this.editProject.editable = false;
		this.updateProjectEvent.emit({
			original: this.project,
			edited: this.editProject,
		});
	}
}
