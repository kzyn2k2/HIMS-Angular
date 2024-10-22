export type DoctorSummary = {
    id: number,
    firstName: number,
    lastName: number,
    licenseNumber: string,
    departmentName: string,
    rank: string
}


export type DoctorDepartmentInfo = {
    id: number,
    firstName: number,
    lastName: number,
    rank: string
}

export type DoctorDetail = {
    id: number,
    firstName: number,
    lastName: number,
    licenseNumber: string,
    departmentName: string,
    rank: string,
    email: string,
    phone: string,
    employedDate: string,
    active: boolean,
    gender: string
}

export type DoctorRegisterForm = {
    firstName: string,
    lastName: string,
    employedDate: string,
    email: string,
    phone: string,
    gender: string,
    rank: string,
    licenseNumber: string,
    departmentId: number
}

export type DoctorUpdateForm = {
    id: number,
    lastName: string,
    email: string,
    rank: string,
    phone: string
}