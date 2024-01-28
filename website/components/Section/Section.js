import Image from 'next/image'
import Stats from '@components/Stats/Stats'
import './Section.css'

const Section = ({ title, subtitle, children, image, isInverted, stats }) => {
    return (
        <section
            className={`section flex flex-col ${
                isInverted ? 'md:flex-row-reverse bg-secondary' : 'md:flex-row'
            } `}
        >
            <div className="section-content-left">
                <Image
                    src={image}
                    alt={title}
                    className="md:w-[800px] w-[80%] "
                    width={500}
                    height={0}
                />
            </div>
            <div className="section-content-right">
                <div className="flex flex-col ">
                    <h2 className="text-primary text-xl font-medium">
                        {subtitle}
                    </h2>
                    <h1 className="md:text-5xl text-3xl font-bold">{title}</h1>
                </div>
                <p className="text-light-gray">{children}</p>
                {stats && <Stats stats={stats} />}
            </div>
        </section>
    )
}

export default Section
