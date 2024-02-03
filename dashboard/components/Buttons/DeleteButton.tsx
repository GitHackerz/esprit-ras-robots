'use client'

import { useFormState } from 'react-dom'
import Alert from '@/components/Alert'
import { useEffect, useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { Button } from '@nextui-org/react'

export function DeleteButton({
    deleteFunction,
    id
}: {
    deleteFunction: Function
    id: any
}) {
    // @ts-ignore
    const [state, formAction] = useFormState(deleteFunction, {
        id: '',
        success: false,
        error: ''
    })
    const [isError, setIsError] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    useEffect(() => {
        if (!state.success && state.error) {
            setIsError(true)
            setIsSuccess(false)
        } else if (state.success) {
            setIsError(false)
            setIsSuccess(true)
        }
    }, [state])

    return (
        <form action={formAction}>
            <input hidden name="id" value={id} onChange={() => {}} />
            <Button
                isIconOnly
                type="submit"
                className="bg-transparent text-danger text-lg"
            >
                <FaTrash />
            </Button>
            {isError && (
                <Alert
                    type="error"
                    message={state.error}
                    reset={() => setIsError(false)}
                />
            )}
            {isSuccess && (
                <Alert
                    type="success"
                    message="User Deleted Successfully"
                    reset={() => setIsSuccess(false)}
                />
            )}
        </form>
    )
}
