'use client'
import { MdEdit } from 'react-icons/md'
import { User } from '@/types/user'
import React, { useEffect, useState } from 'react'
import {
    Button,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Select,
    SelectItem,
    useDisclosure
} from '@nextui-org/react'
import { FaUser } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import axios from 'axios'
import { getUserToken } from '@/utils/serverUtils'
import { revalidatePath } from 'next/cache'
import { updateUser } from '@/actions/user-actions'
import { Simulate } from 'react-dom/test-utils'
import error = Simulate.error
import Alert from '@/components/Alert'

export function EditButton({ user }: { user: User }) {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
    const [name, setName] = useState<string>(user?.name)
    const [email, setEmail] = useState<string>(user?.email)
    const [role, setRole] = useState<any>(
        new Set([user.isAdmin ? 'Admin' : 'Organizing Committee'])
    )
    const [isSuccess, setIsSuccess] = useState(false)
    const [isError, setIsError] = useState(false)

    const handleEdit = async () => {
        const { success, error } = await updateUser(user._id, {
            name,
            email,
            isAdmin: role.currentKey === 'Admin'
        })
        if (success) {
            setIsSuccess(true)
            setIsError(false)
        } else {
            setIsSuccess(false)
            setIsError(true)
        }
        onClose()
    }

    return (
        <div>
            <Button
                isIconOnly
                onPress={onOpen}
                className="bg-transparent text-primary text-xl"
            >
                <MdEdit className="text-xl" />
            </Button>

            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                backdrop="blur"
                className="dark:text-white dark:border-white dark:bg-boxdark"
            >
                <ModalContent>
                    {onClose => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                Edit User
                            </ModalHeader>
                            <ModalBody>
                                <Input
                                    autoFocus
                                    endContent={
                                        <FaUser className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    label="Name"
                                    value={name}
                                    onValueChange={setName}
                                    placeholder="Enter User Name"
                                    variant="bordered"
                                />
                                <Input
                                    endContent={
                                        <IoIosMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    label="Email"
                                    type="email"
                                    placeholder="Enter User Email"
                                    value={email}
                                    onValueChange={setEmail}
                                    variant="bordered"
                                />
                                <Select
                                    label="User Role"
                                    variant="bordered"
                                    onSelectionChange={setRole}
                                    selectedKeys={role}
                                >
                                    <SelectItem
                                        key={'Organizing Committee'}
                                        value={'Organizing Committee'}
                                    >
                                        Organizing Committee
                                    </SelectItem>
                                    <SelectItem key={'Admin'} value={'Admin'}>
                                        Admin
                                    </SelectItem>
                                </Select>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="danger"
                                    variant="light"
                                    onPress={onClose}
                                >
                                    Close
                                </Button>
                                <Button color="primary" onPress={handleEdit}>
                                    Edit
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
            {isError && (
                <Alert
                    type="error"
                    message={error.toString()}
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
