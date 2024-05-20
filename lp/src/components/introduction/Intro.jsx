import Link from "next/link";


export default function Intro({ title, btnHref, imgBg }) {
    return (
        <>
            <div className="hero min-h-screen " style={{backgroundImage: `url(${imgBg})`}}>
                <div className="hero-content text-center">
                    <div>
                        {console.log(title)}
                        <h1 className="text-5xl font-bold text-blue-900 ">{title}</h1>
                        <Link href={`/#${btnHref}`} className="btn bg-blue-900 mt-5 text-white">Get Started</Link>
                    </div>
                </div>
            </div>
        </>
    )
}