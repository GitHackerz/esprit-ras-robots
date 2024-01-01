import Image from 'next/image'
import AllTerrain from '@assets/img/robots/AllTerrain.webp'
import Link from 'next/link'
import { RxExternalLink } from 'react-icons/rx'

const Card = ({ name, title, description, link }) => {
    return (
        <div className="card">
            <Image src={AllTerrain} height={300} alt={'All Terrain'} />
            <div className="flex flex-col gap-2">
                <h4>{name}</h4>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <Link href={link} target="_blank" rel="noopener noreferrer">
                Learn More
                <RxExternalLink className="h-5 w-5" />
            </Link>
        </div>
    )
}

export default Card
