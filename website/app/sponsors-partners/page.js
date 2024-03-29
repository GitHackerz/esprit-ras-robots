import Header from '@components/Header'
import Image from 'next/image'
import { partners, sponsors } from '@data/partners-sponsors'
import { Button } from '@nextui-org/react'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function Sponsors() {
    const Card = ({ title, description, image, link }) => (
        <div className="flex flex-col border-3 border-gray rounded-lg pb-6 px-4 bg-secondary hover:scale-105 duration-300 w-[300px]">
            <div className="flex flex-col items-center justify-center py-14">
                <Image
                    className="justify-self-center"
                    src={image}
                    alt={title}
                    width={300}
                    height={100}
                />
            </div>
            <div className="flex flex-col justify-between h-full gap-8">
                <div className="flex flex-col items-start gap-4">
                    <h1 className="text-center text-2xl font-semibold">
                        {title}
                    </h1>
                    <p className="text-sm font-light self-start">
                        {description}
                    </p>
                </div>
                <Link target={'_blank'} href={link} className="self-end">
                    <Button className="bg-primary text-white rounded-lg px-4 py-2">
                        <ExternalLink size={18} className="mr-2" />
                        View Website
                    </Button>
                </Link>
            </div>
        </div>
    )

    return (
        <main className="">
            <Header title="Sponsors & Partners" />
            <div className="xl:px-20 md:px-10 px-5 ">
                {partners.length > 0 && (
                    <section className="py-20 flex flex-col gap-10">
                        <h1 className="text-4xl font-bold">Our Partners</h1>
                        <div className="flex flex-row flex-wrap gap-y-10 gap-x-5 md:justify-start justify-center items-stretch">
                            {partners.map((partner, index) => (
                                <Card
                                    key={index}
                                    title={partner.name}
                                    description={partner.description}
                                    image={partner.logo}
                                    link={partner.link}
                                />
                            ))}
                        </div>
                    </section>
                )}

                {sponsors.length > 0 && (
                    <section className="py-20 flex flex-col gap-10">
                        <h1 className="text-4xl font-bold">Our Sponsors</h1>
                        <div className="flex flex-row flex-wrap gap-y-10 md:gap-x-0 gap-x-5 md:justify-between justify-center items-stretch">
                            {sponsors.map((sponsor, index) => (
                                <Card
                                    key={index}
                                    title={sponsor.name}
                                    description={sponsor.description}
                                    image={sponsor.logo}
                                    link={sponsor.link}
                                />
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </main>
    )
}
