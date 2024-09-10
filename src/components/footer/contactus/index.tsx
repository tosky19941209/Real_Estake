"use client"
import Image from "next/image"
const ContactUs = () => {
    return (
        <div className="w-[100%] md:w-[40%] flex flex-col items-start pt-20">

            <div className="w-[100%] text-center md:text-right">
                <p className="text-[black] text-[40px]">
                    Real Estate Company
                </p>
                <p className="text-[black]">
                    © 2024 CoStar Group, Inc.
                </p>
            </div>
            <div className="w-[100%] flex justify-center md:justify-end gap-5 mt-10">
                <Image
                    src={"/svg/facebook.svg"}
                    width={50}
                    height={50}
                    alt="facebook"
                />
                <Image
                    src={"/svg/twitter.svg"}
                    width={50}
                    height={50}
                    alt="twitter"
                />
                <Image
                    src={"/svg/linkedin.svg"}
                    width={50}
                    height={50}
                    alt="facebook"
                />
                <Image
                    src={"/svg/instagram.svg"}
                    width={50}
                    height={50}
                    alt="instagram"
                />

            </div>

            <div className="w-[100%] text-center md:text-right mt-10">
                <p className="text-[black]">
                    Equal Housing Opportunity
                </p>
            </div>  
        </div>
    )
}

export default ContactUs