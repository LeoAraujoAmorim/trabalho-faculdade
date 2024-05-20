import Navbar from "@/components/navbar/Navbar";
import data from "../app/content.json";
import IntroContainer from "@/components/introduction/IntroContainer/IntroContainer";
import Intro from "@/components/introduction/Intro";
import Text from "@/components/Text/Texts";
import TextContainer from "@/components/Text/textContainer/TextContainer";
import Carrousel from "@/components/carrousel/Carrousel";

export default function Home() {
  console.log(data);
  return (
    <main className="">
      <Navbar />
      {data.map((section, id) => (
        <div className="flex  flex-col items-center justify-center align-middle">
          <IntroContainer key={section.id}>
            <Intro
              key={section.id}
              btnHref={"fashion"}
              imgBg={section.imgBg}
              title={section.title}
            />
          </IntroContainer>
          <TextContainer>
            <Text text={data[id].text} />
            {section.img1 && section.img2 && <Carrousel img1={section.img1} img2={section.img2}/>}
           
          </TextContainer>
        </div>
      ))}
    </main>
  );
}