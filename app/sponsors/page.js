import Header from '@components/Header'
import Image from 'next/image'
import { partners, sponsors } from '@data/partners-sponsors'

export default function Sponsors() {
    const Card = ({ title, description, image }) => (
        <div className="flex flex-col border-3 border-gray rounded-lg py-6 px-4 bg-secondary hover:scale-105 duration-300">
            <Image src={image} alt={'ESPRIT'} width={300} height={100} />
            <div className="flex flex-col items-start gap-4">
                <h1 className="text-center">{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    )

    return (
        <main className="">
            <Header title="Sponsors" />
            <div className="px-32">
                <section className="py-20 flex flex-col gap-10">
                    <h1 className="text-4xl font-bold">Our Partners</h1>
                    <div className="grid grid-cols-4 gap-10">
                        {partners.map((partner, index) => (
                            <Card
                                key={index}
                                title={partner.name}
                                description={partner.description}
                                image={partner.logo}
                            />
                        ))}
                    </div>
                </section>
                <section className="py-20 flex flex-col gap-10">
                    <h1 className="text-4xl font-bold">Our Sponsors</h1>
                    <div className="grid grid-cols-4 gap-10">
                        {sponsors.map((partner, index) => (
                            <Card
                                key={index}
                                title={partner.name}
                                description={partner.description}
                                image={partner.logo}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </main>
    )
}
