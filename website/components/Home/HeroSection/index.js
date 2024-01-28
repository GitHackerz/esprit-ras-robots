import { Button } from '@nextui-org/react'
import Link from 'next/link'
import './style.css'
import TimeLeft from '@components/Home/HeroSection/TimeLeft'

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="flex flex-col gap-5">
                <h1>
                    Discover Your Competition
                    <span>ESPRIT RAS Robots 2.0</span>
                </h1>
                <p>
                    Your race to discovering the ultimate robotics challenge
                    starts now.Enter the fast lane and navigate through our
                    challenges to unveil the bot that aligns with your coding
                    dreams. Rev up your skills, explore the circuit, and gear up
                    for the adrenaline fueled spectacle that awaits you in the
                    ESPRIT RAS ROBOTS 2.0
                </p>
            </div>
            <div className="inline-flex items-center gap-4">
                <Link href={'/about'}>
                    <Button color="secondary">Learn More</Button>
                </Link>

                <Link href={'/contact'}>
                    <Button color="primary">Contact Us</Button>
                </Link>
            </div>
            <TimeLeft />
        </section>
    )
}

export default HeroSection
