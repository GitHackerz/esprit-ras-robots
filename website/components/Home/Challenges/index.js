import Card from './Card'
import './style.css'

const Challenges = () => (
    <section className="about-challenges-section">
        <div className="about-challenges-header">
            <h1>About Challenges</h1>
            <span></span>
            {/*<p>*/}
            {/*    Lorem ipsum dolor sit amet consectetur adipisicing elit.*/}
            {/*    Quisquam, voluptas.*/}
            {/*</p>*/}
        </div>
        <div className="about-challenges-content">
            <Card
                title="Autonomous"
                description="Where robots autonomously navigate from mission to mission, striving to achieve the highest possible score! Monaco's circuit demands precision and strategic coding."
                link="https://drive.google.com/file/d/1gyY7k_WM77OiNH1RvuzHFUgCo08E2Olh/view"
                imgPath="/assets/challenges/LineFollower.webp"
            />
            <Card
                title="All Terrain"
                description="Sakhir circuit is calling for skilled drivers for a precision driven journey, seamlessly shifting from country to country, navigating the most famous F1 circuits to reach the finish line in record time."
                link="https://drive.google.com/file/d/1YrEkJKdCuQ4rZLzhrNpniJqw00HqQcGV/view"
                imgPath="/assets/challenges/AllTerrain.webp"
            />
            <Card
                title="Junior"
                description="The South is your ultimate pit stop to uncover the winning formula in the fast lane! Younger drivers, rev up your engines as you validate missions to secure the lead and claim victory."
                link="https://drive.google.com/file/d/1UFglS_dQ23ZZ90mG7dZx3-AB35ukzLD4/view"
                imgPath="/assets/challenges/Junior.webp"
            />
            {/*<Card*/}
            {/*    title="Fighter"*/}
            {/*    description="Monza is a battlefield where coding meets combat, and the power of hardware is unleashed in a fierce duel between robots! Enter the arena inspired by the iconic Monza Circuit in Formula 1, where your robots engage in a relentless clash of strength and strategy"*/}
            {/*    link="https://www.google.com/"*/}
            {/*    imgPath="/assets/challenges/Fighter.webp"*/}
            {/*/>*/}
        </div>
    </section>
)

export default Challenges
