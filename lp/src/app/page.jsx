import Navbar from "@/components/navbar/Navbar";
import data from "../app/content.json";
import Intro from "@/components/introduction/Intro";
import Text from "@/components/Text/Texts";
import TextContainer from "@/components/Text/textContainer/TextContainer";
import Carrousel from "@/components/carrousel/Carrousel";
import IntroContainer from "@/components/introduction/introContainer/IntroContainer";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      {data.map((section, id) => (
        <div className="flex  flex-col items-center justify-center align-middle" key={section.id}>
          <IntroContainer url={section.url}>
            <Intro
              btnHref={section.urlText}
              imgBg={section.imgBg}
              title={section.title}
             
            />
          </IntroContainer>
          <TextContainer urlText={section.urlText}>
            <Text texts={data[id].text} />
            {section.img1 && section.img2 && <Carrousel img1={section.img1} img2={section.img2} />}

          </TextContainer>
        </div>
      ))}
    </main>
  );
}