import React, { FormEvent, useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import { NavLink } from 'react-router-dom'
import Dropdown from '../../components/Dropdown/Dropdown'
import { department, usStates } from '../../data/dropdownsData'
import { dataFormat, dataValidationType } from '../../types/datatTypes'
import { employeesAtom } from '../../main'
import { useAtom } from 'jotai'
import CallData from '../../CallData/CallData'

const CreateEmployee: React.FC = () => {

    const [inputData, setInputData] = useState<dataFormat>({
        firstName: null,
        lastName: null,
        startDate: null,
        department: null,
        birthday: null,
        street: null,
        city: null,
        state: null,
        zipCode: null,
    })

    const [formSubmitted, setFormSubmitted] = useState(false)

    const [dataValidation, setDataValidation] = useState<dataValidationType>({
        firstName: false,
        lastName: false,
        startDate: false,
        department: false,
        birthday: false,
        street: false,
        city: false,
        state: false,
        zipCode: false,
    })

    const [dataAdded, setDataAdded] = useState(false)

    const [employees, setEmployees] = useAtom(employeesAtom)

    // useEffect(() => {
    //     if (employees.length === 0) {
    //         const fetchData = async () => {
    //             const url = ''

    //             const callData = new CallData(url)

    //             const employeesData = await callData.getEmployeesData()

    //             setEmployees([...employees, ...employeesData])
    //         }

    //         fetchData()
    //     }
    // }, [])

    const handleInput = (e: FormEvent, id: string) => {
        const target = e.target as HTMLFormElement
        setInputData({ ...inputData, [id]: target.value })
    }

    const selectItem = (id: string, value: string) => {
        setInputData({ ...inputData, [id]: value })
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        const finalValidation: boolean[] = []
        const updatedValidationData: Partial<dataValidationType> = {}

        // verif les données
        for (const key in inputData) {
            const validated = inputData[key as keyof dataFormat] ? true : false
            updatedValidationData[key as keyof dataValidationType] = validated
            finalValidation.push(validated)
        }

        setDataValidation({ ...dataValidation, ...updatedValidationData })
        finalValidation.every((value) => value === true) && setDataAdded(true)

        setFormSubmitted(true)
    }

    const handleConfirm = (e: FormEvent) => {
        e.preventDefault()

        setEmployees([...employees, inputData])

        setInputData({
            firstName: null,
            lastName: null,
            startDate: null,
            department: null,
            birthday: null,
            street: null,
            city: null,
            state: null,
            zipCode: null,
        })

        setFormSubmitted(false)

        setDataAdded(false)
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
                        <div
                            className={
                                'input-wrapper' +
                                (formSubmitted && !dataValidation.firstName
                                    ? ' error'
                                    : '')
                            }
                        >
                            <label htmlFor="firstName"> First name : </label>
                            <input
                                value={inputData.firstName ?? ''}
                                type="text"
                                name=""
                                id="firstName"
                                onInput={(e) => handleInput(e, 'firstName')}
                                required
                            />
                        </div>
                        <div
                            className={
                                'input-wrapper' +
                                (formSubmitted && !dataValidation.lastName
                                    ? ' error'
                                    : '')
                            }
                        >
                            <label htmlFor="lastName"> Last name : </label>
                            <input
                                value={inputData.lastName ?? ''}
                                type="text"
                                name=""
                                id="lastName"
                                onInput={(e) => handleInput(e, 'lastName')}
                                required
                            />
                        </div>
                        <div
                            className={
                                'input-wrapper' +
                                (formSubmitted && !dataValidation.birthday
                                    ? ' error'
                                    : '')
                            }
                        >
                            <label htmlFor="birthdate"> Date of birth : </label>
                            <input
                                value={inputData.birthday ?? ''}
                                type="date"
                                name=""
                                id="birthdate"
                                onInput={(e) => handleInput(e, 'birthday')}
                                required
                            />
                        </div>
                    </div>
                    <div className="inputs-wrapper address-infos">
                        <div
                            className={
                                'input-wrapper' +
                                (formSubmitted && !dataValidation.street
                                    ? ' error'
                                    : '')
                            }
                        >
                            <label htmlFor="street">Street : </label>
                            <input
                                value={inputData.street ?? ''}
                                type="text"
                                name=""
                                id="street"
                                onInput={(e) => handleInput(e, 'street')}
                                required
                            />
                        </div>
                        <div
                            className={
                                'input-wrapper' +
                                (formSubmitted && !dataValidation.city
                                    ? ' error'
                                    : '')
                            }
                        >
                            <label htmlFor="city">City : </label>
                            <input
                                value={inputData.city ?? ''}
                                type="text"
                                name=""
                                id="city"
                                onInput={(e) => handleInput(e, 'city')}
                                required
                            />
                        </div>
                        <div
                            className={
                                'input-wrapper' +
                                (formSubmitted && !dataValidation.state
                                    ? ' error'
                                    : '')
                            }
                        >
                            <Dropdown
                                currentValue={inputData.state}
                                items={usStates}
                                dataId="state"
                                selectItem={selectItem}
                            />
                        </div>
                        <div
                            className={
                                'input-wrapper' +
                                (formSubmitted && !dataValidation.zipCode
                                    ? ' error'
                                    : '')
                            }
                        >
                            <label htmlFor="zip">Zip code : </label>
                            <input
                                value={inputData.zipCode ?? ''}
                                type="text"
                                name=""
                                id="zip"
                                onInput={(e) => handleInput(e, 'zipCode')}
                                required
                            />
                        </div>
                    </div>
                    <div className="inputs-wrapper work-infos">
                        <div
                            className={
                                'input-wrapper' +
                                (formSubmitted && !dataValidation.startDate
                                    ? ' error'
                                    : '')
                            }
                        >
                            <label htmlFor="start">Start date : </label>
                            <input
                                value={inputData.startDate ?? ''}
                                type="date"
                                name=""
                                id="start"
                                onInput={(e) => handleInput(e, 'startDate')}
                                required
                            />
                        </div>
                        <div
                            className={
                                'input-wrapper' +
                                (formSubmitted && !dataValidation.department
                                    ? ' error'
                                    : '')
                            }
                        >
                            <Dropdown
                                currentValue={inputData.department}
                                items={department}
                                dataId="department"
                                selectItem={selectItem}
                            />
                        </div>
                    </div>
                    <button onClick={handleSubmit} className="create-btn">
                        save
                    </button>
                </form>
                {dataAdded && (
                    <div className="confirm-modal">
                        <div className="confirm-modal-wrapper">
                            {inputData.firstName} {inputData.lastName} <br />
                            has been added
                            <button
                                className="create-btn"
                                onClick={handleConfirm}
                            >
                                OK
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </>
    )
}

export default CreateEmployee
