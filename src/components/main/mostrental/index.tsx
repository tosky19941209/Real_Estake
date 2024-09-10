"use client"
import Image from "next/image"

const MostRental = () => {
    return (
        <div className="w-[100%] flex flex-col justify-center items-center">
            <div className="w-[90%] h-[1px] bg-[black] bg-opacity-30" />
            <p className="text-[black] text-[50px] mt-20">
                The Most Rental Listings
            </p>


            <p className="text-[25px] text-[#a3a4a8] mt-5">
                Choose from over 1 million apartments, houses, condos, and townhomes for rent.
            </p>


            <div className="w-[100%] h-[600px] lg:h-[500px]  mt-10 p-20 flex  justify-center items-center">
                <div className="w-[100%] h-full bg-[black] bg-opacity-5 flex flex-col lg:flex-row justify-center items-center">
                    <div className="w-[100%] h-full lg:w-[50%] text-[#636366] flex flex-col p-16 gap-4">
                        <p className="text-[20px] lg:text-[30px] text-[black]">
                            Renting Made Simple
                        </p>
                        <p className="text-[15px] lg:text-[20px] text-[#404042]">
                            Browse the highest quality listings, apply online, sign your lease, and even pay your rent from any device.
                        </p>
                        <button className="text-[#67709d] hover:text-[#92949c]  text-left text-[2vw] ">
                            Find Out More
                        </button>

                    </div>
                    <Image
                        className="w-[100%] lg:w-[50%] h-[50%] lg:h-[100%]"
                        src={'/assets/mostrent.jpg'}
                        width={200}
                        height={200}
                        alt="most"
                    />

                </div>

            </div>
        </div>
    )
}

export default MostRental