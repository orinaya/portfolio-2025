/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import Lottie from "lottie-react";
import {useMemo} from "react";
import {useParams} from "next/navigation";
import {projectsData} from "@/datas/projectsData";
import {ProjectTypes} from "@/definitions/types";
import {default as projectsImageMapping} from "@/utils/projectsImageMapping";
import TitleComponent from "@/components/TitleComponent";
import ButtonComponent from "@/components/ButtonComponent";
import NavbarComponent from "@/components/NavbarComponent";
import FooterComponent from "@/components/FooterComponent";
import animationData from "@/assets/images/projects/portfolio/portfolio-lottie.json";
import noxGif from "@/assets/images/projects/equinox/nox-angel-jump.gif";
import IconMapping from "@/utils/iconMapping";
const equinoxTrailer = "/Equinox_trailer.mp4";

// import BreadcrumbParticle from "@/components/particles/BreadcrumbParticle";
// import H1Particle from "@/components/particles/H1Particle";
// import ExternalLinkParticle from "@/components/particles/ExternalLinkParticle";
// import FirstMedia from "@/components/projects/FirstMedia";
// import PdfFrame from "@/components/projects/PdfFrame";
// import H2Particle from "@/components/particles/H2Particle";

const ProjectDetailComponent = ({}) => {
  const params = useParams();
  const projectPath = params?.path as string;

  const works = useMemo(() => {
    return projectsData.find((item: ProjectTypes) => item.path === projectPath);
  }, [projectPath]);

  // const previousPages = [
  //   {path: "/", name: "Accueil"},
  //   {path: "/projets", name: "Projets"},
  // ];

  if (!works) return <p>Projet introuvable</p>;

  return (
    <div className="min-h-screen overflow-x-hidden text-mocha-200 bg-mocha-950">
      <NavbarComponent />
      <div className="mx-auto mt-30 max-w-7xl pb-24">
        {/* <BreadcrumbParticle pageName={works.title} previousPages={previousPages} /> */}
        {works.path === "equinox" && (
          <Image
            alt="nox angel gif"
            src={works.path ? noxGif : projectsImageMapping["default"]}
            className="absolute h-36 top-20 md:block hidden right-20 lg:right-50 w-auto"
            height={36}
          />
        )}

        <TitleComponent title={works.title} downtitle={works.description} />

        <div className="banner w-full bg-bottom bg-no-repeat rounded-xl md:my-16 my-4 md:mt-8 mx-auto relative md:h-full h-44 cursor-pointer">
          <Image
            src={
              works.banner ? projectsImageMapping[works.banner] : projectsImageMapping["default"]
            }
            alt="Banner"
            width={0}
            height={0}
            sizes="100vw"
            style={{width: "100%", height: "425px", objectFit: "cover"}}
            className="rounded-xl h-[425px] w-full object-cover object-bottom"
            priority
          />
          <span className="absolute top-4 left-4 bg-white bg-opacity-60 rounded-md py-1 px-2">
            <strong>{works.hashtag}</strong>
          </span>
        </div>

        <div className="flex flex-col lg:flex-row justify-between my-16 mx-auto gap-16">
          <div className="bg-white p-8 rounded-xl flex-1">
            <TitleComponent
              title="Comprendre les enjeux et la finalité"
              uptitle="Description du projet"
              small
            />
            <p>{works.big_description}</p>
            <div className="flex gap-4 mt-4">
              {works.buttons?.map((button: any) => (
                <ButtonComponent
                  key={button.title}
                  routeLink={button.href}
                  title={button.title}
                  colorBg={`bg-${button.color}-900`}
                  colorText={`text-${button.color}-200`}
                  colorBgHover={`hover:bg-${button.color}-800`}
                  colorTextHover={`hover:text-${button.color}-300`}
                  target="_blank"
                />
              ))}
            </div>
          </div>

          {/* <div> */}
          <div className="rounded-xl flex-1 bg-white">
            <div className="flex flex-col gap-2 justify-center items-center md:h-96 h-fit">
              {works.path === "portfolio" && (
                <div
                  className="flex justify-center items-center"
                  style={{width: "500px", height: "500px"}}
                >
                  <Lottie animationData={animationData} loop={true} />
                </div>
              )}
              {works.path === "equinox" && (
                <video
                  controls
                  autoPlay
                  loop
                  muted
                  poster={
                    works.second_image
                      ? `../assets/images/projects/${works.second_image}`
                      : "default-poster.jpg"
                  }
                  className="md:w-11/12 rounded-md w-full h-[500px]"
                  style={{width: "500px", height: "500px"}}
                >
                  <source src={equinoxTrailer} type="video/mp4" />
                </video>
              )}
              {works.path === "hack-me" && (
                // <iframe
                //   width="560"
                //   height="315"
                //   src="https://www.youtube.com/embed/0c_T0PEhqxs?si=h-yQDmFWEWA3K5q4"
                //   title="YouTube video player"
                //   frameBorder="0"
                //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                //   referrerPolicy="strict-origin-when-cross-origin"
                //   allowFullScreen
                // ></iframe>

                // {works.path === "hack-me" && (
                <iframe
                  width="560"
                  height="315"
                  src={
                    works.first_image ||
                    "https://www.youtube.com/embed/0c_T0PEhqxs?si=h-yQDmFWEWA3K5q4"
                  }
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                // )}
              )}

              {!(
                works.path === "portfolio" ||
                works.path === "equinox" ||
                works.path === "hack-me"
              ) && (
                <Image
                  alt="image"
                  src={
                    works.first_image
                      ? projectsImageMapping[works.first_image]
                      : projectsImageMapping["default"]
                  }
                  width={0}
                  sizes="100vw"
                  height={384}
                  className="h-96 rounded-xl flex-1 object-cover cursor-pointer hover:scale-105 hover:drop-shadow-xl transition-transform w-full"
                />
              )}
              {/* </div> */}
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white flex-1">
          <div className="p-8">
            <TitleComponent title="Autour du projet" uptitle="Détails" small />
            {/* <div className="flex flex-col gap-6 mt-5 flex-wrap"> */}
            <div className="flex justify-between flex-wrap gap-8">
              {works.details?.team && works.details.team.length > 0 && (
                <div className="flex md:flex-col flex-wrap">
                  <p className="text-base font-semibold">Équipe sur le projet</p>
                  {works.details.team.length === 1 ? (
                    <p>Seule</p>
                  ) : (
                    <>
                      {works.details?.team?.map((item, index) => (
                        <a
                          key={item}
                          href={works.details?.teamLink?.[index] || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex md:w-fit w-max items-center md:gap-2 gap-1 hover:text-strawberry-700"
                        >
                          {item} <i className="icon-square-top-down"></i>
                        </a>
                      ))}
                    </>
                  )}
                </div>
              )}
              <div>
                <p className="text-base font-semibold">Mon rôle</p>
                {works.details?.role.map((item) => (
                  <p key={item} className="w-52">
                    {item}
                  </p>
                ))}
              </div>

              <div>
                <p className="text-base font-semibold">Logiciels et langages</p>
                <div className="flex gap-2">
                  {works.details?.softwares.map((item) => (
                    <Image
                      alt="softwares icons"
                      key={item}
                      src={
                        works.details?.softwares && works.details.softwares.length !== 0
                          ? IconMapping[item]
                          : projectsImageMapping["default"]
                      }
                      width={30}
                      height={30}
                    />
                  ))}
                </div>
              </div>
              <div>
                <p className="text-base font-semibold">Année d’étude</p>
                <p className="w-52">{works.details?.school_year}</p>
              </div>
            </div>
          </div>
        </div>

        {works.path === "equinox" && (
          <div className="mt-16 bg-white rounded-xl p-16">
            <TitleComponent title="Une stratégie pour convaincre" uptitle="Notre PitchDeck" small />
            <iframe
              src="/pdf/Equinox_Pitch_Deck_Nantes.pdf"
              className="w-full h-[700px]"
              title="PDF Viewer"
            />
          </div>
        )}
      </div>
      <FooterComponent />
    </div>
  );
};

export default ProjectDetailComponent;
