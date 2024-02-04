'use client'
import { MdEdit } from 'react-icons/md'
import { Team } from '@/types/team'
import React, { useEffect, useState } from 'react'
import { FaPeopleRoof } from "react-icons/fa6";
import { MdScoreboard } from "react-icons/md";
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
import { FaSchool } from "react-icons/fa";
import { FaUser } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import axios from 'axios'
import { getUserToken } from '@/utils/serverUtils'
import { revalidatePath } from 'next/cache'
import { updateTeam } from '@/actions/team-actions'
import { Simulate } from 'react-dom/test-utils'
import error = Simulate.error
import Alert from '@/components/Alert'

export function EditTeamsButton({ team }: { team: Team }) {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
    const [name, setName] = useState<string>(team?.name)
    const [email, setEmail] = useState<string>(team?.email)
    const [challenge, setChallenge] = useState<Set<string>>(
        new Set([team.challenge])
    );
    const [establishment, setEstablishment] = useState<string>(team?.establishment)
    const [club, setClub] = useState<string>(team?.club)
    const [payment, setPayment] = useState<any>(
        new Set([team.isPaid ? 'Paid' : 'Not Paid'])
    )
    const [presence, setPresence] = useState<any>(
        new Set([team.isPresent ? 'Present' : 'Not Present'])
    )
    const [score, setScore] = useState<number>(team?.score)
/*     const [teams, setTeams]= useState<>
 */    const [isSuccess, setIsSuccess] = useState(false)
    const [isError, setIsError] = useState(false)

    const handleEdit = async () => {
        const { success, error } = await updateTeam(team._id, {
            name,
            email,
            challenge : [...challenge][0],
            establishment,
            club,
            /*     teams: {
                    name,
                    email,
                    phone,
                },  */
            score,
            isPaid: payment.currentKey === 'Paid',
            isPresent: presence.currentKey === 'Present',
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
    const handleScoreChange = (Value: string) => {
        const newScore = parseInt(Value, 10);
        if (!isNaN(newScore)) {
            setScore(newScore);
        }
    };
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
                                Edit Team
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
                                    placeholder="Enter Team Name"
                                    variant="bordered"
                                />
                                <Input
                                    endContent={
                                        <IoIosMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    label="Email"
                                    type="email"
                                    placeholder="Enter Team Email"
                                    value={email}
                                    onValueChange={setEmail}
                                    variant="bordered"
                                />
                                <Input
                                    endContent={
                                        <FaSchool className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    label="Establishment"
                                    placeholder="Enter Team establishment"
                                    value={establishment}
                                    onValueChange={setEstablishment}
                                    variant="bordered"
                                />
                                <Input
                                    endContent={
                                        <FaPeopleRoof className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    label="Club"
                                    placeholder="Enter Team Club"
                                    value={club}
                                    onValueChange={setClub}
                                    variant="bordered"
                                />
                                <Input
                                    endContent={
                                        <MdScoreboard className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    label="Score"
                                    type="number"
                                    placeholder="Enter Team Score"
                                    value={score.toString()}
                                    onValueChange={handleScoreChange}
                                    variant="bordered"
                                />
                                <Select
                                    label="Challenge"
                                    variant="bordered"
                                    onSelectionChange={(setChallenge)}
                                    selectedKeys={challenge}
                                >
                                    <SelectItem key={'Line Follower'} value={'Line Follower'}>
                                        Autonome
                                    </SelectItem>
                                    <SelectItem key={'All Terrain'} value={'All Terrain'}>
                                        All Terrain
                                    </SelectItem>
                                    <SelectItem key={'Fighter'} value={'Fighter'}>
                                        Fighter
                                    </SelectItem>
                                    <SelectItem key={'Junior'} value={'Junior'}>
                                        Junior
                                    </SelectItem>
                                </Select>
                                <Select
                                    label="Payment"
                                    variant="bordered"
                                    onSelectionChange={setPayment}
                                    selectedKeys={payment}
                                >
                                    <SelectItem
                                        key={'Not Paid'}
                                        value={'Not Paid'}
                                    >
                                        Not Paid
                                    </SelectItem>
                                    <SelectItem key={'Paid'} value={'Paid'}>
                                        Paid
                                    </SelectItem>
                                </Select>
                                <Select
                                    label="Presence"
                                    variant="bordered"
                                    onSelectionChange={setPresence}
                                    selectedKeys={presence}
                                >
                                    <SelectItem
                                        key={'Not Present'}
                                        value={'Not Present'}
                                    >
                                        Not Present
                                    </SelectItem>
                                    <SelectItem key={'Present'} value={'Present'}>
                                        Present
                                    </SelectItem>
                                </Select>
                                {team.teams.map((item,index) => 
                                <React.Fragment>
                                <Input
                                endContent={
                                    <FaSchool className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                }
                                label="Establishment"
                                placeholder="Enter Team establishment"
                                value={establishment}
                                onValueChange={setEstablishment}
                                variant="bordered"
                            />
                            <Input
                                    endContent={
                                        <FaSchool className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    label="Establishment"
                                    placeholder="Enter Team establishment"
                                    value={establishment}
                                    onValueChange={setEstablishment}
                                    variant="bordered"
                                />
                                <Input
                                    endContent={
                                        <FaSchool className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    label="Establishment"
                                    placeholder="Enter Team establishment"
                                    value={establishment}
                                    onValueChange={setEstablishment}
                                    variant="bordered"
                                    
                                />
                                </React.Fragment>)}
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
                    message="Team Updated Successfully"
                    reset={() => setIsSuccess(false)}
                />
            )}
        </div>
    )
}
