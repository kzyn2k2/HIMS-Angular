import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DropdownComponent, DropdownOption } from '../../util/dropdown/dropdown.component';
import { CommonModule } from '@angular/common';
import { CustomValidators } from '../../validator/Validators';
import { Router, RouterLink } from '@angular/router';
import { PatientRegisterForm } from '../../model/patient.model';
import { PatientService } from '../../service/patient.service';

@Component({
  selector: 'app-admin-patient-register',
  standalone: true,
  imports: [ReactiveFormsModule, DropdownComponent, CommonModule, RouterLink],
  templateUrl: './admin-patient-register.component.html',
  styleUrl: './admin-patient-register.component.scss'
})
export class AdminPatientRegisterComponent {

  form!: FormGroup;
patientRegisterForm: PatientRegisterForm = {firstName: "", lastName: "", address: "", dateOfBirth: "", email: "", gender: "", phone: ""};
genderDropdownOptions: DropdownOption[] = [];
submitted: boolean = false;
genderSelect: boolean = false;

constructor(private patientService: PatientService, private formBuilder: FormBuilder, private router: Router) {

}

ngOnInit(): void {
 this.initializeFormGroup(); 
 this.initializeGenderOptions();
}

initializeFormGroup() {
  this.form = this.formBuilder.group({
    firstName: new FormControl('', [Validators.required, CustomValidators.nameValidator]),
    lastName: new FormControl('', [Validators.required, CustomValidators.nameValidator]),
    dob: new FormControl(null, [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, CustomValidators.phoneValidator]),
    address: new FormControl('', [Validators.required])
  })
}

initializeGenderOptions() {
  this.genderDropdownOptions.push({ optionName: "Male", optionValue: "MALE" });
  this.genderDropdownOptions.push({ optionName: "Female", optionValue: "FEMALE" });
  this.genderDropdownOptions.push({ optionName: "Others", optionValue: "OTHERS" });
}

genderSelected(gender: any) {
  this.genderSelect = true;
  this.patientRegisterForm.gender = gender;
}

collectFormData() {
  this.patientRegisterForm.firstName = this.form.value['firstName'];
  this.patientRegisterForm.lastName = this.form.value['lastName'];
  this.patientRegisterForm.email = this.form.value['email'];
  this.patientRegisterForm.dateOfBirth = this.form.value['dob'];
  this.patientRegisterForm.phone = this.form.value['phone'];
  this.patientRegisterForm.address = this.form.value['address'];
}

registerPatient() {
  this.submitted = true;
  console.log(this.form.valid, this.genderSelect);
  if(this.form.valid && this.genderSelect) {
  this.collectFormData();
  this.patientService.registerPatient(this.patientRegisterForm).subscribe(
    {
      next: (response: any) => {
          if(response.id != 0) {
            let id = response.id;
            this.router.navigate(['/admin/patients/', id]);
          }
      }
    }
  )
  }
}

}
