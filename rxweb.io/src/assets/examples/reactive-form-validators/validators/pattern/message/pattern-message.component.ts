import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
    selector: 'app-pattern-message-validator',
    templateUrl: './pattern-message.component.html'
})
export class PatternMessageValidatorComponent implements OnInit {
    userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder)
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            zipCode:['', RxwebValidators.pattern({pattern:{'zipCode':RegExp('/^\d{5}(?:[-\s]\d{4})?$/') }  ,message:'Zipcode must be 5 digits' })], 
        });
    }
}