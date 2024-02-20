const columns = [
    { name: 'TEAM', uid: 'name' },
    { name: 'CHALLENGE', uid: 'challenge', sortable: true },
    { name: 'SCHOOL & CLUB', uid: 'club' },
    { name: 'FEES', uid: 'isPaid', sortable: true },
    { name: 'PRESENCE', uid: 'isPresent', sortable: true },
    { name: 'ACTIONS', uid: 'actions' }
]

const statusOptions = [
    { name: 'All Teams', uid: 'active' },
    { name: 'All Terrain', uid: 'all-terrain' },
    { name: 'Autonomous', uid: 'autonomous' },
    { name: 'Junior', uid: 'junior' },
    { name: 'Fighter', uid: 'fighter' }
]

export { columns, statusOptions }
