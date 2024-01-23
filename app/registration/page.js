'use client'
import './style.css'
import { createTeam } from '@/app/actions'
import { useFormState } from 'react-dom'
import { Button } from '@nextui-org/react'

const initialState = {
    name: '',
    challenge: '',
    establishment: '',
    club: '',
    team1: {
        email: '',
        name: '',
        phone: ''
    },
    team2: {
        email: '',
        name: '',
        phone: ''
    },
    team3: {
        email: '',
        name: '',
        phone: ''
    }
}

const Input = ({ label, name, error, isSelectMenu }) => (
    <div className="flex flex-col w-full">
        <label className="text-white font-normal">{label}</label>
        {isSelectMenu ? (
            <select className="bg-gray rounded-lg px-4 py-3" name={name}>
                <option value="">Select a Challenge</option>
                <option value="Junior">Junior</option>
                <option value="Line Follower">Line Follower</option>
                <option value="All Terrain">All Terrain</option>
                <option value="Fighter">Fighter</option>
            </select>
        ) : (
            <input
                className="bg-gray rounded-lg px-4 py-2"
                placeholder={label}
                name={name}
            />
        )}

        {error && <span className="text-red-500 text-xs">{error}</span>}
    </div>
)

const Registration = () => {
    const [state, formAction] = useFormState(createTeam, initialState)
    return (
        <main className="container-registration">
            <section className="header">
                <h1>Registration</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    mattis.
                </p>
            </section>
            <section className="registration-form">
                <h1>Register Your Team</h1>
                <form
                    action={formAction}
                    className="flex flex-col gap-8 w-[60%]"
                >
                    <div className="flex flex-col gap-4">
                        <h2>
                            Team Informations <span>(*)</span>
                        </h2>
                        <div className="flex flex-col gap-1">
                            <Input
                                label="TeamName"
                                name="name"
                                error={
                                    state?.errors?.name && state?.errors?.name
                                }
                            />
                            <Input
                                isSelectMenu
                                label="Challenge"
                                name="challenge"
                                error={
                                    state?.errors?.challenge &&
                                    state?.errors?.challenge
                                }
                            />
                            <div className="flex flex-row gap-4 w-full">
                                <Input
                                    label="Establishment"
                                    name="establishment"
                                    error={
                                        state?.errors?.establishment &&
                                        state?.errors?.establishment
                                    }
                                />
                                <Input
                                    label="Club"
                                    name="club"
                                    error={
                                        state?.errors?.club && state.errors.club
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2>
                            Team Leader Informations <span>(*)</span>
                        </h2>
                        <div className="flex flex-col gap-1">
                            <Input
                                label="Email"
                                name="team1.email"
                                error={
                                    state?.errors &&
                                    'team1.email' in state.errors &&
                                    state.errors['team1.email']
                                }
                            />
                            <div className="flex flex-row gap-4">
                                <Input
                                    label="Name"
                                    name="team1.name"
                                    error={
                                        state?.errors &&
                                        'team1.name' in state.errors &&
                                        state.errors['team1.name']
                                    }
                                />
                                <Input
                                    label="Phone"
                                    name="team1.phone"
                                    error={
                                        state?.errors &&
                                        'team1.phone' in state.errors &&
                                        state.errors['team1.phone']
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2>
                            Team Member (2) Informations <span>(*)</span>
                        </h2>
                        <div className="flex flex-col gap-1">
                            <Input
                                label="Email"
                                name="team2.email"
                                error={
                                    state?.errors &&
                                    'team2.email' in state.errors &&
                                    state.errors['team2.email']
                                }
                            />
                            <div className="flex flex-row gap-4">
                                <Input
                                    label="Name"
                                    name="team2.name"
                                    error={
                                        state?.errors &&
                                        'team2.name' in state.errors &&
                                        state.errors['team2.name']
                                    }
                                />
                                <Input
                                    label="Phone"
                                    name="team2.phone"
                                    error={
                                        state?.errors &&
                                        'team2.phone' in state.errors &&
                                        state.errors['team2.phone']
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2>
                            Team Member (3) Informations <span>(*)</span>
                        </h2>
                        <div className="flex flex-col gap-1">
                            <Input
                                label="Email"
                                name="team3.email"
                                error={
                                    state?.errors &&
                                    'team3.email' in state.errors &&
                                    state.errors['team3.email']
                                }
                            />
                            <div className="flex flex-row gap-4">
                                <Input
                                    label="Name"
                                    name="team3.name"
                                    error={
                                        state?.errors &&
                                        'team3.name' in state.errors &&
                                        state.errors['team3.name']
                                    }
                                />
                                <Input
                                    label="Phone"
                                    name="team3.phone"
                                    error={
                                        state?.errors &&
                                        'team3.phone' in state.errors &&
                                        state.errors['team3.phone']
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <Button
                        type="submit"
                        className="bg-primary text-white w-[40%] self-center"
                    >
                        Register
                    </Button>
                </form>
            </section>
        </main>
    )
}

export default Registration
