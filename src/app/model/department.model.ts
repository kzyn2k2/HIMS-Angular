export type DepartmentRegisterForm = {
    name: string,
    description: string,
    access: boolean
}

export type DepartmentUpdateForm = {
    id: number,
    name: string,
    description: string
}

export type DepartmentSummary = {
    id: number, 
    name: string,
    description: string
}

export type DepartmentDetail = {
    id: number,
    name: string,
    description: string,
    access: boolean,
    doctors: number,
    nurses: number,
    doctorsByRank: DoctorsByRank,
    nursesByRank: NursesByRank
}

export type DoctorsByRank = {
    ATP: number,
    FEL: number,
    SRR: number,
    CFR: number,
    JRR: number,
    INT: number
}

export type NursesByRank = {
    SUV: number,
    ASS: number,
    INT: number
}

export type DepartmentOption = {
    id: number, 
    name: string
}