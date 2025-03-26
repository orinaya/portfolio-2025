import Image from "next/image";
import {ProjectTypes} from "@/definitions/types";
import IconMapping from "@/utils/iconMapping";
import projectsImgMapping from "@/utils/projectsImgMapping";
import FramerMotion from "../Animation/FramerMotion";

function CardComponent({image, title, description, project_status, softwares}: ProjectTypes) {
  return (
    <FramerMotion scaleInitial={1} scaleWhileInView={1} transitionDuration={0.8}>
      <div className="card-container flex relative rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200 hover:brightness-105 hover:drop-shadow-xl">
        <Image
          src={projectsImgMapping[image] || projectsImgMapping["default"]}
          alt={title}
          className="object-cover rounded-l-lg w-[11.5rem] lg:w-[12.8rem]"
          width={180}
          height={220}
        />

        <div className="card-content bg-white rounded-r-lg p-4 w-32 lg:w-44">
          <div className="flex flex-col gap-1 h-full justify-between">
            <div>
              <h3 className="font-semibold lg:text-lg text-base  text-mocha-200">{title}</h3>
              <p className="text-sm">{description}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-medium lg:text-base text-sm">Outils</p>
              <div className="flex gap-1 flex-wrap">
                {softwares.map((software, index) => (
                  <Image
                    key={index}
                    className="h-9 w-auto"
                    src={IconMapping[software] || projectsImgMapping["default"]}
                    alt={software}
                    width={30}
                    height={30}
                  />
                ))}
              </div>
            </div>
            <div className="mt-3 flex justify-between items-center">
              <span className="text-xs text-gray-500">{project_status}</span>
              <button className="text-sm text-verdigris-500 hover:underline">Voir plus →</button>
            </div>
          </div>
        </div>
      </div>
    </FramerMotion>
  );
}

export default CardComponent;
