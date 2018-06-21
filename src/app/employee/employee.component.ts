import { Component, OnInit } from '@angular/core';
import { Employee } from './Employee';
import { EmployeeService } from './employee.service';

@Component({
	selector: 'app-employee',
	templateUrl: './employee.component.html',
	styleUrls: [ './employee.component.css' ],
})
export class EmployeeComponent implements OnInit {
	employees: Employee[] = [
		new Employee(1, 'Alejo', 'alcatara', '22', '30 May', 'red', 'Angular'),
		new Employee(2, 'Aleja', 'MyM', '23', '29 May', 'Blue', 'PHP'),
		new Employee(2, 'Frank', 'Gobernacion', '24', '10 Oct', 'Yellow', 'JavaScript'),
	];
	constructor(private _employeeService: EmployeeService) {}

	// ejecuta codigo apenas el componente se genere
	ngOnInit() {
		// this.getEmployees();
	}

	getEmployees() {
		this._employeeService
			.getEmployees()
			.then((employees) => (this.employees = employees))
			.catch((err) => console.log(err));
		console.log('optube los proyectos');
	}

	create(employee: Employee) {
		console.log(employee);
		this.employees.push(employee);
		// this._employeeService
		// 	.create(employee)
		// 	.then((status) => this.getEmployees())
		// 	.catch((err) => console.log(err));
	}

	destroy(employee: Employee) {
		const i = this.employees.indexOf(employee);
		this.employees.splice(i, 1);
		// this._employeeService
		// 	.detroy(employee)
		// 	.then((status) => this.getEmployees())
		// 	.catch((err) => console.log(err));
	}

	update(employees) {
		console.log(employees);
		const i = this.employees.indexOf(employees.original);
		this.employees[i] = employees.edited;
		// this._employeeService
		// 	.update(employee)
		// 	.then((status) => this.getEmployees())
		// 	.catch((err) => console.log(err));
	}
}
