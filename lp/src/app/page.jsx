
import Text from "@/components/Text/Texts";
import Navbar from "@/components/navbar/Navbar";
import data from "../../content.json"
import Carrousel from "@/components/carrousel/Carrousel";
import Intro from "@/components/introduction/Intro";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <div className="bg-blue-600 text-center h-screen">
        <Intro title={data[0].title} />
        <Link href="/#fashion"><button className="btn mt-20 px-20">Start</button></Link>
      </div>
      <div className="h-screen flex flex-col text-center justify-center mx-60" id="fashion">
        <Text text={data[0].text} />
        <Carrousel img1={data[0].img1} img2={data[0].img2} img3={data[0].img3} />
      </div>

      <div className="bg-blue-600 text-center h-screen">
        <Intro title={data[1].title}/>
        <Link href="/#Systems Analysis"><button className="btn mt-20 px-20">Start</button></Link>
      </div>
      <div className="h-screen flex flex-col text-center justify-center  mx-60" id="Systems Analysis">
        <Text text={data[1].text} />
        <Carrousel img1={data[1].img1} img2={data[1].img2} img3={data[1].img3} />
      </div>

      <div className="bg-blue-600 text-center h-screen">
        <Intro title={data[2].title}/>
        <Link href="/#Veterinary Medicine"><button className="btn mt-20 px-20">Start</button></Link>
      </div>
      <div className="h-screen flex flex-col text-center justify-center  mx-60" id="Veterinary Medicine">
        <Text text={data[2].text} />
        <Carrousel img1={data[2].img1} img2={data[2].img2} img3={data[2].img3} />
      </div>

      <div className="bg-blue-600 text-center h-screen">
        <Intro title={data[3].title}/>
        <Link href="/#Graphic Design"><button className="btn mt-20 px-20">Start</button></Link>
      </div>
      <div className="h-screen flex flex-col text-center justify-center  mx-60 p-20" id="Graphic Design">
        <Text text={data[3].text} />
        <Carrousel img1={data[3].img1} img2={data[3].img2} img3={data[3].img3} />
      </div>

      <div className="bg-blue-600 text-center h-screen">
        <Intro title={data[4].title}/>
        <Link href="/#Interior Design"><button className="btn mt-20 px-20">Start</button></Link>
      </div>
      <div className="h-screen flex flex-col text-center justify-center  mx-60" id="Interior Design">
        <Text text={data[4].text} />
        <Carrousel img1={data[4].img1} img2={data[4].img2} img3={data[4].img3} />
      </div>

      <div className="bg-blue-600 text-center h-screen">
        <Intro title={data[5].title}/>
        <Link href="/#Music Production"><button className="btn mt-20 px-20">Start</button></Link>
      </div>
      <div className="h-screen flex flex-col text-center justify-center mx-60" id="Music Production">
        <Text text={data[5].text} />
        <Carrousel img1={data[5].img1} img2={data[5].img2} img3={data[5].img3} />
      </div>

      <div className="bg-blue-600 text-center h-screen">
        <Intro title={data[6].title}/>
        <Link href="/#Marketing"><button className="btn mt-20 px-20">Start</button></Link>
      </div>
      <div className="h-screen flex flex-col  justify-center mx-60 mt-52" id="Marketing">
        <Text text={data[6].text} />
      </div>
    </main>
  );
}
