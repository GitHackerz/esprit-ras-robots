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
import { AddTeam } from '@/actions/team-actions'

export default function AddTeamModal({
    team,
    isOpen,
    onOpenChange,
    onClose,
    setIsSuccess,
    setIsError,
    setError
}) {
    const [name, setName] = useState(team.name || '')
    const [email, setEmail] = useState(team.email || '')
    const [challenge, setChallenge] = useState(new Set([team.challenge]))
    const [establishment, setEstablishment] = useState(team.establishment || '')
    const [club, setClub] = useState(team.club || '')
    const [teams, setTeams] = useState([{
        email: "",
        name: "",
        phone: ""

        
    }])

    const handleSubmit = async () => {
        const { success, error } = await AddTeam({
            name,
            email,
            challenge: challenge.currentKey,
            establishment,
            club
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
                                label="Establishment"
                                value={establishment}
                                onValueChange={setEstablishment}
                                placeholder="Enter Team Establishment"
                                variant="bordered"
                            />
                            <Input
                                endContent={
                                    <FaLock className="text-2xl  text-default-400 pointer-events-none flex-shrink-0" />
                                }
                                label="Club"
                                value={club}
                                onValueChange={setClub}
                                placeholder="Enter Team Club"
                                variant="bordered"
                            />
                            <Select
                                label="Team Challenge"
                                name="role"
                                variant="bordered"
                                selectedKeys={challenge}
                                onSelectionChange={setChallenge}
                            >
                                <SelectItem
                                    key={'Autonomous'}
                                    value={'Autonomous'}
                                >
                                    Autonomous
                                </SelectItem>
                                <SelectItem
                                    key={'All Terrain'}
                                    value={'All Terrain'}
                                >
                                    All Terrain
                                </SelectItem>
                                <SelectItem key={'Fighter'} value={'Fighter'}>
                                    Fighter
                                </SelectItem>
                                <SelectItem key={'Junior'} value={'Junior'}>
                                    Junior
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
                                Edit
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}

//props
AddTeamModal.defaultProps = {
    team: {
        name: 'John Doe',
        email: '',
        challenge: new Set(),
        establishment: '',
        club: ''
    },
    isOpen: false,
    onOpenChange: () => {},
    onClose: () => {},
    setIsSuccess: () => {},
    setIsError: () => {},
    setError: () => {}
}
