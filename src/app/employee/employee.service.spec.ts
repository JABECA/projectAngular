import { async, inject, TestBed } from '@angular/core/testing';
import { EmployeeService } from './employee.service';
/* tslint:disable:no-unused-variable */


describe('Service: Employee', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ EmployeeService ],
		});
	});

	it(
		'should ...',
		inject([ EmployeeService ], (service: EmployeeService) => {
			expect(service).toBeTruthy();
		}),
	);
});
