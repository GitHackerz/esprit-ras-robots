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
                image="/assets/logo_white.webp"
            >
                ESPRIT RAS ROBOTS is a robotics competition that aims to
                encourage and reward young enthusiasts in this field
                highlighting their technical skills and team spirit. Our
                exciting event will celebrate the innovation and potential of
                robotics in an entertaining and competitive atmosphere! We are
                delighted to welcome you to the Intercollegiate RAS Robots 2.0
                event to be held on February 25, 2024, at ESPRIT.
            </Section>
            <Section
                title="IEEE"
                subtitle="What is IEEE?"
                image={'/assets/ieee/IEEE.webp'}
                stats={[
                    { number: 300, title: 'Conferences' },
                    { number: 2806, title: 'Student Branches' },
                    { number: '432K', title: 'Members' },
                    { number: 160, title: 'Countries' }
                ]}
                isInverted
            >
                The Institute of Electrical and Electronics Engineers (IEEE) is
                a global professional organization dedicated to advancing
                technology for the benefit of humanity. It serves as a leading
                authority on a wide range of areas including electrical
                engineering, computer science, and electronics. IEEE provides a
                platform for professionals, researchers, and students to
                collaborate, innovate, and exchange ideas through conferences,
                publications, standards development, and educational
                initiatives.
            </Section>
            <Section
                title="IEEE ESPRIT Student Branch"
                subtitle="Who are we?"
                image={'/assets/ieee/SB_W.webp'}
                stats={[
                    { number: 900, title: 'Members' },
                    { number: 19, title: 'Awards' },
                    { number: 10, title: 'Units' },
                    { number: 270, title: 'Activities' }
                ]}
            >
                IEEE Esprit Student Branch is the largest SB in Tunisia Section
                as well as Region 8. Founded in 2017, IEEE ESPRIT Student Branch
                made its way to being ranked as the largest Student Branch in
                Tunisia Section as well as the Region 8. It includes 7 technical
                chapters (AESS, CIS, CS, IAS, IES, PES, MTTS, RAS) alongside two
                groups (SIGHT and WIE).
            </Section>
            <Section
                title="IEEE ESPRIT RAS Student Branch Chapter"
                subtitle="Who are we?"
                image={'/assets/ieee/RAS_W.webp'}
                stats={[
                    { number: 2018, title: 'Foundation' },
                    { number: 200, title: 'Members' },
                    { number: 40, title: 'Activities' }
                ]}
                isInverted
            >
                The RAS Student Branch Chapter is a community of students
                focused on robotics and automation. Through workshops and
                projects, members gain practical skills in the field. It offers
                networking opportunities and career development in robotics and
                automation. Join the RAS Student Branch to connect with peers
                and stay updated with advancements in this exciting field.
            </Section>
        </main>
    )
}
