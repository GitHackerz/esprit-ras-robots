import Image from 'next/image'
import { AiOutlinePhone } from 'react-icons/ai'
import { IoMailOutline } from 'react-icons/io5'
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa'

export function Footer() {
    return (
        <footer>
            <Image
                src="/assets/img/logo2.png"
                alt={'Logo'}
                width={150}
                height={150}
            />
            <div className="flex flex-row gap-10">
                <div className="inline-flex items-center text-lg gap-2">
                    <AiOutlinePhone className="text-white" />
                    <p>+216 58 906 040</p>
                </div>
                <div className="inline-flex items-center text-lg gap-2">
                    <IoMailOutline className="text-white" />
                    <p>+216 58 906 040</p>
                </div>
            </div>
            <div className="inline-flex items-center gap-5 text-white text-2xl">
                <FaFacebook />
                <FaLinkedin />
                <FaYoutube />
            </div>
        </footer>
    )
}
