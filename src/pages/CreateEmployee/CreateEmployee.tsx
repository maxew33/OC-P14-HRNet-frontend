import React, { FormEvent, useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import { NavLink } from 'react-router-dom'
import Dropdown from '../../components/Dropdown/Dropdown'
import { department, usStates } from '../../data/dropdownsData'
import { dataFormat, dataValidationType } from '../../types/datatTypes'
import { employeesAtom } from '../../main'
import { useAtom } from 'jotai'
import { MessageModal } from '../../components/MessageModal/MessageModal'

const CreateEmployee: React.FC = () => {
    // get / set the data from the global state
    const [employees, setEmployees] = useAtom(employeesAtom)

    // get / set the data from the form
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

    // when the form is submitted, check if the form are correctly filled
    
    const [dataSubmitted, setDataSubmitted] = useState(false)

    const [dataValidation, setDataValidation] = useState<dataValidationType>({
        firstName: true,
        lastName: true,
        startDate: true,
        department: true,
        birthday: true,
        street: true,
        city: true,
        state: true,
        zipCode: true,
    })

    const [dataValidated, setDataValidated] = useState(false)


    const handleInput = (e: FormEvent, id: string) => {
        const target = e.target as HTMLFormElement
        setInputData({ ...inputData, [id]: target.value })
    }

    const selectItem = (id: string, value: string) => {
        setInputData({ ...inputData, [id]: value })
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        const finalValidation: boolean[] = []
        const updatedValidationData: Partial<dataValidationType> = {}

        for (const key in inputData) {
            const validated = inputData[key as keyof dataFormat] ? true : false
            updatedValidationData[key as keyof dataValidationType] = validated
            finalValidation.push(validated)
        }

        setDataValidation({ ...dataValidation, ...updatedValidationData })

        finalValidation.every((value) => value === true)
            ? validateData()
            : setDataSubmitted(true)
    }

    //data are validated => update the global state
    const validateData = async () => {
        setEmployees([...employees, inputData])

        setDataValidated(true)

        setDataSubmitted(true)
    }

    const clearData = () => {

        setDataValidated(false)

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

        setDataValidation({
            firstName: true,
            lastName: true,
            startDate: true,
            department: true,
            birthday: true,
            street: true,
            city: true,
            state: true,
            zipCode: true,
        })
    }

    const handleConfirm = (e: FormEvent) => {
        e.preventDefault()

        dataValidated && clearData()

        setDataSubmitted(false)
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
                                (!dataValidation.firstName ? ' error' : '')
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
                                (!dataValidation.lastName ? ' error' : '')
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
                                (!dataValidation.birthday ? ' error' : '')
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
                                (!dataValidation.street ? ' error' : '')
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
                                (!dataValidation.city ? ' error' : '')
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
                                (!dataValidation.state ? ' error' : '')
                            }
                        >
                            <Dropdown
                                currentValue={inputData.state}
                                items={usStates}
                                dataName="state"
                                selectItem={selectItem}
                            />
                        </div>
                        <div
                            className={
                                'input-wrapper' +
                                (!dataValidation.zipCode ? ' error' : '')
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
                                (!dataValidation.startDate ? ' error' : '')
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
                                (!dataValidation.department ? ' error' : '')
                            }
                        >
                            <Dropdown
                                currentValue={inputData.department}
                                items={department}
                                dataName="department"
                                selectItem={selectItem}
                            />
                        </div>
                    </div>
                    <button onClick={handleSubmit} className="create-btn">
                        save
                    </button>
                </form>
                {dataSubmitted && (
                    <MessageModal
                        message={
                            dataValidated
                                ? `${inputData.firstName} ${inputData.lastName} has been added`
                                : `red field${Object.values(dataValidation).filter((value) => value === false).length > 1 ? 's' : ''} ${Object.values(dataValidation).filter((value) => value === false).length > 1 ? 'were' : 'was'} not filled properly.`
                        }
                        confirm={handleConfirm}
                    />
                )}
            </main>
        </>
    )
}

export default CreateEmployee
