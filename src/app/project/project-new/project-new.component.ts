import {
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output
	} from '@angular/core';
import { Project } from '../project';

@Component({
	selector: 'app-project-new',
	templateUrl: './project-new.component.html',
	styleUrls: [ './project-new.component.css' ],
})
export class ProjectNewComponent implements OnInit {
	@Output() createNewProjectEvent = new EventEmitter();
	newProject = new Project();
	constructor() {}

	ngOnInit() {}

	create() {
		this.createNewProjectEvent.emit(this.newProject);
		this.newProject = new Project();
	}
}
