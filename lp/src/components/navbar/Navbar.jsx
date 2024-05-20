import Link from "next/link"
export default function Navbar({ name }) {
    return (
        <div className="navbar bg-blue-600 fixed  border-b border-b-black z-10">

            <div className="hidden navbar-center lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl text-white playfair-display flex  space-x-8">
                    <li className="rounded-lg px-4"><Link href="/#fashion">Fashion</Link></li>
                    <li className="rounded-lg px-4"><Link href="/#systems-analysis" >Systems Analysis</Link></li>
                    <li className="rounded-lg px-4"><Link href="/#veterinay-medicine">Veterinary Medicine</Link></li>
                    <li className="rounded-lg px-4"><Link href="/#graphic-design">Graphic Design</Link></li>
                    <li className="rounded-lg px-4"> <Link href="/#interior-design">Interior Design</Link></li>
                    <li className="rounded-lg px-4"><Link href="/#music-production">Music Production</Link></li>
                    <li className="rounded-lg px-4"><Link href="/#marketing">Marketing</Link></li>
                </ul>
            </div>
            <div className="lg:hidden navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href="/#fashion">fashion</Link></li>
                        <li><Link href="/#systems-analysis" >Systems Analysis</Link></li>
                        <li><Link href="/#veterinay-medicine">Veterinary Medicine</Link></li>
                        <li><Link href="/#graphic-design">Graphic Design</Link></li>
                        <li> <Link href="/#interior-design">Interior Design</Link></li>
                        <li><Link href="/#music-production">Music Production</Link></li>
                        <li><Link href="/#marketing">Marketing</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}