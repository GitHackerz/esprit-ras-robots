import {
    Button,
    Divider,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Select,
    SelectItem
} from '@nextui-org/react'
import { FaLock, FaPhone, FaUser } from 'react-icons/fa'
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
    const colors = ["success", "warning", "danger"]; // Add more colors as needed

    const [numberValue, setNumberValue] = useState(1);
    const [name, setName] = useState(team.name || '')
    const [email, setEmail] = useState(team.email || '')
    const [challenge, setChallenge] = useState(new Set([team.challenge]))
    const [establishment, setEstablishment] = useState(team.establishment || '')
    const [club, setClub] = useState(team.club || '')
    const [teams, setTeams] = useState([
        {
            mail: '',
            name: '',
            phone: ''
        },
        {
            mail: '',
            name: '',
            phone: ''
        },
        {
            mail: '',
            name: '',
            phone: ''
        }
    ]);

    const removeEmptyTeams = () => {
        const nonEmptyTeams = teams.filter(team => team.mail !== '' || team.name !== '' || team.phone !== '');
        setTeams(nonEmptyTeams);
    };
    
    const handleSubmit = async () => {
        removeEmptyTeams();
        await new Promise(resolve => setTimeout(resolve, 0)); 
        const { success, error } = await AddTeam({
            name,
            email : teams[0].mail,
            challenge: challenge.currentKey,
            establishment,
            club,
            teams,
            score : 0,
            isPaid : false,
            isPresent : false  
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
                            Add Team
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
                                placeholder="Enter Team Name"
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
                                <Divider></Divider>
                            <Input className='mt-1'
                                label="Number of Team members"
                                type="number"
                                min={1}
                                max={3}
                                value={numberValue}
                                onValueChange={setNumberValue}
                                variant="bordered"
                            />

                            {Array.from({ length: numberValue }, (_, index) => (
                                <div className={`justify-between w-full `} key={index}>
                                    <Input color={`${colors[index % colors.length]}`}
                                        label={`Team Member ${index + 1}`}
                                        type="text"
                                        value={teams[index].name}
                                        onValueChange={(value) => {
                                            const newTeams = [...teams];
                                            newTeams[index].name = value;
                                            setTeams(newTeams);
                                        }}
                                        placeholder={`Enter Team Member ${index + 1} Name`}
                                        variant="bordered"
                                    />
                                    <Input color={`${colors[index % colors.length]}`}
                                        endContent={<IoMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                                        label={`Team Member ${index + 1} Email`}
                                        type="email"
                                        value={teams[index].mail}
                                        onValueChange={(value) => {
                                            const newTeams = [...teams];
                                            newTeams[index].mail = value;
                                            setTeams(newTeams);
                                        }}
                                        placeholder={`Enter User ${index + 1} Email`}
                                        variant="bordered"
                                    />
                                    <Input color={`${colors[index % colors.length]}`}
                                        endContent={<FaPhone className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                                        label="Phone Number"
                                        type="tel"
                                        value={teams[index].phone}
                                        onValueChange={(value) => {
                                            const newTeams = [...teams];
                                            newTeams[index].phone = value;
                                            setTeams(newTeams);
                                        }}
                                        placeholder="Enter Phone Number"
                                        variant="bordered"
                                    />
                                </div>
                            ))}
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
                                ADD
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
        name: '',
        email: '',
        challenge: new Set(),
        establishment: '',
        club: '',
    },
    isOpen: false,
    onOpenChange: () => { },
    onClose: () => { },
    setIsSuccess: () => { },
    setIsError: () => { },
    setError: () => { }
}
