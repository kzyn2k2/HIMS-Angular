import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NurseRegisterForm } from '../../model/nurse.model';
import { DropdownComponent, DropdownOption } from '../../util/dropdown/dropdown.component';
import { NurseService } from '../../service/nurse.service';
import { DepartmentService } from '../../service/department.service';
import { CustomValidators } from '../../validator/Validators';

@Component({
  selector: 'app-admin-nurse-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, DropdownComponent, RouterLink],
  templateUrl: './admin-nurse-register.component.html',
  styleUrl: './admin-nurse-register.component.scss'
})
export class AdminNurseRegisterComponent {

  form!: FormGroup;
  nurseRegister: NurseRegisterForm = {
    firstName: '', lastName: '', employedDate: '', licenseNumber: '',
    email: '', phone: '', departmentId: 0, gender: '', rank: ''
  };
  deparmentDropdownOptions: DropdownOption[] = [];
  genderDropdownOptions: DropdownOption[] = [];
  rankDropDownOptions: DropdownOption[] = [];
  submitted: boolean = false;
  departmentSelect: boolean = false;
  genderSelect: boolean = false;
  rankSelect: boolean = false;
  visibility: boolean = false;

  constructor(private nurseService: NurseService, private departmentService: DepartmentService, private formBuilder: FormBuilder, private router: Router) {

  }

  ngOnInit(): void {
    this.initializeFormGroup();
    this.getDepartmentOptions();
    this.initializeGenderOptions();
    this.initializeRankOptions();

  }

  initializeFormGroup() {
    this.form = this.formBuilder.group({
      firstName: new FormControl('', [Validators.required, CustomValidators.nameValidator]),
      lastName: new FormControl('', [Validators.required, CustomValidators.nameValidator]),
      employedDate: new FormControl(null, [Validators.required]),
      licenseNumber: new FormControl('', [Validators.required, CustomValidators.doctorLiicenseValidator]),
      phone: new FormControl('', [Validators.required, CustomValidators.phoneValidator]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  initializeGenderOptions() {
    this.genderDropdownOptions.push({ optionName: "Male", optionValue: "MALE" });
    this.genderDropdownOptions.push({ optionName: "Female", optionValue: "FEMALE" });
    this.genderDropdownOptions.push({ optionName: "Others", optionValue: "OTHERS" });
  }

  initializeRankOptions() {
    this.rankDropDownOptions.push({ optionName: "Chief", optionValue: "CHIEF" });
    this.rankDropDownOptions.push({ optionName: "Supervisor", optionValue: "SUPERVISOR" });
    this.rankDropDownOptions.push({ optionName: "Assistant", optionValue: "ASSISTANT" });
    this.rankDropDownOptions.push({ optionName: "Intern", optionValue: "INTERN" });
  }

  getDepartmentOptions() {
    this.departmentService.getDepartmentOptions().subscribe({
      next: (departmentOptions) => {
        for (let option of departmentOptions) {
          this.deparmentDropdownOptions.push({ optionName: option.name, optionValue: option.id });
        }
      }
    })
  }

  departmentSelected(departmentId: any) {
    this.departmentSelect = true;
    this.nurseRegister.departmentId = departmentId;
  }

  genderSelected(gender: any) {
    this.genderSelect = true;
    this.nurseRegister.gender = gender;
  }

  rankSelected(rank: any) {
    this.rankSelect = true;
    this.nurseRegister.rank = rank;
  }

  collectFormData() {
    this.nurseRegister.firstName = this.form.value['firstName'];
    this.nurseRegister.lastName = this.form.value['lastName'];
    this.nurseRegister.employedDate = this.form.value['employedDate'];
    this.nurseRegister.licenseNumber = this.form.value['licenseNumber'];
    this.nurseRegister.phone = this.form.value['phone'];
    this.nurseRegister.email = this.form.value['email'];
  }

  registerNurse() {
    this.submitted = true;
    if (this.form.valid && this.departmentSelect && this.genderSelect && this.rankSelect) {
      this.collectFormData();
      this.nurseService.registerNurse(this.nurseRegister).subscribe({
        next: (response: any) => {
          this.router.navigate(['/admin/nurses/', response.id]);
        }
      })
    }
  }

  openConfirm() {
    this.visibility = true;
  }

  closeConfirm() {
    this.visibility = false;
  }

}
