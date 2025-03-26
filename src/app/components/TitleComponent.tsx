import {TitleProps} from "@/definitions/types";
import FramerMotion from "./Animation/FramerMotion";

function TitleComponent({uptitle, title}: TitleProps) {
  return (
    <>
      <FramerMotion yInitial={50} yWhileInView={0}>
        <div className="text-center lg:mb-12 mb-6">
          <span className="text-strawberry-700 uppercase tracking-wider">{uptitle}</span>
          <div>
            <h2 className="text-mocha-200 text-2xl md:text-4xl mt-2 font-michael ">{title}</h2>
          </div>
        </div>
      </FramerMotion>
    </>
  );
}

export default TitleComponent;
