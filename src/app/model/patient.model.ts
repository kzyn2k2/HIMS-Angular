export type PatientRegisterForm = {
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    gender: string,
    phone: string,
    email: string,
    address: string
}

export type PatientUpdateForm = {
    id: number,
    lastName: string,
    phone: string,
    email: string,
    address: string
}

export type PatientSummary = {
    id: number,
    firstName: string,
    lastName: string,
    gender: string,
    email: string,
    phone: string
}

export type PatientDetail = {
    id: number,
    firstName: string,
    lastName: string,
    gender: string,
    email: string,
    phone: string,
    dateOfBirth: string,
    address: string
}