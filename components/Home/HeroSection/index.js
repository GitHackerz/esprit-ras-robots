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
                    Your journey to finding the perfect property begins here.
                    Explore our listings to find the home that matches your
                    dreams.
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
