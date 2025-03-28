"use client";
import Image from "next/image";
import {ProjectTypes} from "../../definitions/types";
import IconMapping from "../../utils/iconMapping";
import projectsImageMapping from "../../utils/projectsImageMapping";
import FramerMotion from "../Animation/FramerMotion";

function CardComponent({image, title, description, softwares, onClick}: ProjectTypes) {
  return (
    <FramerMotion scaleInitial={1} scaleWhileInView={1} transitionDuration={0.8}>
      <div
        onClick={onClick}
        className="card-container flex relative rounded-lg cursor-pointer 
                   transition-transform duration-300 hover:scale-[1.05] 
                   hover:shadow-xl bg-white overflow-hidden h-[220px] lg:h-[200px]"
      >
        <Image
          src={projectsImageMapping[image] || projectsImageMapping["default"]}
          alt={title}
          className="object-cover rounded-l-lg w-[11.5rem] lg:w-[10rem] h-full"
          width={180}
          height={250}
        />
        <div className="card-content bg-white rounded-r-lg p-4 flex flex-col justify-between lg:w-44">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold  text-sm lg:text-base">{title}</h3>
            <p className="text-sm  line-clamp-3">{description}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-medium text-xs">Outils</p>
            <div className="flex gap-2 flex-wrap">
              {softwares.map((software, index) => (
                <Image
                  key={index}
                  className="h-6 w-auto lg:h-6"
                  src={IconMapping[software] || projectsImageMapping["default"]}
                  alt={software}
                  width={30}
                  height={30}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </FramerMotion>
  );
}

export default CardComponent;
