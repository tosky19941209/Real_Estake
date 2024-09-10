"use client"
import Image from "next/image"
interface CardType {
    src: string,
}

const Card = ({ src }: CardType) => {
    return (
        <div className="w-full h-[450px] text-[#636366] hover:text-[black]  border-2 rounded-xl z-10 overflow-hidden hover:shadow-2xl duration-200">
            <Image
                className="z-[-1] w-full"
                src={`/backend/${src}.jpg`}
                width={380}
                height={360}
                alt="Image"
            />
            <div className="w-[100%] flex flex-col gap-4 mt-5 justify-center items-center">
                <p className=" text-[25px]">
                    {src}
                </p>
                <p className="w-[80%]">
                    2435 S Sepulveda Blvd,
                    Los Angeles, CA 90064
                </p>

                <p>
                    Studio - 3 Beds | $3,175 - $10,375
                </p>
            </div>
        </div>
    )
}

export default Card