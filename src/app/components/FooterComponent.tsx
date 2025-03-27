"use client";
import TitleComponent from "@/components/TitleComponent";
import ButtonComponent from "@/components/ButtonComponent";
import {useState} from "react";
import TooltipComponent from "./TooltipComponent";

function Footer() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("oriane@ratelade.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <footer className="w-full pt-8 relative bg-mocha-950 ">
        <div className="lg:mx-[10%] mx-6 relative flex items-end bg-cover bg-no-repeat bg-top bg-milk-980 rounded-t-xl pt-16">
          <div className="w-full flex flex-col items-start justify-between bottom-0 py-3 lg:px-6 px-0 text-darkOlive-200">
            <div className="h-20 w-full flex justify-center lg:mt-12 lg:mb-12 mb-4">
              <TitleComponent uptitle="Développeuse" title="Oriane Ratelade" />
            </div>

            <div className="w-full flex lg:flex-wrap flex-col items-center justify-center lg:justify-between bottom-0 py-3 px-6 rounded-t-xl text-darkOlive-200 lg:h-40 h-fit gap-8 lg:gap-4">
              <div className="text-center lg:text-start text-mocha-200">
                <h2 className="lg:text-4xl text-3xl lg:w-fit w-full mb-8 lg:mb-0 font-michael">
                  Une opportunité ? <br />
                </h2>
                <span className="font-normal text-2xl">Discutons-en !</span>
              </div>

              <div className="flex lg:flex-col md:flex-row flex-col gap-8 lg:justify-start justify-center">
                <div className="lg:text-start text-center">
                  <p className="font-semibold text-strawberry-700">Email</p>
                  <p className="flex items-center gap-2 justify-center lg:justify-start">
                    <span className="icon-letter"></span>oriane@ratelade.com
                    <TooltipComponent text={copied ? "Copié !" : "Copier"}>
                      <span className="icon-copy cursor-pointer" onClick={copyToClipboard}></span>
                    </TooltipComponent>
                  </p>
                </div>
                <div className="lg:text-start text-center justify-center lg:justify-start">
                  <p className="font-semibold text-strawberry-700">Téléphone</p>
                  <p className="flex items-center gap-2 lg:justify-start justify-center">
                    <span className="icon-phone"></span>07 70 35 45 69
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2 lg:justify-start justify-center">
                <p className="font-semibold lg:text-start text-center text-strawberry-700">
                  Réseaux sociaux
                </p>
                <a
                  href="https://www.linkedin.com/in/oriane-ratelade/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 lg:justify-start justify-center hover:text-strawberry-700"
                >
                  <span className="icon-linkedin"></span>
                  /in/oriane-ratelade
                  <span className="icon-square-top-down"></span>
                </a>
                <a
                  href="https://github.com/orinaya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 justify-center lg:justify-start hover:text-strawberry-700"
                >
                  <span className="icon-github"></span>
                  orinaya
                  <span className="icon-square-top-down"></span>
                </a>
              </div>
            </div>

            <div className="w-full flex justify-center lg:mt-12 mt-8">
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

            <div className="w-full mt-12">
              <p className="text-center">&copy; 2025 Oriane Ratelade</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
