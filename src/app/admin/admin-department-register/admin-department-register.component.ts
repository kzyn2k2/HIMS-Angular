import { Component } from '@angular/core';
import { DepartmentService } from '../../service/department.service';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DepartmentRegisterForm } from '../../model/department.model';
import { DropdownComponent, DropdownOption } from '../../util/dropdown/dropdown.component';
import { CustomValidators } from '../../validator/Validators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-department-register',
  standalone: true,
  imports: [DropdownComponent, ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './admin-department-register.component.html',
  styleUrl: './admin-department-register.component.scss'
})
export class AdminDepartmentRegisterComponent {

  form!: FormGroup;
  submitted: boolean = false;
  registerForm: DepartmentRegisterForm = { access: false, name: '', description: '' };
  accessDropdownOptions: DropdownOption[] = [];
  accessSelect: boolean = false;
  visibility: boolean = false;

  constructor(private departmentService: DepartmentService, private formBuilder: FormBuilder, private router: Router) {

  }

  ngOnInit() {
    this.initializeForm();
    this.initializeAccessOptions();
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      name: new FormControl('', [CustomValidators.nameValidator]),
      desc: new FormControl('')
    });
  }

  registerDepartment() {
    if (this.form.valid) {
      this.collectFormData();
      console.log(this.registerForm)
      this.departmentService.registerDepartment(this.registerForm).subscribe(
        {
          next: (res: any) => {
            this.router.navigate(['/admin/departments/', res.id]);
          }
        }
      )
    }
  }

  collectFormData() {
    this.registerForm.name = this.form.value['name'];
    this.registerForm.description = this.form.value['desc'];
  }

  initializeAccessOptions() {
    this.accessDropdownOptions.push({ optionName: "True", optionValue: true });
    this.accessDropdownOptions.push({ optionName: "False", optionValue: false });
  }

  selectAccess(access: any) {
    this.accessSelect = true;
    this.registerForm.access = access;
  }

  openConfirm() {
    this.visibility = true;
  }

  closeConfirm() {
    this.visibility = false;
  }
}
