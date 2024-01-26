import './style.css'
import Section from '@components/Section/Section'
import Header from '@components/Header'

export default function AboutUs() {
    return (
        <main className="flex flex-col md:gap-0 gap-10 pb-10">
            <Header title="About Us" />
            <Section
                title="ESPRIT RAS ROBOTS 2.0"
                subtitle="What is the event?"
                image="/assets/img/logo.webp"
            >
                ESPRIT RAS ROBOTS 2.0 is a national robotics competition
                organized by the ESPRIT Robotics Club, which aims to bring
                together robotics enthusiasts from all over Tunisia to share
                their knowledge and skills in the field of robotics and to
                promote this field in Tunisia.
            </Section>
            <Section
                title="IEEE"
                subtitle="What is IEEE?"
                image={'/assets/img/ieee/IEEE.webp'}
                stats={[
                    { number: 300, title: 'Conferences' },
                    { number: 2806, title: 'Student Branches' },
                    { number: '432K', title: 'Members' },
                    { number: 160, title: 'Countries' }
                ]}
                isInverted
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit mattis.{' '}
            </Section>
            <Section
                title="IEEE ESPRIT Student Branch"
                subtitle="Who are we?"
                image={'/assets/img/ieee/SB_W.webp'}
                stats={[
                    { number: 900, title: 'Members' },
                    { number: 19, title: 'Awards' },
                    { number: 10, title: 'Units' },
                    { number: 270, title: 'Activities' }
                ]}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit mattis.{' '}
            </Section>
            <Section
                title="IEEE ESPRIT RAS Student Branch Chapter"
                subtitle="Who are we?"
                image={'/assets/img/ieee/RAS_W.webp'}
                stats={[
                    { number: 2018, title: 'Foundation' },
                    { number: 200, title: 'Members' },
                    { number: 40, title: 'Activities' }
                ]}
                isInverted
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit mattis.{' '}
            </Section>
        </main>
    )
}
