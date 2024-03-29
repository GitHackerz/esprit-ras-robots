import {
    Button,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Select,
    SelectItem
} from '@nextui-org/react'
import { FaLock, FaUser } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'
import { useState } from 'react'
import { AddUser } from '@/actions/user-actions'

export default function AddUserModal({
    user,
    isOpen,
    onOpenChange,
    onClose,
    setIsSuccess,
    setIsError,
    setError
}) {
    const [_id, setId] = useState(user.id)
    const [name, setName] = useState(user.name || '')
    const [email, setEmail] = useState(user.email || '')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState(
        new Set([user.isAdmin ? 'Admin' : 'Organizing Committee'])
    )

    const handleSubmit = async () => {
        const { success, error } = await AddUser({
            _id,
            name,
            email,
            password,
            isAdmin: role.currentKey === 'Admin'
        })
        if (success) {
            setIsSuccess(true)
            setIsError(false)
        } else {
            setError(error)
            setIsSuccess(false)
            setIsError(true)
        }
        onClose()
    }

    return (
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
                                endContent={
                                    <IoMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                }
                                label="ID"
                                type="number"
                                value={_id}
                                onValueChange={setId}
                                placeholder="Enter User Email"
                                variant="bordered"
                            />
                            <Input
                                autoFocus
                                endContent={
                                    <FaUser className="text-2xl  text-default-400 pointer-events-none flex-shrink-0" />
                                }
                                label="Name"
                                value={name}
                                onValueChange={setName}
                                placeholder="Enter User Name"
                                variant="bordered"
                            />
                            <Input
                                endContent={
                                    <IoMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                }
                                label="Email"
                                type="email"
                                value={email}
                                onValueChange={setEmail}
                                placeholder="Enter User Email"
                                variant="bordered"
                            />
                            <Input
                                endContent={
                                    <FaLock className="text-2xl  text-default-400 pointer-events-none flex-shrink-0" />
                                }
                                label="Password"
                                type="password"
                                value={password}
                                onValueChange={setPassword}
                                placeholder="Enter User Password"
                                variant="bordered"
                            />
                            <Select
                                label="User Role"
                                name="role"
                                variant="bordered"
                                selectedKeys={role}
                                className="max-w-lg"
                                onSelectionChange={setRole}
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
                            <Button onPress={handleSubmit} color="primary">
                                Add
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}

//props
AddUserModal.defaultProps = {
    user: {
        name: '',
        email: '',
        isAdmin: false
    },
    isOpen: false,
    onOpenChange: () => {}
}
