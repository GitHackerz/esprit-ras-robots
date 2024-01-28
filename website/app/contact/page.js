'use client'

import Header from '@components/Header'
import './style.css'
import Input from '@components/Input'
import { Button } from '@nextui-org/react'
import { sendMail } from '@/app/actions'
import { useFormState, useFormStatus } from 'react-dom'
import { useEffect, useRef, useState } from 'react'
import Alert from '@components/Alert'

const initialState = {
    email: '',
    subject: '',
    name: '',
    phone: '',
    message: ''
}

const SubmitButton = () => {
    const { pending } = useFormStatus()

    return (
        <Button
            className="bg-primary text-white w-[40%] self-center"
            type="submit"
            isLoading={pending}
        >
            Send
        </Button>
    )
}

export default function Contact() {
    const [state, formAction] = useFormState(sendMail, initialState)
    const [isError, setIsError] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const formRef = useRef(null)

    const resetForm = () => {
        formRef.current.setAttribute('action', '') // Reset action
        formRef.current.reset() // Reset input values
    }

    useEffect(() => {
        if (formRef.current && state.success) {
            setIsError(false)
            setIsSuccess(true)
            resetForm()
        } else if (formRef.current && state.errors) {
            setIsSuccess(false)
            setIsError(true)
        } else if (formRef.current && state.error) {
            setIsSuccess(false)
            setIsError(true)
        }
    }, [state])

    return (
        <main>
            <Header title="Contact Us" />
            <section className="flex flex-row flex-wrap items-center justify-center">
                <form
                    ref={formRef}
                    action={formAction}
                    className="contact-form "
                >
                    <h1>Contact Us</h1>
                    <div className="flex flex-col gap-2 w-full ">
                        <Input
                            label="Email"
                            name="email"
                            error={state?.errors?.email && state?.errors?.email}
                        />
                        <Input
                            label="Subject"
                            name="subject"
                            error={
                                state?.errors?.subject && state?.errors?.subject
                            }
                        />
                        <div className="flex md:flex-row flex-col gap-4">
                            <Input
                                label="Name"
                                name="name"
                                error={
                                    state?.errors?.name && state?.errors?.name
                                }
                            />
                            <Input
                                label="Phone"
                                name="phone"
                                error={
                                    state?.errors?.phone && state?.errors?.phone
                                }
                            />
                        </div>
                        <Input
                            isTextArea
                            label="Message"
                            name="message"
                            error={
                                state?.errors?.message && state?.errors?.message
                            }
                        />
                    </div>
                    <SubmitButton />
                </form>
            </section>
            {isSuccess && (
                <Alert
                    message="Message sent successfully"
                    type="success"
                    reset={() => {
                        setIsSuccess(false)
                    }}
                />
            )}
            {isError && (
                <Alert
                    message="Error occured while contacting us. Please try again later."
                    type="error"
                    reset={() => {
                        setIsError(false)
                    }}
                />
            )}
        </main>
    )
}
