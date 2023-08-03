import React from 'react'
import Header from '../../components/Header/Header'

import { NavLink } from 'react-router-dom'

const ViewEmployees: React.FC= () => {
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
