import photoHero from "@/assets/images/photo-hero.png";
import Image from "next/image";
import ButtonComponent from "@/components/ButtonComponent";
import TypewriterMotion from "@/components/Animation/TypewriterMotion";

function HeroComponent() {
  return (
    <>
      <div className="background-hero bg-[#E9E2E2] fixed w-full h-screen flex flex-col justify-center items-center px-8 pt-[4%] ">
        <h1 className="text-center justify-start lg:gap-3 gap-0 flex flex-col md:flex-row lg:min-h-16 min-h-20">
          <TypewriterMotion
            text="Hello, je m’appelle"
            className="text-mocha-200 md:text-5xl text-3xl font-bold font-michael"
          />
          <TypewriterMotion
            text="Oriane"
            delay={2000}
            className="text-strawberry-700 md:text-5xl text-4xl font-bold font-michael"
          />
        </h1>
        <div className="w-[1182px] h-[158px] lg:h-[158px] md:h-[290px] relative lg:mb-[182px] mb-24 mt-12">
          <div className="w-full text-center lg:text-[158px] lg:text-6xl md:text-7xl text-5xl font-bold title">
            Développeuse
          </div>
          <div className="lg:left-[952px] lg:top-[110px] left-[580px] top-[8px] md:left-[700px] md:top-[26px] absolute text-center justify-start text-[#3b2f2f] text-xl font-light">
            basée à Nantes.
          </div>
        </div>
        <div className="z-10 relative flex flex-col gap-4 justify-center items-center">
          <Image src={photoHero} alt="photo ori" className="absolute lg:bottom-0 bottom-36" />
          <div className="z-50 bg-milk-980 p-4 rounded-xl flex flex-col gap-4 justify-center items-center">
            <span className="absolute icon-eye z-50 text-cremeBrulee-200 -top-6 left-6 bg-cremeBrulee-800 rounded-full p-2 border-1 border-solid border-cremeBrulee-600"></span>
            <div className="lg:w-2xl w-auto text-center pt-1.5">
              Étudiante en Développement Web, j&apos;entame dès septembre un MBA Développeur
              Full-Stack. C&apos;est pourquoi je recherche une alternance dans ce domaine !
            </div>
            <div className="z-10 flex lg:flex-row flex-col gap-4">
              <ButtonComponent
                title="Découvrir mes projets"
                colorBg="bg-strawberry-900"
                colorBgHover="hover:bg-strawberry-800"
                colorText="text-strawberry-300"
                colorTextHover="hover:text-strawberry-200"
                routeLink="#"
                iconBefore="eye"
              />
              <ButtonComponent
                target="_blank"
                title="Télécharger mon CV"
                colorBg="bg-cremeBrulee-800"
                colorBgHover="hover:bg-cremeBrulee-700"
                colorText="text-cremeBrulee-200"
                colorTextHover="hover:text-cremeBrulee-300"
                routeLink="https://drive.google.com/file/d/13uXVJyO05jd0KePHcqGPa8Sc7x939lHe/view?usp=drive_link"
                iconBefore="download"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroComponent;
