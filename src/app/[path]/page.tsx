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
import BreadcrumbComponent from "@/components/BreadcrumbComponent";
import Link from "next/link";
import {
  getNextProject,
  getNextProjectRoute,
  getPreviousProject,
  getPreviousProjectRoute,
} from "@/utils/projectNavigation";
const equinoxTrailer = "/Equinox_trailer.mp4";
const mapeachTrailer = "/MaPeach_trailer.mp4";

const ProjectDetailComponent = ({}) => {
  const params = useParams();
  const projectPath = params?.path as string;

  const works = useMemo(() => {
    return projectsData.find((item: ProjectTypes) => item.path === projectPath);
  }, [projectPath]);

  const previousPages = [{path: "/", name: "Accueil"}];

  const nextProject = useMemo(() => getNextProject(projectPath), [projectPath]);
  const previousProject = useMemo(() => getPreviousProject(projectPath), [projectPath]);
  const nextProjectRoute = useMemo(() => getNextProjectRoute(projectPath), [projectPath]);
  const previousProjectRoute = useMemo(() => getPreviousProjectRoute(projectPath), [projectPath]);

  if (!works) return <p>Projet introuvable</p>;

  return (
    <div className="min-h-screen overflow-x-hidden text-mocha-200 bg-mocha-950">
      <NavbarComponent />
      <div className="mx-auto mt-30 max-w-7xl pb-24 px-6">
        <BreadcrumbComponent pageName={works.title} previousPages={previousPages} />

        <ButtonComponent
          title="Retour"
          colorBg="bg-mocha-800"
          colorText="text-mocha-200"
          colorBgHover="hover:bg-mocha-700"
          colorTextHover="hover:text-mocha-200"
          routeLink="/#projets"
          className="w-fit my-8"
        />
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
            className="rounded-xl h-44 md:h-80 lg:h-[425px] w-full object-cover lg:object-bottom md:object-bottom  object-right"
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
            <div className="flex gap-4 mt-4 flex-col lg:flex-row">
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
                  iconBefore={button.iconBefore}
                />
              ))}
            </div>
          </div>

          <div className="rounded-xl flex-1 bg-white lg:h-auto">
            <div className="flex flex-col gap-2 justify-center items-center md:h-96 h-fit">
              {works.path === "portfolio" && (
                <div className="flex justify-center items-center w-full lg:w-[500px] ">
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
                  className="md:w-11/12 rounded-md w-full lg:w-[500px] "
                >
                  <source src={equinoxTrailer} type="video/mp4" />
                </video>
              )}
              {works.path === "hack-me" && (
                <iframe
                  className="w-full h-auto lg:w-[560px] lg:h-[315px] md:h-[400px]"
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
              )}

              {works.path === "mapeach" && (
                <video
                  controls
                  autoPlay
                  loop
                  muted
                  className="md:w-11/12 rounded-md w-full lg:w-[500px] "
                >
                  <source src={mapeachTrailer} type="video/mp4" />
                </video>
              )}

              {!(
                works.path === "portfolio" ||
                works.path === "equinox" ||
                works.path === "hack-me" ||
                works.path === "mapeach"
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
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white flex-1">
          <div className="p-8">
            <TitleComponent title="Autour du projet" uptitle="Détails" small />
            <div className="flex justify-between flex-wrap gap-8">
              {works.details?.team && works.details.team.length > 0 && (
                <div className="flex md:flex-col flex-wrap">
                  <p className="text-base font-semibold">Équipe sur le projet</p>
                  {works.details.team.length >= 1 ? (
                    <>
                      {works.details?.team?.map((item, index) => (
                        <a
                          key={item}
                          href={works.details?.teamLink?.[index] || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex md:w-fit w-max items-center md:gap-2 gap-1 hover:text-strawberry-700"
                        >
                          {item}

                          <i className="icon-square-top-down"></i>
                        </a>
                      ))}
                    </>
                  ) : (
                    <p>Seule</p>
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
        <div>
          {works.path === "equinox" && (
            <div className="mt-16 bg-white rounded-xl lg:p-16 p-4">
              <TitleComponent
                title="Une stratégie pour convaincre"
                uptitle="Notre PitchDeck"
                small
              />
              <iframe
                src="/pdf/Equinox_Pitch_Deck_Nantes.pdf"
                className="w-full lg:h-[700px] h-96"
                title="PDF Viewer"
              />
            </div>
          )}
          {works.path === "mapeach" && (
            <div className="mt-16 bg-white rounded-xl lg:p-16 p-4">
              <TitleComponent title="Une stratégie pour convaincre" uptitle="Notre Pitch" small />
              <iframe
                src="/pdf/MaPeach_Pitch.pdf"
                className="w-full  lg:h-[700px] h-96"
                title="PDF Viewer"
              />
            </div>
          )}
        </div>

        <div className="container mt-4">
          <div
            className={`flex flex-col md:flex-row gap-4 md:gap-0 ${
              !previousProjectRoute
                ? "justify-end"
                : nextProjectRoute
                ? "justify-between"
                : "justify-start"
            }`}
          >
            {previousProject && previousProjectRoute && (
              <Link
                href={previousProjectRoute}
                className="bg-mocha-900 text-mocha-200 hover:bg-mocha-800  rounded-xl p-4 text-beige"
              >
                <div className="flex flex-col gap-2 items-start">
                  <div className="flex gap-2">
                    <span className="icon-arrow-left"></span>
                    <span className="text-mocha-300 text-sm">Projet précédent</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <div className="max-w-56 text-left">
                      <h3 className="font-semibold text-base text-mocha-200">
                        {previousProject.title}
                      </h3>
                      <p>{previousProject.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {nextProject && nextProjectRoute && (
              <Link
                href={nextProjectRoute}
                className="bg-mocha-900 text-mocha-200 hover:bg-mocha-800  rounded-xl p-4 text-beige"
              >
                <div className="flex flex-col gap-2 items-end">
                  <div className="flex gap-2">
                    <span className="text-mocha-300 text-sm">Projet suivant</span>
                    <span className="icon-arrow-right"></span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <div className="max-w-56 text-right">
                      <h3 className="font-semibold text-base text-mocha-200">
                        {nextProject.title}
                      </h3>
                      <p>{nextProject.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default ProjectDetailComponent;
