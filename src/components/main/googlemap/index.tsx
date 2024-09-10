"use client"
import Image from "next/image"
const GoogleMap = () => {
    return (
        <div className="w-[100%] h-[600px]  bg-[url('/assets/googlemap.jpg')] bg-cover bg-no-repeat bg-center flex justify-center items-center   ">
            <div className="w-[100%] h-[100%] bg-[black] bg-opacity-60 flex justify-center items-center">
                <Image
                    src={"/assets/hand.min.png"}
                    width={400}
                    height={400}
                    alt="googlemap"
                />
            </div>
        </div>
    )
}
export default GoogleMap