import Link from "next/link"
export default function Navbar() {
    return (
        <div className="navbar bg-blue-600 fixed  border-b border-b-black z-10">
            <div className="navbar-center lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl text-white playfair-display flex  space-x-8">
                    <li className="rounded-lg px-4"><Link href="/#fashion">Fashion</Link></li>
                    <li className="rounded-lg px-4"><Link href="/#Systems Analysis" >Systems Analysis</Link></li>
                    <li className="rounded-lg px-4"><Link href="/#Veterinary Medicine">Veterinary Medicine</Link></li>
                    <li className="rounded-lg px-4"><Link href="/#Graphic Design">Graphic Design</Link></li>
                    <li className="rounded-lg px-4">  <Link href="/#Interior Design">Interior Design</Link></li>
                    <li className="rounded-lg px-4"><Link href="/#Music Production">Music Production</Link></li>
                    <li className="rounded-lg px-4"><Link href="/#Marketing">Marketing</Link></li>
                </ul>
            </div>
        </div>
    )
}