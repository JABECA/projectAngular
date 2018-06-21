import {
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output
	} from '@angular/core';
import { Employee } from '../Employee';

@Component({
	selector: 'app-employee-new',
	templateUrl: './employee-new.component.html',
	styleUrls: [ './employee-new.component.css' ],
})
export class EmployeeNewComponent implements OnInit {
	@Output() createNewEmployeeEvent = new EventEmitter();
	newEmployee = new Employee();

	constructor() {}

	ngOnInit() {}

	create() {
		this.createNewEmployeeEvent.emit(this.newEmployee);
		this.newEmployee = new Employee();
	}
}
