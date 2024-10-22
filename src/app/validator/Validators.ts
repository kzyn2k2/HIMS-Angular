import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators{

    static doctorLiicenseValidator(control: AbstractControl): ValidationErrors | null {
        const valid = /^MED[0-9]{5}/.test(control.value);
        return valid ? null : {licenseNumber: true};
    }

    static phoneValidator(control: AbstractControl): ValidationErrors | null {
        const valid = /^[0-9]+$/.test(control.value);
        return valid ? null : {phone: true};
    }

    static nameValidator(control: AbstractControl): ValidationErrors | null {
        const valid = /^[a-zA-Z\s]+$/.test(control.value);
        return valid ? null : {name: true};
    }

}