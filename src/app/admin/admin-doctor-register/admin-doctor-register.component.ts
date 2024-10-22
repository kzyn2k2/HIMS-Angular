import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DoctorRegisterForm } from '../../model/doctor.model';
import { DropdownComponent, DropdownOption } from '../../util/dropdown/dropdown.component';
import { DoctorService } from '../../service/doctor.service';
import { DepartmentService } from '../../service/department.service';
import { CustomValidators } from '../../validator/Validators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-doctor-register',
  standalone: true,
  imports: [ReactiveFormsModule, DropdownComponent, CommonModule, RouterLink],
  templateUrl: './admin-doctor-register.component.html',
  styleUrl: './admin-doctor-register.component.scss'
})
export class AdminDoctorRegisterComponent {

  form!: FormGroup;
  doctorRegister: DoctorRegisterForm = {
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

  constructor(private doctorService: DoctorService, private departmentService: DepartmentService, private formBuilder: FormBuilder, private router: Router) {

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
    this.rankDropDownOptions.push({ optionName: "Medical Director", optionValue: "MEDICAL_DIRECTOR" });
    this.rankDropDownOptions.push({ optionName: "Department Head", optionValue: "DEPARTMENT_HEAD" });
    this.rankDropDownOptions.push({ optionName: 'Attending Physician', optionValue: "ATTENDING_PHYSICIAN" });
    this.rankDropDownOptions.push({ optionName: "Fellow", optionValue: "FELLOW" });
    this.rankDropDownOptions.push({ optionName: "Chief Resident", optionValue: "CHIEF_RESIDENT" });
    this.rankDropDownOptions.push({ optionName: "Senior Resident", optionValue: "SENIOR_RESIDENT" });
    this.rankDropDownOptions.push({ optionName: "Junior Resident", optionValue: "JUNIOR_RESIDENT" });
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
    this.doctorRegister.departmentId = departmentId;
  }

  genderSelected(gender: any) {
    this.genderSelect = true;
    this.doctorRegister.gender = gender;
  }

  rankSelected(rank: any) {
    this.rankSelect = true;
    this.doctorRegister.rank = rank;
  }

  collectFormData() {
    this.doctorRegister.firstName = this.form.value['firstName'];
    this.doctorRegister.lastName = this.form.value['lastName'];
    this.doctorRegister.employedDate = this.form.value['employedDate'];
    this.doctorRegister.licenseNumber = this.form.value['licenseNumber'];
    this.doctorRegister.phone = this.form.value['phone'];
    this.doctorRegister.email = this.form.value['email'];
  }

  registerDoctor() {
    this.submitted = true;
    if (this.form.valid && this.departmentSelect && this.genderSelect && this.rankSelect) {
      this.collectFormData();
      this.doctorService.registerDoctor(this.doctorRegister).subscribe({
        next: (response: any) => {
          this.router.navigate(['/admin/doctors/', response.id]);
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
