import Image from 'next/image'
import { AiOutlinePhone } from 'react-icons/ai'
import { IoMailOutline } from 'react-icons/io5'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import Link from 'next/link'

export function Footer() {
    return (
        <footer>
            <Image
                src="/assets/logo2.webp"
                alt={'Logo'}
                width={150}
                height={150}
            />
            <div className="flex md:flex-row flex-col items-center md:gap-10 gap-4">
                <div className="inline-flex items-center text-lg gap-2">
                    <IoMailOutline className="text-white" />
                    <p>contact.espritrasrobots@gmail.com</p>
                </div>
                <div className="flex md:flex-row flex-col items-center text-lg gap-2">
                    <AiOutlinePhone className="text-white" />
                    <div className="flex md:flex-col flex-row md:gap-0 gap-10">
                        <p>+216 44 88 80 50</p>
                        <p>+216 58 90 60 40</p>
                    </div>
                </div>
            </div>
            <div className="inline-flex items-center gap-5 text-white text-2xl">
                <Link href={'https://www.facebook.com/EspritRasRobots'}>
                    <FaFacebook />
                </Link>
                <Link href={'https://www.instagram.com/esprit_ras_robots/'}>
                    <FaInstagram />
                </Link>
                <Link href={'mailto:contact.espritrasrobots@gmail.com'}>
                    <IoMailOutline />
                </Link>
            </div>
        </footer>
    )
}
