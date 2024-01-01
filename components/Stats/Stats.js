import './Stats.css'

const Stats = ({ stats }) => {
    return (
        <div className={`stats-content`}>
            {stats.map((stat, index) => (
                <div className="stats-item" key={index}>
                    <h1>{stat.number}</h1>
                    <p>{stat.title}</p>
                </div>
            ))}
        </div>
    )
}

export default Stats
