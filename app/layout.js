import { Urbanist } from 'next/font/google'
import './globals.css'
import { Navbar, NavbarC } from '@components/Navbar'
import { Footer } from '@components/Footer'

const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata = {
    title: 'ESPRIT RAS ROBOTS',
    description: 'ESPRIT RAS ROBOTS Robotics competition'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={urbanist.className}>
                <NavbarC />
                {children}
                <Footer />
            </body>
        </html>
    )
}
