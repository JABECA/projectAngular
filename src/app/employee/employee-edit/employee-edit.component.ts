import {
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output
	} from '@angular/core';
import { Employee } from '../Employee';
@Component({
	selector: 'app-employee-edit',
	templateUrl: './employee-edit.component.html',
	styleUrls: [ './employee-edit.component.css' ],
})
export class EmployeeEditComponent implements OnInit {
	@Input() employee: Employee;
	@Output() updateEmployeeEvent = new EventEmitter();
	editEmployee: Employee = new Employee();

	constructor() {}

	ngOnInit() {
		Object.assign(this.editEmployee, this.employee);
	}

	update() {
		this.editEmployee.editable = false;
		this.updateEmployeeEvent.emit({
			original: this.employee,
			edited: this.editEmployee,
		});
	}
}
