import Link from "next/link"
export default function Navbar() {
    return (
        <div className="navbar justify-center bg-blue-600 fixed  border-b border-b-black ">
            <div className="navbar-center lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl text-white playfair-display">
                    <Link href="/#fashion"><li><a>Fashion</a></li></Link>
                    <Link href="/#Systems Analysis"><li><a>Systems Analysis</a></li></Link>
                    <Link href="/#Veterinary Medicine"><li><a>Veterinary Medicine</a></li></Link>
                    <Link href="/#Graphic Design"><li><a>Graphic Design</a></li></Link>
                    <Link href="/#Interior Design"><li><a>Interior Design</a></li></Link>
                    <Link href="/#Music Production"><li><a>Music Production</a></li></Link>
                    <Link href="/#Marketing"><li><a>Marketing</a></li></Link>
                </ul>
            </div>
        </div>
    )
}