import React from 'react'
import Header from '../../components/Header/Header'

import { NavLink } from 'react-router-dom'

const ViewEmployees: React.FC = () => {
    return (
        <>
            <Header />
            <main data-testid="viewEmployees">
                <NavLink to="/" data-testid="link" className="link">
                    Create employee
                </NavLink>
                <div className="content-wrapper">
                    <h2 className="wrapper-title">View employees</h2>
                    tableau
                </div>
            </main>
        </>
    )
}

export default ViewEmployees
