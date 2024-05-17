import Image from "next/image";



export default function Carrousel(img1, img2, img3) {
    return (
        <>
        <div className="flex ">
            <div className="artboard artboard-horizontal phone-1 pt-14"><Image src={img1.img1} width={350} height={350} /></div>

            <div className="artboard artboard-horizontal phone-1 pt-14"><Image src={img1.img2} width={350} height={350} /></div>

            <div className="artboard artboard-horizontal phone-1 pt-14"><Image src={img1.img3} width={350} height={350} /></div>


        </div>
        </>
    )
}