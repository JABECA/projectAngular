import {
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output
	} from '@angular/core';
import { Employee } from '../Employee';

@Component({
	selector: 'app-employee-list',
	templateUrl: './employee-list.component.html',
	styleUrls: [ './employee-list.component.css' ],
})
export class EmployeeListComponent implements OnInit {
	@Input() employees;
	@Output() destroyEmployeeEvent = new EventEmitter();
	@Output() updateEmployeeEvent = new EventEmitter();
	constructor() {}

	ngOnInit() {}

	destroy(employee: Employee) {
		const response = confirm('delete?');
		if (response) {
			this.destroyEmployeeEvent.emit(employee);
		}
	}

	update(employees) {
		this.updateEmployeeEvent.emit(employees);
	}
}
