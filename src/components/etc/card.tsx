"use client"
import Image from "next/image"
interface CardType {
    src: string,
}

const Card = ({ src }: CardType) => {
    return (
        <div className="w-[400px] h-[500px] border rounded-xl z-10">
            <Image
                className="z-[-1]"
                src={`/backend/${src}.jpg`}
                width={400}
                height={400}
                alt="Image"

            />
        </div>
    )
}

export default Card