import {Component} from '@angular/core';
import {FormComponent} from './form.component';

@Component({
	selector:'app',
	templateUrl:'Components/Templates/app.html',
	directives:[FormComponent]
})

export class AppComponent {
}
