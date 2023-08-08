export interface dataFormat {
    firstName: string | null
    lastName: string | null
    birthday: number | null
    street: string | null
    city: string | null
    state: string | null
    zipCode: number | null
    startDate: number | null
    department: string | null
}

export interface dataValidation {
    firstName: boolean
    lastName: boolean
    startDate: boolean
    department: boolean
    birthday: boolean
    street: boolean
    city: boolean
    state: boolean
    zipCode: boolean
}