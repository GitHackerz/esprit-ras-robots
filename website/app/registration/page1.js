'use client'

import './style.css'
import { createTeam } from '@/app/actions'
import { useFormState, useFormStatus } from 'react-dom'
import Header from '@components/Header'
import Input from '@components/Input'
import { Button, useDisclosure } from '@nextui-org/react'
import Alert from '@components/Alert'
import { useEffect, useRef, useState } from 'react'
import ConfirmModal from '@components/ConfirmModal'
import axios from 'axios'

const initialState = {
    name: '',
    challenge: '',
    establishment: '',
    club: '',
    team1: {
        email: '',
        name: '',
        phone: ''
    },
    team2: {
        email: '',
        name: '',
        phone: ''
    },
    team3: {
        email: '',
        name: '',
        phone: ''
    }
}

export function SubmitButton() {
    const { pending } = useFormStatus()
    return (
        <Button
            isLoading={pending}
            className="bg-primary text-white w-[40%] self-center "
            type={'submit'}
        >
            Add
        </Button>
    )
}

const Registration = () => {
    const [state, formAction] = useFormState(createTeam, initialState)
    const [isError, setIsError] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState(null)
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()

    const formRef = useRef(null)

    const resetForm = () => {
        formRef.current.setAttribute('action', '')
        formRef.current.reset()
    }

    useEffect(() => {
        if (formRef.current && state.errors) {
            setIsSuccess(false)
            setIsError(true)
        } else if (formRef.current && state.error) {
            setIsSuccess(false)
            setIsError(true)
        }
    }, [state])

    useEffect(() => {
        if (state.success) {
            onOpen()
        }
    }, [onOpen, state])

    const handleConfirm = async data => {
        try {
            await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/teams`, {
                ...data,
                email: data.teams[0].email
            })
            resetForm()
            setIsError(false)
            setIsSuccess(true)
            onClose()
        } catch (err) {
            console.log(err.response.data.error)
            setError(err?.response?.data?.error)
            setIsSuccess(false)
            setIsError(true)
            onClose()
        }
    }

    return (
        <main className="container-registration">
            <Header title="Registration" />

            <section className="registration-form">
                <h1>Register Your Team</h1>
                <form
                    ref={formRef}
                    action={formAction}
                    className="flex flex-col gap-8 md:w-[60%] w-[80%]"
                >
                    <div className="flex flex-col gap-4">
                        <h2>
                            Team Informations <span>(*)</span>
                        </h2>
                        <div className="flex flex-col gap-1">
                            <Input
                                label="TeamName"
                                name="name"
                                error={
                                    state?.errors?.name && state?.errors?.name
                                }
                            />
                            <Input
                                isSelectMenu
                                label="Challenge"
                                name="challenge"
                                error={
                                    state?.errors?.challenge &&
                                    state?.errors?.challenge
                                }
                            />
                            <div className="flex xl:flex-row flex-col  gap-4 w-full">
                                <Input
                                    label="Establishment"
                                    name="establishment"
                                    error={
                                        state?.errors?.establishment &&
                                        state?.errors?.establishment
                                    }
                                />
                                <Input
                                    label="Club"
                                    name="club"
                                    error={
                                        state?.errors?.club && state.errors.club
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2>
                            Team Leader Informations <span>(*)</span>
                        </h2>
                        <div className="flex flex-col gap-1">
                            <Input
                                label="Email"
                                name="team1.email"
                                error={
                                    state?.errors &&
                                    'team1.email' in state.errors &&
                                    state.errors['team1.email']
                                }
                            />
                            <div className="flex md:flex-row flex-col gap-4">
                                <Input
                                    label="Name"
                                    name="team1.name"
                                    error={
                                        state?.errors &&
                                        'team1.name' in state.errors &&
                                        state.errors['team1.name']
                                    }
                                />
                                <Input
                                    label="Phone"
                                    name="team1.phone"
                                    error={
                                        state?.errors &&
                                        'team1.phone' in state.errors &&
                                        state.errors['team1.phone']
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2>Team Member (2) Informations</h2>
                        <div className="flex flex-col gap-1">
                            <Input
                                label="Email"
                                name="team2.email"
                                error={
                                    state?.errors &&
                                    'team2.email' in state.errors &&
                                    state.errors['team2.email']
                                }
                            />
                            <div className="flex md:flex-row flex-col gap-4">
                                <Input
                                    label="Name"
                                    name="team2.name"
                                    error={
                                        state?.errors &&
                                        'team2.name' in state.errors &&
                                        state.errors['team2.name']
                                    }
                                />
                                <Input
                                    label="Phone"
                                    name="team2.phone"
                                    error={
                                        state?.errors &&
                                        'team2.phone' in state.errors &&
                                        state.errors['team2.phone']
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2>Team Member (3) Informations</h2>
                        <div className="flex flex-col gap-1">
                            <Input
                                label="Email"
                                name="team3.email"
                                error={
                                    state?.errors &&
                                    'team3.email' in state.errors &&
                                    state.errors['team3.email']
                                }
                            />
                            <div className="flex md:flex-row flex-col gap-4">
                                <Input
                                    label="Name"
                                    name="team3.name"
                                    error={
                                        state?.errors &&
                                        'team3.name' in state.errors &&
                                        state.errors['team3.name']
                                    }
                                />
                                <Input
                                    label="Phone"
                                    name="team3.phone"
                                    error={
                                        state?.errors &&
                                        'team3.phone' in state.errors &&
                                        state.errors['team3.phone']
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <SubmitButton />
                </form>
                <ConfirmModal
                    team={state.data}
                    onConfirm={() => handleConfirm(state.data)}
                    onOpenChange={onOpenChange}
                    isOpen={isOpen}
                />
                {isSuccess && (
                    <Alert
                        message="Your team has been registered successfully!"
                        type="success"
                        reset={() => {
                            setIsSuccess(false)
                        }}
                    />
                )}
                {isError && (
                    <Alert
                        message={
                            state.errors
                                ? 'Please verify the informations!'
                                : error
                        }
                        type="error"
                        reset={() => {
                            setIsError(false)
                        }}
                    />
                )}
            </section>
        </main>
    )
}

export default Registration
