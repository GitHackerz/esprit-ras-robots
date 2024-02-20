export function teamsByChallenge(teams) {
    return teams.reduce((acc, team) => {
        if (!acc[team.challenge]) {
            acc[team.challenge] = []
        }
        acc[team.challenge].push(team)
        return acc
    }, {})
}

export function isValidEmail(email) {
    return email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)
}

export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}
