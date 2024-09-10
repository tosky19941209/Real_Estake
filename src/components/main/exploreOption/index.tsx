"use client"
import Image from "next/image"

const ExploreOption = () => {
    return (
        <div className="w-[100%] flex flex-col justify-center items-center mt-10">
            <div className="w-[90%] h-[1px] bg-[black] bg-opacity-30" />
            <p className="text-[black] text-[50px] mt-20">
                Discover Homeownership on
            </p>


            <p className="text-[25px] text-[#a3a4a8] mt-5 w-[80%]">
                Renting is great, but maybe you’re thinking about buying a home instead. We want you to find the right place. That’s why our sister site, Homes.com, is designed to help you find your dream home, even if you’re a first time buyer.
            </p>


            <div className="w-[100%] h-[600px] lg:h-[500px]  mt-10 p-20 flex  justify-center items-center">
                <div className="w-[100%] h-full bg-[black] bg-opacity-5 flex flex-col lg:flex-row justify-center items-center">
                    <div className="w-[100%] h-full lg:w-[50%] text-[#636366] flex flex-col p-16 gap-4">
                        <p className="text-[20px] lg:text-[30px] text-[black]">
                            Explore Your Options
                        </p>
                        <p className="text-[15px] lg:text-[20px] text-[#404042]">
                            Deciding to become a homeowner is a big deal! Luckily, with Homes.com,
                            you get the most accurate homes for sale property data, an agent directory,
                            and collaboration tools to browse with your agent and co-shopper to help you make the right decision.
                        </p>
                        <button className="text-[#67709d] hover:text-[#92949c]  text-left text-[2vw] ">
                            Start Your Search
                        </button>

                    </div>
                    <Image
                        className="w-[100%] lg:w-[50%] h-[50%] lg:h-[100%]"
                        src={'/assets/explorerOption.jpg'}
                        width={200}
                        height={200}
                        alt="most"
                    />

                </div>

            </div>
        </div>
    )
}

export default ExploreOption