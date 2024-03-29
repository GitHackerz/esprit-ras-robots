'use client'

import React, { useEffect, useState } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { signin } from '@/actions/user-actions'
import { CiMail } from 'react-icons/ci'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import Alert from '@/components/Alert'
import { useRouter } from 'next/navigation'
import { Button } from '@nextui-org/react'

const SubmitButton = () => {
    const { pending } = useFormStatus()
    return (
        <div className="mb-5">
            <Button
                type="submit"
                value="Sign In"
                className="w-full bg-primary py-7 text-white transition hover:bg-opacity-90"
                radius="lg"
                isLoading={pending}
            >
                Sign In
            </Button>
        </div>
    )
}

const SigninForm = () => {
    // @ts-ignore
    const [state, formAction] = useFormState(signin, {
        email: '',
        password: ''
    })
    const [showPassword, setShowPassword] = useState(false)
    const [isError, setIsError] = useState(false)
    const router = useRouter()

    useEffect(() => {
        if (!state.success && state.error) setIsError(true)
    }, [formAction, router, state])

    return (
        <form action={formAction}>
            <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Email
                </label>
                <div className="relative">
                    <input
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />

                    <span className="absolute right-4 top-4">
                        <CiMail className="text-2xl" />
                    </span>
                </div>
            </div>

            <div className="mb-6">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Re-type Password
                </label>
                <div className="relative">
                    <input
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="6+ Characters, 1 Capital letter"
                        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />

                    <span className="absolute right-4 top-4">
                        {showPassword ? (
                            <FaEye
                                className="text-2xl cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            />
                        ) : (
                            <FaEyeSlash
                                className="text-2xl cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            />
                        )}{' '}
                    </span>
                </div>
            </div>

            <SubmitButton />
            {isError && (
                <Alert
                    message={state.error}
                    type="error"
                    reset={() => setIsError(false)}
                />
            )}
        </form>
    )
}

export default SigninForm
