import IconMapping from "@/utils/iconMapping";
import projectsImgMapping from "@/utils/projectsImgMapping";
import Image, {StaticImageData} from "next/image";

interface CardComponentProps {
  id?: number;
  title: string;
  description: string;
  image: string;
  softwares: string[];
  date: number;
}

const CardComponent: React.FC<CardComponentProps> = ({title, description, image, softwares}) => {
  return (
    <div className="card-container flex relative rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200 hover:brightness-105 hover:drop-shadow-xl">
      {/* <Image
        className="object-cover rounded-l-lg w-[11.5rem] lg:w-[12.8rem]"
        src={image}
        alt={title}
        width={180}
        height={220}
      /> */}

      <Image
        src={projectsImgMapping[image]}
        alt={title}
        className="object-cover rounded-l-lg w-[11.5rem] lg:w-[12.8rem]"
        width={180}
        height={220}
      />

      <div className="card-content bg-white rounded-r-lg p-4 w-32 lg:w-44">
        <div className="flex flex-col gap-1 h-full justify-between">
          <div>
            <h3 className="font-semibold text-lg text-green-900">{title}</h3>
            <p className="text-sm lg:text-base">{description}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-medium text-base">Outils</p>
            <div className="flex gap-1 flex-wrap">
              {softwares.map((software, index) => (
                <Image
                  key={index}
                  className="h-9 w-auto"
                  src={IconMapping[software]}
                  alt={software}
                  width={30}
                  height={30}
                />

                //   <Image
                //   src={projectsImgMapping[image]}
                //   alt={title}
                //   className="object-cover rounded-l-lg w-[11.5rem] lg:w-[12.8rem]"
                //   width={180}
                //   height={220}
                // />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
