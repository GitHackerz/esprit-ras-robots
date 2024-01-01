import { Button } from '@nextui-org/react'
import Logo from '@assets/img/Logo.png'
import Image from 'next/image'
import './style.css'
import Card from '@components/Card'
export default function AboutUs() {
    return (
        <main>
            <section className="about-section">
                <div className="about-section-left">
                    <Image
                        src={Logo}
                        alt={'About Us'}
                        width={400}
                        height={400}
                    />
                </div>
                <div className="about-section-right">
                    <div className="flex flex-col gap-5 ">
                        <h2 className="text-primary text-xl font-bold">
                            What is the event?
                        </h2>
                        <h1 className="text-white text-5xl font-bold">
                            Esprit Ras Robots 2.0
                        </h1>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                        dapibus leo. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit mattis.{' '}
                    </p>
                    <Button className=" bg-primary text-white py-6 px-8 rounded-md">
                        Contact us
                    </Button>
                </div>
            </section>

            <section className="stats-section">
                <div className="stats-header">
                    <h2>Our Numbers </h2>
                    <span></span>
                </div>
                <div className="inline-flex flex-wrap gap-24">
                    <div className="flex flex-col items-center">
                        <h1>180</h1>
                        <p>Members</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1>50</h1>
                        <p>Awards</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1>70</h1>
                        <p>Fazet</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1>440</h1>
                        <p>Members</p>
                    </div>
                </div>
            </section>

            <section className="exboard-section">
                <div className="exboard-section-header">
                    <h1>About Challenges</h1>
                    <span></span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, voluptas.
                    </p>
                </div>
                <Card
                    title={'Line Follower'}
                    name={'Hbib'}
                    description={
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit Quisquam, voluptas'
                    }
                    link={'https://www.google.com/'}
                />
            </section>
        </main>
    )
}
