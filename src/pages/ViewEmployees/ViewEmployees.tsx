import React from 'react'
import Header from '../../components/Header/Header'

import { NavLink } from 'react-router-dom'
import { useAtom } from 'jotai'
import { employeesAtom } from '../../main'
import { DataTable } from '../../components/DataTable/DataTable'

const ViewEmployees: React.FC = () => {
    const [employees] = useAtom(employeesAtom)

    const names = {
        firstName: 'First Name',
        lastName: 'Last Name',
        startDate: 'Start Date',
        department: 'Department',
        birthday: 'Date of Birth',
        street: 'Street',
        city: 'City',
        state: 'State',
        zipCode: 'Zip Code',
    }

    console.log(employees)

    return (
        <>
            <Header />
            <main data-testid="viewEmployees">
                <NavLink to="/" data-testid="link" className="link">
                    Create employee
                </NavLink>
                <div className="content-wrapper">
                    <h2 className="wrapper-title">View employees</h2>
                    <DataTable headingNames={names} data={employees} />
                </div>
            </main>
        </>
    )
}

export default ViewEmployees
