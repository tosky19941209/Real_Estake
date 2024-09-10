"use client"
import Link from "next/link"
const Navbar = () => {
    return (
        <div className="flex gap-4 text-[black]">
            <Link href={""}>
                <p>Search</p>
            </Link>
            <Link href={"/login"}>
                <p>Login</p>
            </Link>
        </div>
    )
}

export default Navbar