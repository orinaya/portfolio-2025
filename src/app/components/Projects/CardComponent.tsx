"use client";
import Image from "next/image";
import {ProjectTypes} from "@/definitions/types";
import IconMapping from "@/utils/iconMapping";
import projectsImgMapping from "@/utils/projectsImgMapping";
import FramerMotion from "../Animation/FramerMotion";
import {useRouter} from "next/navigation";

function CardComponent({image, title, description, softwares}: ProjectTypes) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/projets/${title}`);
  };

  return (
    <FramerMotion scaleInitial={1} scaleWhileInView={1} transitionDuration={0.8}>
      <div
        onClick={handleClick}
        className="card-container flex relative rounded-lg cursor-pointer 
                   transition-transform duration-300 hover:scale-[1.05] 
                   hover:shadow-xl bg-white overflow-hidden h-[220px] lg:h-[200px]"
      >
        <Image
          src={projectsImgMapping[image] || projectsImgMapping["default"]}
          alt={title}
          className="object-cover rounded-l-lg w-[11.5rem] lg:w-[8rem] h-full"
          width={180}
          height={250}
        />
        <div className="card-content bg-white rounded-r-lg p-4 flex flex-col justify-between lg:w-44">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold  text-sm lg:text-lg">{title}</h3>
            <p className="text-sm  line-clamp-3">{description}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-medium text-base">Outils</p>
            <div className="flex gap-2 flex-wrap">
              {softwares.map((software, index) => (
                <Image
                  key={index}
                  className="h-6 w-auto lg:h-9"
                  src={IconMapping[software] || projectsImgMapping["default"]}
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
