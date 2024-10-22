export type AppointmentSummary = {
    id: number,
    patientFirstName: string,
    patientLastName: string,
    doctorFirstName: string,
    doctorLastName: string,
    requestedDate: string
}

export type AppointmentBooking = {
    patientId: any,
    doctorId: number,
    appointmentDate: string
}

export type PatientAppointmentSummary = {
    id: number,
    doctorFirstName: string,
    doctorLastName: string,
    appointmentDate: string
}

export type DoctorAppointmentSummary = {
    id: number,
    patientFirstName: string,
    patientLastName: string,
    appointmentDate: string
}

