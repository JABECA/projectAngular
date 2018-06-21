import {
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output
	} from '@angular/core';
import { Project } from '../project';

@Component({
	selector: 'app-project-list',
	templateUrl: './project-list.component.html',
	styleUrls: [ './project-list.component.css' ],
})
export class ProjectListComponent implements OnInit {
	@Input() projects;
	@Output() destroyProjectEvent = new EventEmitter();
	@Output() updateProjectEvent = new EventEmitter();
	constructor() {}

	ngOnInit() {}

	destroy(project: Project) {
		const response = confirm('delete?');
		if (response) {
			this.destroyProjectEvent.emit(project);
		}
	}

	update(projects) {
		this.updateProjectEvent.emit(projects);
	}
}
