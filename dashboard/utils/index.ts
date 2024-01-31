export function teamsByChallenge(teams: any) {
    return teams.reduce((acc: any, team: any) => {
        if (!acc[team.challenge]) {
            acc[team.challenge] = []
        }
        acc[team.challenge].push(team)
        return acc
    }, {})
}
