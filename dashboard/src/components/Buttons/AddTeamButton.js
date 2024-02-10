'use client'
import { MdEdit } from 'react-icons/md'
import React, { useState } from 'react'
import { Button, useDisclosure } from '@nextui-org/react'
import Alert from '@/components/Alert'
import EditUserModal from '@/components/Modals/EditUserModal'
import AddTeamModal from '../Modals/AddTeamModal'

export default function EditTeamButton() {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()

    const [isSuccess, setIsSuccess] = useState(false)
    const [isError, setIsError] = useState(false)
    const [error, setError] = useState()
    const [scrollBehavior, setScrollBehavior] = React.useState("inside");
    return (
        <div>
            <Button
                isIconOnly
                onPress={onOpen}
                className="text-blue-600 hover:text-white bg-transparent hover:bg-blue-900 border xl:px-7.5 items-center w-full"
            >
                Add Team
            </Button>
            <AddTeamModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                onClose={onClose}
                setIsSuccess={setIsSuccess}
                setIsError={setIsError}
                setError={setError}
                scrollBehavior={scrollBehavior}
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
