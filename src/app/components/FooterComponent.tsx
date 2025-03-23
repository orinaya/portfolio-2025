"use client";
import TitleComponent from "./TitleComponent";
import ButtonParticle from "@/components/ButtonComponent";

function Footer() {
  return (
    <>
      <footer className="w-full pt-8 relative bg-mocha-900">
        <div className="mx-[10%] relative flex items-end bg-cover bg-no-repeat bg-top bg-mocha-950 rounded-t-xl">
          <div className="w-full flex flex-col items-start justify-between bottom-0 py-3 lg:px-6 px-0 text-darkOlive-200">
            <div className="h-20 w-full flex justify-center lg:mt-12 mb-12">
              <TitleComponent uptitle="Développeuse" title="Oriane Ratelade" />
            </div>

            <div className="w-full flex flex-wrap items-start lg:justify-around justify-between bottom-0 py-3 px-6 rounded-t-xl text-darkOlive-200 lg:h-40 h-fit gap-4 md:gap-0">
              <div>
                <h2 className="md:text-4xl text-3xl font-extrabold lg:w-fit w-full mb-8 lg:mb-0 font-['michael']">
                  Une opportunité ? <br />
                </h2>
                <span className="font-normal text-2xl">Discutons-en !</span>
              </div>

              <div className="flex flex-col gap-8 justify-start">
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="flex items-center gap-2">
                    <span className="icon-letter"></span>oriane@ratelade.com
                  </p>
                </div>
                <div>
                  <p className="font-semibold ">Téléphone</p>
                  <p className="flex items-center gap-2">
                    <span className="icon-tel"></span>07 70 35 45 69
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2 justify-start">
                <p className="font-semibold">Réseaux sociaux</p>
                <a
                  href="https://www.linkedin.com/in/oriane-ratelade/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <span className="icon-linkedin"></span>
                  /in/oriane-ratelade
                  <span className="icon-square-top-down"></span>
                </a>
                <a
                  href="https://github.com/orinaya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <span className="icon-github"></span>
                  orinaya
                  <span className="icon-square-top-down"></span>
                </a>
              </div>
            </div>

            <div className="w-full flex justify-center lg:mt-12 mt-4">
              <ButtonParticle
                target="_blank"
                title="Télécharger mon CV"
                colorBg="bg-cremeBrulee-800"
                colorText="text-cremeBrulee-200"
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
