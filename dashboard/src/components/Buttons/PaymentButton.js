'use client'

import { changeTeamPaymentStatus } from '@/actions/team-actions'
import { Button, Input } from '@nextui-org/react'
import { useFormState, useFormStatus } from 'react-dom'
import { useEffect, useState } from 'react'
import Alert from '@/components/Alert'

const SubmitButton = ({ team }) => {
    const { pending } = useFormStatus()

    return (
        <Button
            type="submit"
            className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                team.isPaid
                    ? 'text-success bg-success'
                    : 'text-danger bg-danger'
            }`}
            isLoading={pending}
        >
            {team.isPaid ? 'Paid' : 'UnPaid'}
        </Button>
    )
}

export default function PaymentButton({ team }) {
    const [state, formAction] = useFormState(changeTeamPaymentStatus, {})
    const [isSuccess, setIsSuccess] = useState(false)
    const [isError, setIsError] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (state.success) {
            setIsSuccess(true)
            setIsError(false)
        } else if (state.error) {
            setIsError(true)
            setError(state.error)
        }
    }, [state])

    return (
        <>
            <form action={formAction}>
                <Input name="id" value={team._id} hidden className="hidden" />
                <Input
                    name="isPaid"
                    value={team.isPaid}
                    hidden
                    className="hidden"
                />
                <SubmitButton team={team} />
            </form>
            {isError && (
                <Alert
                    type="error"
                    title="Error"
                    message={error}
                    reset={() => setIsError(false)}
                />
            )}
            {isSuccess && (
                <Alert
                    type="success"
                    title="Success"
                    message="Team Payment status updated successfully"
                    reset={() => setIsSuccess(false)}
                />
            )}
        </>
    )
}
