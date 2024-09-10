"use client"
import Card from "@/components/etc/card"

const PopularTitle = () => {
    return (
        <div className="w-[100%] flex justify-center items-center">
            <p className="text-[black] text-[25px] md:text-[40px] font-bold">
                Recent Popular Real Estake
            </p>
        </div>
    )
}

const ExplorerEstake = () => {
    const estakes = [
        "01_NewListings",
        "02_LuxuryHomes",
        "03_OpenHouses",
        "04_PriceReductions",
        "05_VirtualTours",
        "childrens_hospital"
    ]
    return (
        <div className="w-[100%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 grid-flow-row gap-10 justify-between">
            {
                estakes.map((itm, idx) => (
                    <Card
                        src={itm}
                        key={idx}
                    />
                ))
            }
        </div>
    )
}

const PopularEstake = () => {
    return (
        <div className="w-[100%] p-32">
            <PopularTitle />
            <ExplorerEstake />
        </div>
    )
}

export default PopularEstake