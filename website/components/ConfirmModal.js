import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader
} from '@nextui-org/react'

export default function ConfirmModal({
    onConfirm,
    isOpen,
    onOpenChange,
    team
}) {
    return (
        <Modal
            size="xl"
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            className="bg-background absolute"
        >
            <ModalContent>
                {onClose => (
                    <>
                        <ModalHeader
                            className="text-white text-2xl font-bold"
                            as="div"
                        >
                            Confirm Application
                        </ModalHeader>

                        <ModalBody className="text-white gap-4">
                            <p>
                                Your Application will be submitted with these
                                information:{' '}
                            </p>
                            <div className="flex flex-col gap-2">
                                <h2 className="text-xl font-bold">
                                    Team Information
                                </h2>
                                <ul>
                                    <li>
                                        <span className="text-primary font-semibold">
                                            Name:
                                        </span>{' '}
                                        {' ' + team.name}
                                    </li>
                                    <li>
                                        <span className="text-primary font-semibold">
                                            Challenge:
                                        </span>{' '}
                                        {' ' + team.challenge}
                                    </li>
                                    <li>
                                        <span className="text-primary font-semibold">
                                            Establishment:{' '}
                                        </span>
                                        {' ' + team.establishment}
                                    </li>
                                    <li>
                                        <span className="text-primary font-semibold">
                                            Club:{' '}
                                        </span>
                                        {' ' + team.club}
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="text-xl font-bold">
                                    Team Members Information
                                </h2>
                                <div className="flex md:flex-row flex-wrap justify-between">
                                    {team.teams.map((team, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="flex flex-col"
                                            >
                                                <h3>Team {++index}</h3>
                                                <ul>
                                                    <li>
                                                        {' '}
                                                        <span className="text-primary font-semibold">
                                                            Email:{' '}
                                                        </span>
                                                        {team.email}
                                                    </li>
                                                    <li>
                                                        {' '}
                                                        <span className="text-primary font-semibold">
                                                            Name:{' '}
                                                        </span>
                                                        {team.name}
                                                    </li>
                                                    <li>
                                                        {' '}
                                                        <span className="text-primary font-semibold">
                                                            Phone:{' '}
                                                        </span>
                                                        {team.phone}
                                                    </li>
                                                </ul>
                                            </div>
                                        )
                                    })}
                                </div>
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
                            <Button color="primary" onPress={onConfirm}>
                                Confirm
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}
