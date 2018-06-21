import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeNewComponent } from './employee/employee-new/employee-new.component';
import { EmployeeService } from './employee/employee.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login.guard';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { NoFoundComponent } from './no-found/no-found.component';
import { NoLoginGuard } from './no-login.guard';
import { ProjectComponent } from './project/project.component';
import { ProjectEditComponent } from './project/project-edit/project-edit.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { ProjectNewComponent } from './project/project-new/project-new.component';
import { ProjectService } from './project/project.service';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', component: LoginComponent, canActivate: [ NoLoginGuard ] },
	{ path: 'login', component: LoginComponent, canActivate: [ NoLoginGuard ] },
	{ path: 'home', component: HomeComponent, canActivate: [ LoginGuard ] },
	{ path: 'employee', component: EmployeeComponent, canActivate: [ LoginGuard ] },
	{ path: 'project', component: ProjectComponent, canActivate: [ LoginGuard ] },
	{ path: '**', component: NoFoundComponent, canActivate: [ LoginGuard ] },
];

@NgModule({
	declarations: [
		AppComponent,
		EmployeeComponent,
		EmployeeNewComponent,
		EmployeeListComponent,
		EmployeeEditComponent,
		ProjectComponent,
		ProjectNewComponent,
		ProjectListComponent,
		ProjectEditComponent,
		LoginComponent,
		NavbarComponent,
		NavbarComponent,
		LoginComponent,
		NoFoundComponent,
		HomeComponent,
	],
	imports: [ BrowserModule, HttpModule, RouterModule.forRoot(routes), FormsModule ],
	providers: [ EmployeeService, ProjectService ],
	bootstrap: [ AppComponent ],
})
export class AppModule {}
