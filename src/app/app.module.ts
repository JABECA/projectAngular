import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserNewComponent } from './user/user-new/user-new.component';
import { UserService } from './user/user.service';

@NgModule({
	declarations: [
		AppComponent,
		UserComponent,
		UserNewComponent,
		UserListComponent,
		UserEditComponent,
	],
	imports: [ BrowserModule, HttpModule, FormsModule ],
	providers: [ UserService ],
	bootstrap: [ AppComponent ],
})
export class AppModule {}
