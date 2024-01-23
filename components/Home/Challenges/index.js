import Card from './Card'
import './style.css'

const Challenges = () => (
    <section className="about-challenges-section">
        <div className="about-challenges-header">
            <h1>About Challenges</h1>
            <span></span>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptas.
            </p>
        </div>
        <div className="about-challenges-content">
            <Card
                title="Line Follower"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit Quisquam, voluptas"
                link="https://www.google.com/"
                imgPath="/assets/img/challenges/LineFollower.png"
            />
            <Card
                title="All Terrain"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit Quisquam, voluptas"
                link="https://www.google.com/"
                imgPath="/assets/img/challenges/AllTerrain.png"
            />
            <Card
                title="Junior"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit Quisquam, voluptas Lorem ipsum dolor sit amet consectetur adipisicing elit Quisquam, voluptas"
                link="https://www.google.com/"
                imgPath="/assets/img/challenges/Junior.png"
            />
            <Card
                title="Fighter"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit Quisquam, voluptas"
                link="https://www.google.com/"
                imgPath="/assets/img/challenges/Fighter.png"
            />
        </div>
    </section>
)

export default Challenges
