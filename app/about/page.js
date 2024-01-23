import './style.css'
import Section from '@components/Section/Section'
import IEEE from '@assets/img/ieee/IEEE.png'
import RAS_W from '@assets/img/ieee/RAS_W.png'
import SB_W from '@assets/img/ieee/SB_W.png'

export default function AboutUs() {
    return (
        <main className="flex flex-col md:gap-0 gap-10 pb-10">
            <Section
                title="ESPRIT RAS ROBOTS 2.0"
                subtitle="What is the event?"
                image="/assets/img/logo.png"
                stats={[
                    { number: 200, title: 'Participants' },
                    { number: 10, title: 'Speakers' },
                    { number: 5, title: 'SponsorsSection' },
                    { number: 5, title: 'Partners' }
                ]}
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
                image={IEEE}
                stats={[
                    { number: 200, title: 'Participants' },
                    { number: 10, title: 'Speakers' },
                    { number: 5, title: 'SponsorsSection' },
                    { number: 5, title: 'Partners' }
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
                image={SB_W}
                stats={[
                    { number: 200, title: 'Participants' },
                    { number: 10, title: 'Speakers' },
                    { number: 5, title: 'SponsorsSection' },
                    { number: 5, title: 'Partners' }
                ]}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit mattis.{' '}
            </Section>
            <Section
                title="IEEE ESPRIT RAS Student Branch Chapter"
                subtitle="Who are we?"
                image={RAS_W}
                stats={[
                    { number: 200, title: 'Participants' },
                    { number: 10, title: 'Speakers' },
                    { number: 5, title: 'SponsorsSection' },
                    { number: 5, title: 'Partners' }
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
