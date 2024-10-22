import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', redirectTo: 'admin', pathMatch: 'full'
    },
    {
        path: 'admin',
        loadComponent: () => import("./main/main.component").then(mod => mod.MainComponent),
        children: [
            {
                path: '', redirectTo: 'departments', pathMatch: 'full',
            },
            {
                path: 'departments',
                loadComponent: () => import("./admin/admin-departments/admin-departments.component").then(mod => mod.AdminDepartmentsComponent)
            },
            {
                path: 'departments/:id',
                loadComponent: () => import("./admin/admin-department/admin-department.component").then(mod => mod.AdminDepartmentComponent)
            },
            {
                path: 'register-department',
                loadComponent: () => import("./admin/admin-department-register/admin-department-register.component").then(mod => mod.AdminDepartmentRegisterComponent)
            },
            {
                path: 'doctors',
                loadComponent: () => import("./admin/admin-doctors/admin-doctors.component").then(mod => mod.AdminDoctorsComponent)
            },
            {
                path: 'doctors/:id',
                loadComponent: () => import("./admin/admin-doctor/admin-doctor.component").then(mod => mod.AdminDoctorComponent)
            },
            {
                path: 'register-doctor',
                loadComponent: () => import("./admin/admin-doctor-register/admin-doctor-register.component").then(mod => mod.AdminDoctorRegisterComponent)
            },
            {
                path: 'nurses',
                loadComponent: () => import("./admin/admin-nurses/admin-nurses.component").then(mod => mod.AdminNursesComponent)
            },
            {
                path: 'nurses/:id',
                loadComponent: () => import("./admin/admin-nurse/admin-nurse.component").then(mod => mod.AdminNurseComponent)
            },
            {
                path: 'register-nurse',
                loadComponent: () => import("./admin/admin-nurse-register/admin-nurse-register.component").then(mod => mod.AdminNurseRegisterComponent)
            },
            {
                path: 'patients',
                loadComponent: () => import("./admin/admin-patients/admin-patients.component").then(mod => mod.AdminPatientsComponent)
            },
            {
                path: 'register-patient',
                loadComponent: () => import("./admin/admin-patient-register/admin-patient-register.component").then(mod => mod.AdminPatientRegisterComponent)
            },
            {
                path: 'patients/:id',
                loadComponent: () => import("./admin/admin-patient/admin-patient.component").then(mod => mod.AdminPatientComponent)
            },
            {
                path: 'appointments',
                loadComponent: () => import("./admin/admin-appointments/admin-appointments.component").then(mod => mod.AdminAppointmentsComponent)
            },
            {
                path: 'register-appointments/:id',
                loadComponent: () => import("./admin/admin-appointment-register/admin-appointment-register.component").then(mod => mod.AdminAppointmentRegisterComponent),
                children: [
                    {
                        path: 'departments/:patientId/:departmentId',
                        loadComponent: () => import("./admin/admin-appointment-register-department/admin-appointment-register-department.component").then(mod => mod.AdminAppointmentRegisterDepartmentComponent)
                    }
                ]
            }

        ]
    }
];
