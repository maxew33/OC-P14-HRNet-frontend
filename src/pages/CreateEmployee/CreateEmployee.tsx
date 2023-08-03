import React from 'react'
import Header from '../../components/Header/Header'
import { NavLink } from 'react-router-dom'

const CreateEmployee: React.FC = () => {
    return (
        <>
            <Header />
            <main data-testid="createEmployee">
                hello createEmployee
                <NavLink to="/view">voir les employés</NavLink>
            </main>
        </>
    )
}

export default CreateEmployee
