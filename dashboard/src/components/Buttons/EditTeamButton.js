'use client'
import { MdEdit } from 'react-icons/md'
import React, { useState } from 'react'
import { Button, useDisclosure } from '@nextui-org/react'
import Alert from '@/components/Alert'
import EditUserModal from '@/components/Modals/EditUserModal'
import EditTeamModal from '@/components/Modals/EditTeamModal'

export default function EditTeamButton({ team }) {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()

    const [isSuccess, setIsSuccess] = useState(false)
    const [isError, setIsError] = useState(false)
    const [error, setError] = useState()

    return (
        <div>
            <Button
                isIconOnly
                onPress={onOpen}
                className="bg-transparent text-primary text-xl"
            >
                <MdEdit className="text-xl" />
            </Button>
            <EditTeamModal
                team={team}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                onClose={onClose}
                setIsSuccess={setIsSuccess}
                setIsError={setIsError}
                setError={setError}
            />
            {isError && (
                <Alert
                    type="error"
                    message={error || ''}
                    reset={() => setIsError(false)}
                />
            )}
            {isSuccess && (
                <Alert
                    type="success"
                    message="User Updated Successfully"
                    reset={() => setIsSuccess(false)}
                />
            )}
        </div>
    )
}
