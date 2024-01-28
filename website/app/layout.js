import { Urbanist } from 'next/font/google'
import './globals.css'
import { NavbarC } from '@components/Navbar'
import { Footer } from '@components/Footer'

const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata = {
    title: 'ESPRIT RAS ROBOTS',
    description: 'ESPRIT RAS ROBOTS Robotics competition',
    image: '/assets/logo2.webp',
    url: 'https://esprit-ras-robots.tn',
    type: 'website',
    siteName: 'ESPRIT RAS ROBOTS 2.0'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={urbanist.className}>
                <NavbarC />
                <div className="min-h-screen bg-background">{children}</div>
                <Footer />
            </body>
        </html>
    )
}
