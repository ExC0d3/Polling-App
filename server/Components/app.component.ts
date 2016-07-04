import {Component} from '@angular/core';
import {FormComponent} from './form.component';
import {LoginComponent} from './login.component';

@Component({
	selector:'app',
	templateUrl:'Components/Templates/app.html',
	directives:[LoginComponent, FormComponent]
})

export class AppComponent {
}
