const SearchPart = () => {
    return (
        <div className="w-[100%] h-[100%] flex flex-col gap-10 justify-center items-center">
            <p className="text-[30px] md:text-[55px] font-bold">
                Discover New Home in Florida
            </p>

            <input 
                type="text"
                className="w-[70%] md:w-[750px] h-[60px] text-[black] p-2 rounded-xl focus:outline-none"
                placeholder="Search Real Estate in Florida"
            />
        </div>
    )
}

export default SearchPart