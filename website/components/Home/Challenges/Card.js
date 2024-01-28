import Image from 'next/image'
import Link from 'next/link'
import { RxExternalLink } from 'react-icons/rx'

const Card = ({ title, description, link, imgPath }) => {
    return (
        <div className="card">
            <Image src={imgPath} width={300} height={420} alt={'All Terrain'} />
            <div className="flex flex-col gap-2">
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
