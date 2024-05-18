import Link from "next/link"
export default function Navbar() {
    return (
        <div className="navbar justify-center bg-blue-600 fixed  border-b border-b-black ">
            <div className="navbar-center lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl text-white playfair-display">
                    <Link href="/#fashion"><li>Fashion</li></Link>
                    <Link href="/#Systems Analysis"><li>Systems Analysis</li></Link>
                    <Link href="/#Veterinary Medicine"><li>Veterinary Medicine</li></Link>
                    <Link href="/#Graphic Design"><li>Graphic Design</li></Link>
                    <Link href="/#Interior Design"><li>Interior Design</li></Link>
                    <Link href="/#Music Production"><li>Music Production</li></Link>
                    <Link href="/#Marketing"><li>Marketing</li></Link>
                </ul>
            </div>
        </div>
    )
}