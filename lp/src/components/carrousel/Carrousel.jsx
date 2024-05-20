import Image from "next/image";



export default function Carrousel({ img1, img2 }) {
    return (
        <>
        <div className="hidden md:flex space-x-60"> 
            <div className="artboard artboard-horizontal phone-1 pt-14"><Image src={img1} width={350} height={350} /></div>

            <div className="  phone-1 pt-14"><Image src={img2} width={350} height={350} /></div>

        </div>
        </>
    )
}