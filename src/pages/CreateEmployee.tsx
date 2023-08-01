import React from 'react'
import Header from '../components/Header'
import { NavLink } from 'react-router-dom'

interface createEmployeeProps {}

const CreateEmployee: React.FC<createEmployeeProps> = () => {
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
