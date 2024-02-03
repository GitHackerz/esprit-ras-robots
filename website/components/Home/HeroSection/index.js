import { Button } from '@nextui-org/react'
import Link from 'next/link'
import './style.css'
import TimeLeft from '@components/Home/HeroSection/TimeLeft'

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="overlay" />
            <div className="flex flex-col gap-5 z-50">
                <h1>
                    Discover Your Competition
                    <span>ESPRIT RAS Robots 2.0</span>
                </h1>
                <p>
                    Rev up your skills, explore the circuit, and gear up for the
                    adrenaline fueled spectacle that awaits you in the ESPRIT
                    RAS ROBOTS 2.0
                </p>
            </div>
            <div className="inline-flex items-center gap-4 z-50">
                <Link href={'/about'}>
                    <Button color="secondary">Learn More</Button>
                </Link>

                <Link href={'/registration'}>
                    <Button color="primary">Register Now</Button>
                </Link>
            </div>
            <TimeLeft />
        </section>
    )
}

export default HeroSection
