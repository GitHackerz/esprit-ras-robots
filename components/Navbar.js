'use client'

import Image from 'next/image'
import Logo from '@assets/img/Logo.png'
import Link from 'next/link'
import { Button } from '@nextui-org/react'
import { usePathname } from 'next/navigation'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import menuItems from '@data/menuItems'

export function NavbarC() {
    const pathname = usePathname()
    const [menuOpen, setMenuOpen] = useState(false)
    const [animationClass, setAnimationClass] = useState('')

    const toggleMenu = () => {
        if (menuOpen) {
            setAnimationClass('animate-slide-up')
            setTimeout(() => {
                setMenuOpen(false)
            }, 300)
        } else {
            setMenuOpen(true)
            setAnimationClass('animate-slide-down')
        }
    }

    return (
        <>
            <header>
                {menuOpen ? (
                    <IoCloseOutline
                        className="md:hidden block text-white text-4xl"
                        onClick={toggleMenu}
                    />
                ) : (
                    <HiOutlineMenuAlt1
                        className="md:hidden block text-white text-3xl"
                        onClick={toggleMenu}
                    />
                )}

                <Image src={Logo} alt={'ERR Logo'} width={50} height={50} />
                <nav>
                    {menuItems.map(item => {
                        return (
                            <Link
                                className="group"
                                href={item.href}
                                key={item.id}
                            >
                                {item.name}
                                {pathname === item.href ? (
                                    <span className="line"></span>
                                ) : (
                                    <span className="line-transition"></span>
                                )}
                            </Link>
                        )
                    })}
                </nav>
                <Button className="md:block hidden bg-primary text-white py-1 px-4 rounded-md">
                    {' '}
                    Register Now{' '}
                </Button>
            </header>
            {menuOpen && (
                <div className={`navbar-mobile ${animationClass}`}>
                    <div className="navbar-mobile-items">
                        {menuItems.map(item => {
                            return (
                                <Link
                                    className="group"
                                    href={item.href}
                                    key={item.id}
                                >
                                    {item.name}
                                </Link>
                            )
                        })}
                    </div>
                    <Button> Register Now </Button>
                </div>
            )}
        </>
    )
}
