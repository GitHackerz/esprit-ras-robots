import './style.css'
import { Button } from '@nextui-org/react'
import Robot from '@assets/img/Robot.png'
import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineCarRepair, MdOutlineDirectionsCar } from 'react-icons/md'
import { FaUserAstronaut } from 'react-icons/fa'
import { RxExternalLink } from 'react-icons/rx'
import AllTerrain from '@assets/img/robots/AllTerrain.webp'

const Card = ({ title, description, link }) => {
    return (
        <div className="about-challenges-card">
            <Image src={AllTerrain} height={300} alt={'All Terrain'} />
            <div className="flex flex-col gap-2">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <Link href={link} target="_blank" rel="noopener noreferrer">
                Learn More
                <RxExternalLink className="h-5 w-5" />
            </Link>
        </div>
    )
}

export default function Home() {
    return (
        <main>
            <section className="hero-section relative">
                <div className="hero-left">
                    <div className="flex flex-col gap-5">
                        <h1>
                            Discover Your Competition
                            <span>ESPRIT RAS Robots 2.0</span>
                        </h1>
                        <p>
                            Your journey to finding the perfect property begins
                            here. Explore our listings to find the home that
                            matches your dreams.
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
                    <div className="inline-flex flex-wrap gap-6">
                        <div className="card">
                            <h2>200+</h2>
                            <p>Participants</p>
                        </div>
                        <div className="card">
                            <h2>4</h2>
                            <p>Challenges</p>
                        </div>
                    </div>
                </div>
                <div className="hero-right">
                    <Image
                        src={Robot}
                        alt={'Robot'}
                        width={600}
                        className={'object-cover'}
                    />
                </div>
            </section>
            <section className="challenges-section">
                <div className="card">
                    <RxExternalLink className="absolute top-3 right-5 h-7 w-7" />
                    <MdOutlineCarRepair className="h-10 w-10" />
                    <h2>Line Follower</h2>
                </div>
                <div className="card">
                    <RxExternalLink className="absolute top-3 right-5 h-7 w-7" />
                    <MdOutlineDirectionsCar className="h-10 w-10" />
                    <h2>All Terrain</h2>
                </div>
                <div className="card">
                    <RxExternalLink className="absolute top-3 right-5 h-7 w-7" />
                    <FaUserAstronaut className="h-10 w-10" />
                    <h2>Junior</h2>
                </div>
            </section>
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
                        title={'Line Follower'}
                        description={
                            'Lorem ipsum dolor sit amet consectetur adipisicing elit Quisquam, voluptas'
                        }
                        link={'https://www.google.com/'}
                    />
                    <Card
                        title={'All Terrain'}
                        description={
                            'Lorem ipsum dolor sit amet consectetur adipisicing elit Quisquam, voluptas'
                        }
                        link={'https://www.google.com/'}
                    />
                    <Card
                        title={'Junior'}
                        description={
                            'Lorem ipsum dolor sit amet consectetur adipisicing elit Quisquam, voluptas Lorem ipsum dolor sit amet consectetur adipisicing elit Quisquam, voluptas'
                        }
                        link={'https://www.google.com/'}
                    />
                </div>
            </section>
        </main>
    )
}
