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

    return (
        <>
            <Header />
            <main data-testid="viewEmployees">
                <NavLink to="/" data-testid="link" className="link">
                    Create employee
                </NavLink>
                <div className="content-wrapper">
                    <DataTable headingNames={names} data={employees} />
                    <h2 className="wrapper-title">View employees</h2>
                    tableau avec <br />
                    {employees.map((employee, idx) => (
                        <div key={idx}>
                            <span>{employee.lastName}</span> -{' '}
                            <span>{employee.firstName}</span> -{' '}
                            <span>{employee.birthday}</span> -{' '}
                            <span>{employee.street}</span> -{' '}
                            <span>{employee.city}</span> -{' '}
                            <span>{employee.state}</span> -{' '}
                            <span>{employee.zipCode}</span> -{' '}
                            <span>{employee.department}</span> -{' '}
                            <span>{employee.startDate}</span> - <br />
                        </div>
                    ))}
                </div>
            </main>
        </>
    )
}

export default ViewEmployees
