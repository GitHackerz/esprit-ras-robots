export type Team = {
    _id: number;
    name: string;
    email: string;
    challenge: string;
    establishment: string;
    club: string;
    teams: {
        name: string;
        email: string;
        phone: string;
    };
    score: number;
    isPaid: boolean;
    isPresent: boolean;
}