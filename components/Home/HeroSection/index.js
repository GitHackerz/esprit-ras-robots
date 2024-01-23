import { Button } from '@nextui-org/react'
import Link from 'next/link'
import Image from 'next/image'
import './style.css'
import TimeLeft from '@components/Home/HeroSection/TimeLeft'

const HeroSection = () => (
    <section className="hero-section relative">
        <div className="hero-left">
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
                <Button color="secondary">
                    <Link href={'/about'}>Learn More</Link>
                </Button>

                <Button color="primary">
                    <Link href={'/contact'}>Contact Us </Link>
                </Button>
            </div>
            <TimeLeft />
        </div>
        <div className="hero-right">
            <Image
                src="/assets/img/Robot.webp"
                alt="Robot"
                width={600}
                height={600}
                className="object-cover"
            />
        </div>
    </section>
)

export default HeroSection
