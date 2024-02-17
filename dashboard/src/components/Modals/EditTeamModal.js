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
import { FaLock, FaPhone, FaPlus, FaUser } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'
import { useEffect, useState } from 'react'
import { updateTeam } from '@/actions/team-actions'
import { GrSubtractCircle } from "react-icons/gr";

export default function EditTeamModal({
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
    const [teams, setTeams] = useState(team.teams)
    const [scrollBehavior, setScrollBehavior] = useState("inside");
    const [isVisible, setisVisible] = useState(true)
    const handleSubmit = async () => {
        const { success, error } = await updateTeam(team._id, {
            name,
            email,
            challenge: challenge.currentKey,
            establishment,
            club,
            teams
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
    useEffect(() => {
        if (teams.length > 2) {
            setisVisible(false);
        }else{
            setisVisible(true);
        }
    }, [teams])
    const handleTeamChange = (index, fieldName, value) => {
        const updatedTeams = [...teams];
        updatedTeams[index][fieldName] = value;
        setTeams(updatedTeams);
    };
    const onAdd = () => {
        setTeams([...teams, { mail: '', name: '', phone: '' }]);
    };
    const onDelete = (indexToRemove) => {
        setTeams(prevTeams => {
            const updatedTeams = prevTeams.filter((team, index) => index !== indexToRemove);
            return updatedTeams;
        });
    }
    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            backdrop="blur"
            className="dark:text-white dark:border-white dark:bg-boxdark"
            scrollBehavior={scrollBehavior}

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
                            {teams.map((team, index) => (
                                <div key={index}>
                                    <div className='flex justify-between'>
                                        <h1>Team Member N°{index + 1}</h1>
                                        {index!=0 && (
                                        <Button isIconOnly color="danger" aria-label="Like" onPress={() => onDelete(index)}>
                                        <GrSubtractCircle />
                                        </Button>)}
                                    </div>
                                    <Input className='mb-2 mt-3'
                                        endContent={
                                            <IoMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                        }

                                        type="text"
                                        value={team.email}
                                        onChange={e => handleTeamChange(index, 'email', e.target.value)}
                                        placeholder="Mail"
                                        variant="bordered"
                                    />
                                    <Input className='mb-2'
                                        endContent={
                                            <FaUser className="text-2xl  text-default-400 pointer-events-none flex-shrink-0" />
                                        }
                                        type="text"
                                        value={team.name}
                                        onChange={e => handleTeamChange(index, 'name', e.target.value)}
                                        placeholder="Name"
                                        variant="bordered"
                                    />
                                    <Input className='mb-2'
                                        endContent={
                                            <FaPhone className="text-2xl  text-default-400 pointer-events-none flex-shrink-0" />
                                        }
                                        type="text"
                                        value={team.phone}
                                        onChange={e => handleTeamChange(index, 'phone', e.target.value)}
                                        placeholder="Phone"
                                        variant="bordered"
                                    />
                                </div>
                            ))}
                            <div className="flex gap-4 items-center">
                                {isVisible && (
                                    <Button
                                        isIconOnly
                                        color="primary"
                                        variant="faded"
                                        className='w-full'
                                        onPress={onAdd}>
                                        <FaPlus />
                                    </Button>)}
                            </div>
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
EditTeamModal.defaultProps = {
    team: {
        name: 'John Doe',
        email: '',
        challenge: new Set(),
        establishment: '',
        club: ''
    },
    isOpen: false,
    onOpenChange: () => { },
    onClose: () => { },
    setIsSuccess: () => { },
    setIsError: () => { },
    setError: () => { }
}
