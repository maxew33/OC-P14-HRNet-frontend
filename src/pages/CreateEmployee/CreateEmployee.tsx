import React, { FormEvent, useState } from 'react'
import Header from '../../components/Header/Header'
import { NavLink } from 'react-router-dom'

const CreateEmployee: React.FC = () => {
    interface dataFormat {
        firstName: string
        lastName: string
        birthday: number
        street: string
        city: string
        state: string
        zipCode: number
        startDate: number
        department: string
    }

    const [inputData, setInputData] = useState<dataFormat>({
        firstName: '',
        lastName: '',
        startDate: 0,
        department: '',
        birthday: 0,
        street: '',
        city: '',
        state: '',
        zipCode: 0,
    })

    const handleInput = (e: FormEvent, id: string) => {
        const target = e.target as HTMLFormElement
        setInputData({ ...inputData, [id]: target.value })
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        console.log(inputData)
    }

    return (
        <>
            <Header />
            <main data-testid="createEmployee">
                <NavLink data-testid="link" to="/view" className="link">
                    View employees
                </NavLink>
                <form className="content-wrapper">
                    <h2 className="wrapper-title">Create employee</h2>
                    <div className="inputs-wrapper id-infos">
                        <div className="input-wrapper">
                            <label htmlFor="firstName"> First name : </label>
                            <input
                                type="text"
                                name=""
                                id="firstName"
                                onInput={(e) => handleInput(e, 'firstName')}
                                required
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="lastName"> Last name : </label>
                            <input
                                type="text"
                                name=""
                                id="lastName"
                                onInput={(e) => handleInput(e, 'lastName')}
                                required
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="birthdate"> Date of birth : </label>
                            <input
                                type="text"
                                name=""
                                id="birthdate"
                                onInput={(e) => handleInput(e, 'birthday')}
                                required
                            />
                        </div>
                    </div>
                    <div className="inputs-wrapper address-infos">
                        <div className="input-wrapper">
                            <label htmlFor="street">Street : </label>
                            <input
                                type="text"
                                name=""
                                id="street"
                                onInput={(e) => handleInput(e, 'street')}
                                required
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="city">City : </label>
                            <input
                                type="text"
                                name=""
                                id="city"
                                onInput={(e) => handleInput(e, 'city')}
                                required
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="state">State : </label>
                            <input
                                type="text"
                                name=""
                                id="state"
                                onInput={(e) => handleInput(e, 'state')}
                                required
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="zip">Zip code : </label>
                            <input
                                type="text"
                                name=""
                                id="zip"
                                onInput={(e) => handleInput(e, 'zipCode')}
                                required
                            />
                        </div>
                    </div>
                    <div className="inputs-wrapper work-infos">
                        <div className="input-wrapper">
                            <label htmlFor="start">Start date : </label>
                            <input
                                type="text"
                                name=""
                                id="start"
                                onInput={(e) => handleInput(e, 'startDate')}
                                required
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="dep">Department : </label>
                            <input
                                type="text"
                                name=""
                                id="dep"
                                onInput={(e) => handleInput(e, 'department')}
                                required
                            />
                        </div>
                    </div>
                    <button onClick={handleSubmit} className='save-btn'>save</button>
                </form>
            </main>
        </>
    )
}

export default CreateEmployee
