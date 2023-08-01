import React from 'react'
import Header from '../components/Header'

import { NavLink } from 'react-router-dom'

interface viewEmployeesProps {}

const ViewEmployees: React.FC<viewEmployeesProps> = () => {
    return (
        <>
            <Header />
            <main data-testid="viewEmployees">
                hello viewEmployees
                <NavLink to="/">Créer un employé</NavLink>
            </main>
        </>
    )
}

export default ViewEmployees
