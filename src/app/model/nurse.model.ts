export type NurseSummary = {
    id: number,
    firstName: number,
    lastName: number,
    licenseNumber: string,
    departmentName: string,
    rank: string
}

export type NurseDetail = {
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

export type NurseRegisterForm = {
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

export type NurseUpdateForm = {
    id: number,
    lastName: string,
    email: string,
    rank: string,
    phone: string
}